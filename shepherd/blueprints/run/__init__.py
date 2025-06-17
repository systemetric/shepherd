# encoding: utf-8


import atexit
from datetime import datetime, timedelta
import errno
from functools import partial
import json
import os
import subprocess
import sys
import threading
import time

from enum import Enum
from flask import Blueprint, render_template, flash, redirect, url_for, request, current_app, session, send_file
from pytz import utc

from shepherd.competition import ROUND_LENGTH

# This *should* be safe, if nasty
# Would be nicer to use classmethods
ROBOT_LIB_LOCATION = "/home/pi/robot"
if not os.path.exists(ROBOT_LIB_LOCATION):
    raise ImportError(f"Could not find robot lib at {ROBOT_LIB_LOCATION}")

sys.path.insert(0, ROBOT_LIB_LOCATION)
import robot.reset as robot_reset

# Import RcMux library for pipe handling
RCMUX_LIB_LOCATION="/home/pi/rcmux"
if not os.path.exists(RCMUX_LIB_LOCATION):
    raise ImportError(f"Could not find rcmux at {RCMUX_LIB_LOCATION}")

sys.path.insert(0, RCMUX_LIB_LOCATION)
from rcmux.client import *
from rcmux.common import *

blueprint = Blueprint("run", __name__, template_folder="templates")

REAP_GRACE_TIME = 5  # Seconds before user code is forcefully killed
OUTPUT_FILE_PATH = "/media/RobotUSB/logs.txt"
PIPE_DIRECTORY = "/home/pi/pipes"

# Since we can't access app.debug in a blueprint, this will be run
# manually when the app is constructed.
def init(app):
    global USER_PIPE_NAME, rcmux_client
    rcmux_client = RcMuxClient()
    USER_PIPE_NAME = PipeName((PipeType.INPUT, "start-button", "flask"), PIPE_DIRECTORY)
    rcmux_client.open_pipe(USER_PIPE_NAME, delete=True, create=True)
    atexit.register(partial(rcmux_client.close_pipe, USER_PIPE_NAME))

    # Factored into separate functions so we can call them separately in
    # `blueprints.upload` (tight coupling ftw!!1!)
    robot_reset.reset()
    _reset_state()
    _start_user_code(app)
    _set_reaper_at_exit()


def _reset_state():
    global USER_PIPE_NAME, state, zone, mode, disable_reaper, reaper_timer, reap_time, user_code, output_file, rcmux_client
    # Yes, it's (literally) global state. Deal with it.

    state = State.ready  # The state of the user code.
    zone = None  # The robot's home zone, an integer from 0 to 3.
    mode = None  # The robot's mode (development or competition), used for marker recognition.
    disable_reaper = None  # Whether the reaper will kill the user code or not.
    reaper_timer = None  # The threading.Timer object that controls the reaper.
    reap_time = None  # The time at which the user code will be killed.
    user_code = None  # A subprocess.Popen object representing the running user code.
    output_file = None  # The file to which output from the user code goes.

def _user_code_wait():
    global user_code
    exit_code = user_code.wait()
    # TODO: instead of checking for error code 1, check if the code isn't an expected code from SIGTERM or SIGKILL
    if exit_code == 1:
        round_end()

def _start_user_code(app):
    global user_code, output_file, USER_PIPE_NAME
    output_file = open(OUTPUT_FILE_PATH, "w", 1)
    environment = dict(os.environ)
    environment["PYTHONPATH"] = ROBOT_LIB_LOCATION
    # Start the user code.
    user_code = subprocess.Popen(
        [
            # python -u /path/to/the_code.py
            sys.executable, "-u", app.config["SHEPHERD_USER_CODE_ENTRYPOINT_PATH"],
        ],
        stdout=output_file, stderr=subprocess.STDOUT,
        bufsize=1,  # Line-buffered
        close_fds="posix" in sys.builtin_module_names,  # Only if we're not on Windows
        env=environment,
    )
    user_code_wait_thread = threading.Thread(target=_user_code_wait)
    user_code_wait_thread.daemon = True
    user_code_wait_thread.start()

def _set_reaper_at_exit():
    atexit.register(reap)  # Attempt to kill the user code (might not work if we crash or get signalled to die).


class State(Enum):
    # Once shepherd is up, we are by definition ready to run code, so
    # there's no need for a "booting" state.
    ready = object()
    running = object()
    post_run = object()


class Mode(Enum):  # Names are important -- they let us get a Mode from the submitted (HTML) form.
    development = "dev"
    competition = "comp"


@blueprint.before_app_first_request
@blueprint.route("/reset", methods=["POST"])
def reset():
    # TODO
    return "This is no longer functional."


def time_left():
    global reap_time
    time_left = None
    if reap_time is not None:
        time_left = reap_time - datetime.now(tz=utc)
        if time_left < timedelta(0):  # If reap_time is in the past:
            time_left = None
    return time_left.seconds if time_left is not None else None


@blueprint.route("/")
def index():
    global state
    if state == State.running:
        if user_code.poll() is not None:
            state = State.post_run
    return render_template(
        "run/index.html", state=state, states=State,
        zone=zone,
        mode=mode.name if mode is not None else None,
        disable_reaper=bool(disable_reaper),
        time_left=time_left(),
        display_time_left=reap_time is not None,
    )


@blueprint.route("/output")
def get_output():
    return send_file(OUTPUT_FILE_PATH, mimetype="text/plain", cache_timeout=0)


@blueprint.route("/time_left")
def get_time_left():
    return render_template(
        "run/time_left.html",
        time_left=time_left(),
    )


@blueprint.route("/picture")
def get_picture():
    return render_template("run/picture.html", state=state, states=State)


@blueprint.route("/toggle_auto_refresh", methods=["POST"])
def toggle_auto_refresh():
    session["auto_refresh"] = not session.get("auto_refresh", True)
    return redirect(url_for(".index"))


@blueprint.route("/start", methods=["POST"])
def start():
    global state, zone, mode, disable_reaper, reaper_timer, reap_time, user_code, rcmux_client, USER_PIPE_NAME
    zone = request.form["zone"]
    mode = Mode[request.form["mode"]]
    if state == State.ready:
        state = State.running
        if user_code.poll() is not None:
            # User code is not running any more, don't bother starting it.
            reap(reason="code is already dead")
            flash("Your code seems to have crashed, not starting it.", "error")
        else:
            start_args = json.dumps(
                {
                    "mode": mode.value,
                    "zone": int(zone),
                    "arena": "A",
                }
            )

            # Put the JSON configuration in the pipe
            rcmux_client.write(USER_PIPE_NAME, start_args.encode("utf-8"))

            if mode == Mode.competition:
                reaper_timer = threading.Timer(ROUND_LENGTH, round_end)
                # If we get told to exit, there's no point waiting around for the round to finish.
                reaper_timer.daemon = True
                reaper_timer.start()
                reap_time = datetime.now(tz=utc) + timedelta(seconds=ROUND_LENGTH)
                flash("Started the robot! It will stop automatically in {} seconds.".format(ROUND_LENGTH))
            else:
                flash("Started the robot! It will not stop automatically.")
    elif state == State.running:
        flash("The robot is already running, can't start it again.")
    elif state == State.post_run:
        flash("Code already ran, starting it again would be unsafe.")
    else:
        raise Exception("This can't happen")
    return redirect(url_for(".index"))


@blueprint.route("/stop", methods=["POST"])
def stop():
    global state, reaper_timer
    if state == State.ready:
        flash("The robot has not run yet, can't stop it before it's started.")
    elif state == State.running:
        try:
            reaper_timer.cancel()
        except AttributeError:  # probably because reaper_timer is None
            pass
        round_end()
        flash("Stopped the robot!")
    elif state == State.post_run:
        flash("Code already ran, can't stop it")
    else:
        raise Exception("This can't happen")
    return redirect(url_for(".index"))


def round_end():
    reap(reason="end of round")
    # _kill_motors()
    # _set_servos(0)
    robot_reset.reset()
    time.sleep(0.5)
    # _kill_gpios()


def reap(reason=None):
    global state, user_code, output_file
    if reason is None:
        print("Reaping user code")
    else:
        print("Reaping user code ({})".format(reason))
    if state != State.running:
        print("Warning: told to stop code, but state is {}, not State.running!".format(state))
    try:
        user_code.terminate()
    except OSError as e:
        if e.errno == errno.ESRCH:  # No such process
            pass
        else:
            raise
    if user_code.poll() is None:
        butcher_thread = threading.Timer(REAP_GRACE_TIME, butcher)
        butcher_thread.daemon = True
        butcher_thread.start()
        try:
            user_code.communicate()
        except Exception as e:
            print("death: Caught an error while killing user code, sod Python's I/O handling...")
            print("death: The error was: {}: {}".format(type(e), e))
        butcher_thread.cancel()
    if output_file is not None:
        try:
            output_file.write("\n==== END OF ROUND ====\n\n")
        except Exception:
            pass
        try:
            output_file.close()
        except Exception as e:
            print("death: Caught an error while closing user code's output.")
            print("death: The error was: {}: {}".format(type(e).__name__, e))
    state = State.post_run
    print("Done reaping user code")


def butcher():
    global user_code
    if user_code.poll() is None:
        print("Butchering user code")
        try:
            user_code.kill()
        except OSError as e:
            if e.errno == errno.ESRCH:  # No such process
                pass
            else:
                raise
        print("Done butchering user code")
