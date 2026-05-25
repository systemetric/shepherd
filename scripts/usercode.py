#!/usr/bin/env python3

import os
import sys
import time
import runpy
import threading

if len(sys.argv) != 2:
    print(f"usage: {sys.argv[0]} <usercode file>")
    sys.exit(1)

try:
    import smbus2
except ImportError:
    import fake_rpi
    sys.modules["smbus2"] = fake_rpi.smbus

user_src = os.path.dirname(os.path.abspath(sys.argv[1]))
old_cwd = os.getcwd()

def read_project_attrs(path):
    """ read sheep project attributes """
    attrs = {}
    with open(path, "r") as f:
        l = ""
        # attrs are formatted as "#::sheep:KEY:VAL"
        while (l := f.readline()).startswith("#::sheep:"):
            kv = l[9:].split(":")
            if len(kv) > 1:
                key = kv[0].strip()
                val = kv[1].strip()
                attrs[key] = val
    return attrs

def read_int(s):
    if s == None:
        return None
    try:
        r = int(s)
        return r
    except ValueError:
        return None

try:
    attrs = read_project_attrs(sys.argv[1])
    if "project_name" in attrs:
        print(f"Loading project '{attrs['project_name']}'...", end="")

    # import everything big here for module caching
    import robocon
    from robocon.game import *
    from robocon.brain import *
    from robocon.vision import *

    # the stuff we actually care about
    from robocon import MODE
    from robocon.brain import PWM_SERVO
    from robocon.brain.greengiant import (
        GreenGiantInternal,
        GreenGiantGPIOPinList,
        _GG_SERVO_GPIO_BASE,
        _GG_SERVO_PWM_BASE,
    )
    from hopper import HopperPipe, HopperPipeType, JsonReader

    start_pressed = False
    warnings = []
    start_pipe = HopperPipe(HopperPipeType.OUT, "robot", "robot/control")
    start_pipe.open()
    start_json_reader = JsonReader(start_pipe)

    bus = smbus2.SMBus(1)
    green_giant = GreenGiantInternal(bus)
    gg_version = green_giant.get_version()

    if gg_version >= 10:
        gg_servos = GreenGiantGPIOPinList(bus, gg_version, 5, _GG_SERVO_GPIO_BASE, _GG_SERVO_PWM_BASE)
    else:
        gg_servos = GreenGiantGPIOPinList(bus, gg_version, None, None, _GG_SERVO_PWM_BASE)

    def setup_defaults():
        """Load defaults from project attributes"""

        # whether we changed anything
        r = False

        # 12V power
        if attrs.get("enable_12v") == "true":
            print("Enabling 12V accessory power...", end="")
            green_giant.set_12v_acc_power(True)
            print("done")
            r = True
        elif attrs.get("enable_12v") == "false":
            print("Disabling 12V accessory power...", end="")
            green_giant.set_12v_acc_power(False)
            print("done")
            r = True

        # 5V power
        if attrs.get("enable_5v") == "true":
            print("Enabling 5V accessory power...", end="")
            green_giant.set_5v_acc_power(True)
            print("done")
            r = True
        elif attrs.get("enable_5v") == "false":
            print("Disabling 5V accessory power...", end="")
            green_giant.set_5v_acc_power(False)
            print("done")
            r = True

        # Servos
        def try_set_servo_pos(n):
            pos = read_int(attrs.get(f"servo{n}_pos"))
            if pos and pos >= -100 and pos <= 100:
                print(f"Setting servo {n} to position {pos}...", end="")
                gg_servos[n].mode = PWM_SERVO
                gg_servos[n] = pos
                print("done")
                r = True

        try_set_servo_pos(0)
        try_set_servo_pos(1)
        try_set_servo_pos(2)
        try_set_servo_pos(3)

        return r

    def report_hardware_status():
        """Print out a nice log message at the start of each robot init with
        the hardware status"""

        battery_voltage = green_giant.get_battery_voltage()
        battery_str = "Battery Voltage: %.2fv" % battery_voltage
        # GG cannot read voltages above 12.2v
        if battery_voltage > 12.2:
           battery_str = "Battery Voltage: > 12.2v"
        elif battery_voltage < 11.5:
            warnings.append("Battery voltage below 11.5v, consider changing for a charged battery")

        if gg_version < 3:
            warnings.append(
                "Green Giant version not 3 but instead {}".format(gg_version))

        # Adds a secret every now and again!
        POEM_ON_STARTUP.on_startup()

        # print report of hardware
        print("------HARDWARE REPORT------")
        #_logger.info("Time:   %s", datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        # no RTC on new boards, perhaps use a "run number" increment instead?
        print("Patch Version:     ")
        print(battery_str)
        #_logger.info("ADC Max:           %.2fv", self._adc_max)
        print(f"Robocon Board:   Yes (v{gg_version})")
        if gg_version <= 3:
            print("Motor Driver:  Cytron Board")
        else:
            print("Motor Driver:  PiLow Cover")
            # check and report open load here, warning race condition, is battery power on long enough?
            # Thinks that we just motor enable/disable and leave motor power always on?
        print("---------------------------")

        for warning in warnings:
            print(f"WARNING: {warning}")

        if not warnings:
            print("Hardware looks good")

    def wait_start_blink():
        """Blink status LED until start is pressed"""
        v = False
        while not start_pressed:
            time.sleep(0.2)
            green_giant.set_user_led(v)
            v = not v
        if gg_version < 10:
            # on GG keep main LED on to show the device is running
            green_giant.set_user_led(True)
        else:
            # for PiLow the board has its own Power LED, so this can be used by users
            green_giant.set_user_led(False)

    def get_start_info():
        """Get the start infomation from the named pipe"""

        # This call blocks until the start info is read
        settings = start_json_reader.read()

        assert "zone" in settings, "zone must be in startup info"
        assert "mode" in settings, "mode must be in startup info"
        if settings["zone"] not in range(4):
            raise ValueError(
                "zone must be in range 0-3 inclusive -- value of %i is invalid"
                % settings["zone"])
        if settings["mode"] not in ["dev", "comp"]:
            raise ValueError(f"mode must be \"dev\" or \"comp\", got {settings['mode']}")
        settings["zone"] = TEAM[f"T{settings['zone']}"]
        settings["mode"] = MODE[settings["mode"].upper()]
        return settings

    # just a fancy status display
    if "project_name" in attrs:
        print("done")

    if setup_defaults() or "project_name" in attrs:
        print("\n")

    report_hardware_status()

    blink_thread = threading.Thread(target=wait_start_blink, daemon=True)
    blink_thread.start()

    print("\nWaiting for start signal...")

    # This blocks till we get start info
    start_info = get_start_info()
    robocon.zone = start_info["zone"]
    robocon.mode = start_info["mode"]

    start_pressed = True
    blink_thread.join()

    # usercode needs these later
    del gg_servos
    del gg_version
    del green_giant
    del bus

    print("Robot started!\n")

    sys.path.insert(0, user_src)
    sys.argv = [sys.argv[1]]
    os.chdir(user_src)

    runpy.run_path(sys.argv[0], run_name="__main__")

except SystemExit as e:
    print(f"usercode exited: {e}")
    sys.exit(e.code)

except ImportError as e:
    print(f"failed to locate required modules! {e}")
    sys.exit(1)

finally:
    os.chdir(old_cwd)
