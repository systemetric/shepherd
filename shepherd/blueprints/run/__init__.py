# encoding: utf-8


import atexit
from functools import partial
import json
import os
import sys
from enum import Enum

from flask import Blueprint, redirect, url_for, request, session, send_file

# Import RcMux library for pipe handling
RCMUX_LIB_LOCATION="/home/pi/rcmux"
if not os.path.exists(RCMUX_LIB_LOCATION):
    raise ImportError(f"Could not find rcmux at {RCMUX_LIB_LOCATION}")

sys.path.insert(0, RCMUX_LIB_LOCATION)
from rcmux.client import *
from rcmux.common import *

blueprint = Blueprint("run", __name__)

PIPE_DIRECTORY = "/home/pi/pipes"
OUTPUT_FILE_PATH = "/media/RobotUSB/logs.txt"

class Mode(Enum):
    development = "dev"
    competition = "comp"

# Since we can't access app.debug in a blueprint, this will be run
# manually when the app is constructed.
def init():
    global STARTER_PIPE_NAME, rcmux_client
    rcmux_client = RcMuxClient()
    STARTER_PIPE_NAME = PipeName((PipeType.INPUT, "starter", "flask"), PIPE_DIRECTORY)
    rcmux_client.open_pipe(STARTER_PIPE_NAME, delete=True, create=True)
    atexit.register(partial(rcmux_client.close_pipe, STARTER_PIPE_NAME))

def send(request, params):
    global rcmux_client, STARTER_PIPE_NAME
    print(f"writing request '{request}'")
    s = json.dumps({
        "request": str(request),
        "params": dict(params)
    })
    rcmux_client.write(STARTER_PIPE_NAME, s.encode("utf-8"))

@blueprint.route("/output")
def get_output():
    return send_file(OUTPUT_FILE_PATH, mimetype="text/plain", cache_timeout=0)

@blueprint.route("/toggle_auto_refresh", methods=["POST"])
def toggle_auto_refresh():
    session["auto_refresh"] = not session.get("auto_refresh", True)
    return redirect(url_for(".index"))


@blueprint.route("/start", methods=["POST"])
def start():
    zone = request.form["zone"]
    mode = Mode[request.form["mode"]]
    send("start", {
        "mode": mode.value,
        "zone": int(zone)
    })
    return redirect(url_for(".index"))


@blueprint.route("/stop", methods=["POST"])
def stop():
    send("stop", {})
    return redirect(url_for(".index"))