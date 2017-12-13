# encoding: utf-8

from __future__ import absolute_import, division, print_function, unicode_literals

import atexit
from datetime import datetime, timedelta
import errno
from functools import partial
import json
import os
import subprocess
import sys
from tempfile import mktemp
import threading

from enum import Enum
from flask import Blueprint, render_template, flash, redirect, url_for, request, current_app, session
from pytz import utc

from shepherd.competition import ROUND_LENGTH


blueprint = Blueprint("run", __name__, template_folder="templates")

REAP_GRACE_TIME = 5  # Seconds before user code is forcefully killed


# Since we can't access app.debug in a blueprint, this will be run
# manually when the app is constructed.
def init(app):
    # Factored into separate functions so we can call them separately in
    # `blueprints.upload` (tight coupling ftw!!1!)
    _reset_state()
    _start_user_code(app)
    _set_reaper_at_exit()
    _start_output_queuer()

def _reset_state():
    global USER_FIFO_PATH, state, zone, mode, disable_reaper, reaper_timer, reap_time, user_code, user_output
    # Yes, it's (literally) global state. Deal with it.

    # tempfile.mktemp is deprecated, but there's no possibility of a race --
    # os.mkfifo raises if its path already exists.
    USER_FIFO_PATH = mktemp(prefix="shepherd-fifo-")
    os.mkfifo(USER_FIFO_PATH)
    atexit.register(partial(os.remove, USER_FIFO_PATH))
    state = State.ready  # The state of the user code.
    zone = None  # The robot's home zone, an integer from 0 to 3.
    mode = None  # The robot's mode (development or competition), used for marker recognition.
    disable_reaper = None  # Whether the reaper will kill the user code or not.
    reaper_timer = None  # The threading.Timer object that controls the reaper.
    reap_time = None  # The time at which the user code will be killed.
    user_code = None  # A subprocess.Popen object representing the running user code.
    user_output = []  # A list containing lines of the user code's stdout and stderr.

def _start_user_code(app):
    global user_code
    # Start the user code.
    user_code = subprocess.Popen(
        [
            # python -u /path/to/the_code.py
            sys.executable, "-u", app.config["SHEPHERD_USER_CODE_ENTRYPOINT_PATH"],
            # --startfifo /path/to/fifo
            "--startfifo", USER_FIFO_PATH,
        ],
        stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
        bufsize=1,  # Line-buffered
        close_fds="posix" in sys.builtin_module_names,  # Only if we're not on Windows
    )

def _set_reaper_at_exit():
    atexit.register(reap)  # Attempt to kill the user code (might not work if we crash or get signalled to die).

def _start_output_queuer():
    global output_queuer, user_code, user_output, output_queuer_id
    # Signal to any existing output queuer that it is stale and should exit.
    try:
        output_queuer_id += 1
    except NameError:
        output_queuer_id = 1
    output_queuer = threading.Thread(target=buffer_from_file, args=(user_code.stdout, user_output))
    output_queuer.daemon = True  # Program exits even if thread hasn't exited.
    output_queuer.start()


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


# <https://stackoverflow.com/a/4896288/5951320>
def buffer_from_file(f, lst):
    """Copy lines from a file-like object to a list."""
    global output_queuer_id
    my_id = output_queuer_id
    print("output_queuer starting, id {}".format(my_id))
    with f:
        # This is a nasty hack, described here:
        # <https://web.archive.org/web/20141015064057/http://mail.python.org/pipermail/python-list/2013-August/654330.html>
        # to work around a wart in Python 2 that causes `f` to be
        # buffered in advance of the current line. This intermittently
        # causes the loop body to stop execution until there is more
        # output available from `f` -- frequently only after a
        # significant amount of output has been generated (4 KiB).
        for line in iter(f.readline, b""):  # The second argument is a sentinel.
            lst.append(line.rstrip("\n"))
            if output_queuer_id > my_id:
                print("output_queuer with id {} is now stale, exiting (current id is {})".format(my_id, output_queuer_id))
                break
        else:
            print("output_queuer with id {} got EOF on user_code output, exiting".format(my_id))
    print("output_queuer finished, id {} (less than current id {})".format(my_id, output_queuer_id))


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
        output="\n".join(user_output),
    )


@blueprint.route("/output")
def get_output():
    global state
    return render_template("run/output.html", output="\n".join(user_output), state=state, states=State)


@blueprint.route("/time_left")
def get_time_left():
    return render_template(
        "run/time_left.html",
        time_left=time_left(),
    )


@blueprint.route("/toggle_auto_refresh", methods=["POST"])
def toggle_auto_refresh():
    session["auto_refresh"] = not session.get("auto_refresh", True)
    return redirect(url_for(".index"))


@blueprint.route("/start", methods=["POST"])
def start():
    global state, zone, mode, disable_reaper, reaper_timer, reap_time, user_code, user_output
    zone = request.form["zone"]
    mode = Mode[request.form["mode"]]
    disable_reaper = request.form.get("disable-reaper")
    if state == State.ready:
        if mode == Mode.competition and disable_reaper:
            flash("You're not allowed to use debug options in the competition!", "error")
        else:
            state = State.running
            if user_code.poll() is not None:
                # User code is not running any more, don't bother starting it.
                reap(reason="code is already dead")
                flash("Your code seems to have crashed, not starting it.", "error")
            else:
                print("opening fifo")
                with open(USER_FIFO_PATH, "w") as f:
                    print("dumping json")
                    json.dump(
                        {
                            "mode": mode.value,
                            "zone": int(zone),
                            "arena": "A",
                        }, f
                    )
                    print("json dumped")
                if not disable_reaper:
                    reaper_timer = threading.Timer(ROUND_LENGTH, reap)
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
        reap()
        flash("Stopped the robot!")
    elif state == State.post_run:
        flash("Code already ran, can't stop it")
    else:
        raise Exception("This can't happen")
    return redirect(url_for(".index"))


def reap(reason=None):
    global state, user_code
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
        threading.Timer(REAP_GRACE_TIME, butcher).start()
        try:
            user_code.communicate()
        except Exception as e:
            print("death: Caught an error while killing user code, sod Python's I/O handling...")
            print("death: The error was: {}: {}".format(type(e), e))
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
