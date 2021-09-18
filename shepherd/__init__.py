# encoding: utf-8



import errno
import os
from pathlib import Path

from flask import Flask, render_template, send_file
from flask_sockets import Sockets
from flask_cors import CORS
import RPi.GPIO as GPIO
from logging.handlers import SysLogHandler
import logging

from shepherd.blueprints import upload, run, pyls, editor, staticroutes

START_BUTTON_PIN = 5  # This is a BCM pin number (BCM0 corresponds to phys27).

syslogger = logging.getLogger()
syslogger.addHandler(SysLogHandler('/dev/log'))

app = Flask(__name__, template_folder="templates")
sockets = Sockets(app)

# Allow resources to be fetched from cross origin
CORS(app, resources=r'/*')
app.secret_key = os.urandom(32)

app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.config["MAX_CONTENT_LENGTH"] = 64 * 1024 * 1024  # 64 MiB
# app.config["SHEPHERD_USER_CODE_PATH"] = os.path.join("/", "opt", "shepherd")
app.config["SHEPHERD_USER_CODE_PATH"] = os.path.join(os.getcwd(), "usercode")
app.config["SHEPHERD_USER_CODE_ENTRYPOINT_NAME"] = "main.py"
app.config["SHEPHERD_USER_CODE_ENTRYPOINT_PATH"] = os.path.join(app.config["SHEPHERD_USER_CODE_PATH"], app.config["SHEPHERD_USER_CODE_ENTRYPOINT_NAME"])
try:
    os.mkdir(app.config["SHEPHERD_USER_CODE_PATH"])
except OSError as e:
    if e.errno == errno.EEXIST and os.path.isdir(app.config["SHEPHERD_USER_CODE_PATH"]):
        pass
    else:
        raise e


# Avoid running the user code twice.
if (not app.debug) or os.environ.get("WERKZEUG_RUN_MAIN"):
    run.init(app)
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(START_BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)

    # Teamname should be set on a per brain basis before shipping
    # Its purpose is to allow the setting of specific graphics for help identifing teams in the arena.
    # Graphics are loaded from the ArenaUSB stick if available, or standard graphics from the stick are used.
    # this used to be in rc.local, but the looks of shame and dissapointment got the better of me 

    game_control_path = Path('/media/ArenaUSB')

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
    start_graphic = game_control_path / teamname_jpg
    if not start_graphic.exists():
        # attempt to find the team specific corner graphic from the ArenaUSB
        start_graphic = Path('robotsrc/team_logo.jpg')
    if not start_graphic.exists():
        # attempt to find the default corner graphic from ArenaUSB
        start_graphic = game_control_path / 'Corner.jpg'
    if not start_graphic.exists():
        # finally look for a game specific logo
        start_graphic = Path('/home/pi/game_logo.jpg')
    if start_graphic.exists():
        # if ANY of the above paths generate a useful image, copy it into the web "static" files like an animal who doesn't understand the word static
        # if this all fails then the user will see the last image the camera took
        static_graphic = Path('shepherd/static/image.jpg')
        static_graphic.write_bytes(start_graphic.read_bytes())

    def _start(channel):
        # Set the zone based on files in game_contol_path, defaulting to zone 0
        zone = "0"
        if (game_control_path / 'zone1.txt').exists():
            zone = "1"
        elif (game_control_path / 'zone2.txt').exists():
            zone = "2"
        elif (game_control_path / 'zone3.txt').exists():
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
app.register_blueprint(editor.blueprint, url_prefix="/files")
app.register_blueprint(staticroutes.blueprint, url_prefix="/")
sockets.register_blueprint(pyls.blueprint)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/favicon.ico")
def favicon():
    return send_file(os.path.join(app.root_path, "static", "favicon.ico"))
