# encoding: utf-8

from __future__ import absolute_import, division, print_function, unicode_literals

import errno
import os

from flask import Flask, render_template, send_file
import RPi.GPIO as GPIO

from shepherd.blueprints import upload, run


START_BUTTON_PIN = 5  # This is a BCM pin number (BCM0 corresponds to phys27).


app = Flask(__name__, template_folder="templates")


app.secret_key = os.urandom(32)


app.config["MAX_CONTENT_LENGTH"] = 64 * 1024 * 1024  # 64 MiB
app.config["SHEPHERD_USER_CODE_PATH"] = os.path.join("/", "opt", "shepherd")
app.config["SHEPHERD_USER_CODE_ENTRYPOINT_NAME"] = "main.py"
app.config["SHEPHERD_USER_CODE_ENTRYPOINT_PATH"] = os.path.join(app.config["SHEPHERD_USER_CODE_PATH"], app.config["SHEPHERD_USER_CODE_ENTRYPOINT_NAME"])
try:
    os.mkdir(app.config["SHEPHERD_USER_CODE_PATH"])
except OSError as e:
    if e.errno == errno.EEXIST and os.path.isdir(app.config["SHEPHERD_USER_CODE_PATH"]):
        pass
    else:
        raise


# Avoid running the user code twice.
if (not app.debug) or os.environ.get("WERKZEUG_RUN_MAIN"):
    run.init(app)
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(START_BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)
    def _start(channel):
        zone = "0"
        if os.path.exists("/media/ArenaUSB/zone1.txt"):
            zone = "1"
        elif os.path.exists("/media/ArenaUSB/zone2.txt"):
            zone = "2"
        elif os.path.exists("/media/ArenaUSB/zone3.txt"):
            zone = "3"
        # this is the weirdest calling convention
        ctx = app.test_request_context(data={
            "zone": zone,
            "mode": "competition",
        })
        with ctx:
            run.start()
    GPIO.add_event_detect(START_BUTTON_PIN, GPIO.FALLING, callback=_start, bouncetime=3000)


app.register_blueprint(upload.blueprint, url_prefix="/upload")
app.register_blueprint(run.blueprint, url_prefix="/run")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/favicon.ico")
def favicon():
    return send_file(os.path.join(app.root_path, "static", "favicon.ico"))
