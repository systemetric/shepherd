#!/usr/bin/python3

import os, sys
import RPi.GPIO as GPIO
import json
import time
import subprocess, threading
import atexit
from pytz import utc
from pathlib import Path

from enums import Mode, State
from reaper import Reaper

from hopper.client import *
from hopper.common import *

ROBOT_LIB_LOCATION = "/home/pi/robot"

def load_package_paths():
    if not os.path.exists(ROBOT_LIB_LOCATION):
        raise ImportError(f"Cannot find robot library!")
    
    sys.path.insert(0, ROBOT_LIB_LOCATION)

class Runner:
    ROUND_LENGTH = 180
    REAP_GRACE_TIME = 5 
    OUTPUT_FILE_PATH = "/media/RobotUSB/logs.txt"

    # Tell the WebSocket handler to clear its buffer
    ERASE_ESCAPE_SEQUENCE = b'\033[2J'

    USER_PIPE_NAME = None
    FLASK_PIPE_NAME = None
    LOG_PIPE_NAME = None
    HOPPER_CLIENT = None

    PIPE_DIRECTORY = "/home/pi/pipes"

    START_BUTTON_BOUNCE_TIME=1000
    START_BUTTON_PIN = 26

    GAME_CONTROL_PATH = Path("/media/ArenaUSB")

    MODE = None
    ZONE = None
    STATE = None

    REAPER_TIMER = None
    DISABLE_REAPER = None
    REAP_TIME = None

    USERCODE = None
    OUTPUT_FILE = None

    USER_CODE_PATH = "/home/pi/shepherd/usercode"
    USER_CODE_ENTRYPOINT_NAME = "main.py"
    USER_CODE_ENTRYPOINT_PATH = os.path.join(USER_CODE_PATH,USER_CODE_ENTRYPOINT_NAME)

    USER_CODE_LOG_PIPE_NAME = None

    RUNNING = False

    def __init__(self):
        os.makedirs(self.USER_CODE_PATH, exist_ok=True)
        os.chown(self.USER_CODE_PATH, 1000, 1000) # pi:pi

        self.HOPPER_CLIENT = HopperClient()
        
        self.LOG_PIPE_NAME = PipeName((PipeType.INPUT, "log", "starter"), self.PIPE_DIRECTORY)
        self.HOPPER_CLIENT.open_pipe(self.LOG_PIPE_NAME, delete=True, create=True)

        self.USER_PIPE_NAME = PipeName((PipeType.INPUT, "start-button", "starter"), self.PIPE_DIRECTORY)
        self.HOPPER_CLIENT.open_pipe(self.USER_PIPE_NAME, delete=True, create=True)

        self.FLASK_PIPE_NAME = PipeName((PipeType.OUTPUT, "starter", "starter"), self.PIPE_DIRECTORY)
        self.HOPPER_CLIENT.open_pipe(self.FLASK_PIPE_NAME, delete=True, create=True, blocking=True)

        self.__load_start_graphic()
        self.__init_gpio()

        robot_reset.reset()
        self.__reset_state()
        self.__start_usercode()
        self.__set_reaper_at_exit()

    def __set_reaper_at_exit(self):
        atexit.register(self.__reap)

    def __reap(self, reason=""):
        Reaper.reap(self.STATE, self.USERCODE, self.OUTPUT_FILE, reason=reason, reap_grace_time=self.REAP_GRACE_TIME)

    def __reset_state(self):
        self.STATE = State.ready  # The state of the user code.
        self.ZONE = None  # The robot's home zone, an integer from 0 to 3.
        self.MODE = None  # The robot's mode (development or competition), used for marker recognition.
        self.DISABLE_REAPER = None  # Whether the reaper will kill the user code or not.
        self.REAPER_TIMER = None  # The threading.Timer object that controls the reaper.
        self.REAP_TIME = None  # The time at which the user code will be killed.
        self.USERCODE = None  # A subprocess.Popen object representing the running user code.
        self.OUTPUT_FILE = None  # The file to which output from the user code goes.

    def __start_usercode(self):
        # Send the erase escape sequence to clear remote logs
        self.HOPPER_CLIENT.write(self.LOG_PIPE_NAME, self.ERASE_ESCAPE_SEQUENCE)

        pipe_fd = self.HOPPER_CLIENT.get_pipe_by_pipe_name(self.LOG_PIPE_NAME).fd

        environment = dict(os.environ)
        environment["PYTHONPATH"] = ROBOT_LIB_LOCATION
        # Start the user code.
        self.USERCODE = subprocess.Popen(
            [
                # python -u /path/to/the_code.py
                sys.executable, "-u", self.USER_CODE_ENTRYPOINT_PATH,
            ],
            stdout=pipe_fd,
            stderr=pipe_fd,
            bufsize=1,  # Line-buffered
            close_fds="posix" in sys.builtin_module_names,  # Only if we're not on Windows
            env=environment,
        )
        user_code_wait_thread = threading.Thread(target=self.__user_code_wait)
        user_code_wait_thread.daemon = True
        user_code_wait_thread.start()

    def __user_code_wait(self):
        exit_code = self.USERCODE.wait()
        if exit_code == 1:
            self.__round_end()

    def __round_end(self):
        self.__reap(reason="end of round")
        robot_reset.reset()
        time.sleep(0.5)

    def __init_gpio(self):
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.START_BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)

        GPIO.add_event_detect(self.START_BUTTON_PIN, GPIO.FALLING, callback=self.__gpio_start, bouncetime=self.START_BUTTON_BOUNCE_TIME)

    def __load_start_graphic(self):
        teamname_file = Path('/home/pi/teamname.txt')
        if teamname_file.exists():
            teamname_jpg = teamname_file.read_text().replace('\n', '') +'.jpg'
        else:
            teamname_jpg = 'none'

        # Pick a start imapge in order of preference :
        #     1) We have a team corner image on the USB
        #     2) The team have uploaded their own image to the robot
        #     3) We have a generic corner image on the USB
        #     4) The game image
        start_graphic = self.GAME_CONTROL_PATH / teamname_jpg
        if not start_graphic.exists():
            # attempt to find the team specific corner graphic from the ArenaUSB
            start_graphic = Path('/home/pi/shepherd/robotsrc/team_logo.jpg')
        if not start_graphic.exists():
            # attempt to find the default corner graphic from ArenaUSB
            start_graphic = self.GAME_CONTROL_PATH / 'Corner.jpg'
        if not start_graphic.exists():
            # finally look for a game specific logo
            start_graphic = Path('/home/pi/game_logo.jpg')
        if start_graphic.exists():
            # if ANY of the above paths generate a useful image, copy it into the web "static" files like an animal who doesn't understand the word static
            # if this all fails then the user will see the last image the camera took
            static_graphic = Path('/home/pi/shepherd/shepherd/static/image.jpg')
            static_graphic.write_bytes(start_graphic.read_bytes())

    def __gpio_start(self, _):
        zone = "0"
        if (self.GAME_CONTROL_PATH / 'zone1.txt').exists():
            zone = "1"
        elif (self.GAME_CONTROL_PATH / 'zone2.txt').exists():
            zone = "2"
        elif (self.GAME_CONTROL_PATH / 'zone3.txt').exists():
            zone = "3"

        self.__start({
            "mode": "comp",
            "zone": int(zone)
        })

    def __start(self, params):
        self.MODE = Mode[params["mode"]]
        self.ZONE = int(params["zone"])

        if self.STATE == State.ready:
            self.STATE = State.running

            start_args = json.dumps({
                "mode": self.MODE.value,
                "zone": self.ZONE,
                "arena": "A",
            })

            # Put the JSON configuration in the pipe
            self.HOPPER_CLIENT.write(self.USER_PIPE_NAME, start_args.encode("utf-8"))

            if self.MODE == Mode.comp:
                self.REAPER_TIMER = threading.Timer(self.ROUND_LENGTH, self.__round_end)
                # If we get told to exit, there's no point waiting around for the round to finish.
                self.REAPER_TIMER.daemon = True
                self.REAPER_TIMER.start()
                print("Started the robot! It will stop automatically in {} seconds.".format(self.ROUND_LENGTH))
            else:
                print("Started the robot! It will not stop automatically.")

    def __stop(self):
        if self.STATE == State.ready:
            print("The robot has not run yet, can't stop it before it's started.")
        elif self.STATE == State.running:
            try:
                self.REAPER_TIMER.cancel()
            except AttributeError:  # probably because reaper_timer is None
                pass
            self.__round_end()
            print("Stopped the robot!")
        elif self.STATE == State.post_run:
            print("Code already ran, can't stop it")
        else:
            raise Exception("This can't happen")
        
    def __upload(self):
        if self.REAPER_TIMER is not None:
            self.REAPER_TIMER.cancel()

        self.__reap("new code upload")

        robot_reset.reset()
        self.__reset_state()
        self.__start_usercode()

    def run(self):
        self.RUNNING = True
        while (1):
            b = self.HOPPER_CLIENT.read(self.FLASK_PIPE_NAME)
            if b != None and len(b) > 0:
                s = b.decode("utf-8").strip("\n ")
                d = json.loads(s)
                if d["request"] == "start":
                    self.__start(d["params"])
                elif d["request"] == "stop":
                    self.__stop()
                elif d["request"] == "upload":
                    self.__upload()

if __name__ == "__main__":
    load_package_paths()

    import robot.reset as robot_reset

    r = Runner()
    r.run()
