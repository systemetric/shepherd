# encoding: utf-8


import atexit
from functools import partial
import json
import os
import sys
from fcntl import lockf, LOCK_EX, LOCK_UN
from enum import Enum

from flask import Blueprint, redirect, url_for, request, session, send_file

from hopper.client import *
from hopper.common import *

blueprint = Blueprint("run", __name__)

PIPE_DIRECTORY = "/home/pi/pipes"
OUTPUT_FILE_PATH = "/media/RobotUSB/logs.txt"

class Mode(Enum):
    development = "dev"
    competition = "comp"

# Since we can't access app.debug in a blueprint, this will be run
# manually when the app is constructed.
def init():
    global STARTER_PIPE_NAME, hopper_client
    hopper_client = HopperClient()
    STARTER_PIPE_NAME = PipeName((PipeType.INPUT, "starter", "flask"), PIPE_DIRECTORY)
    hopper_client.open_pipe(STARTER_PIPE_NAME, delete=True, create=True)
    atexit.register(partial(hopper_client.close_pipe, STARTER_PIPE_NAME))

def send(request, params = {}):
    global hopper_client, STARTER_PIPE_NAME
    print(f"writing request '{request}'")
    s = json.dumps({
        "request": str(request),
        "params": dict(params)
    })
    hopper_client.write(STARTER_PIPE_NAME, s.encode("utf-8"))

@blueprint.route("/output")
def get_output():
    return send_file(OUTPUT_FILE_PATH, mimetype="text/plain", cache_timeout=0)

@blueprint.route("/toggle_auto_refresh", methods=["POST"])
def toggle_auto_refresh():
    session["auto_refresh"] = not session.get("auto_refresh", True)
    return "", 204

@blueprint.route("/picture")
def get_picture():
    try:
        f = os.open("/home/pi/shepherd/shepherd/static/image.jpg", os.O_RDWR)
        lockf(f, LOCK_EX)
        return send_file("/home/pi/shepherd/shepherd/static/image.jpg", mimetype="image/jpeg")
    finally:
        if "f" in locals():
            lockf(f, LOCK_UN)
            os.close(f)

@blueprint.route("/start", methods=["POST"])
def start():
    zone = request.form["zone"]
    mode = Mode[request.form["mode"]]
    send("start", {
        "mode": mode.value,
        "zone": int(zone)
    })
    return "", 204


@blueprint.route("/stop", methods=["POST"])
def stop():
    send("stop")
    return "", 204
