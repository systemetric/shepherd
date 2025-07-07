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

syslogger = logging.getLogger()
syslogger.addHandler(SysLogHandler('/dev/log'))

app = Flask(__name__, template_folder="templates")
sockets = Sockets(app)

# Allow resources to be fetched from cross origin
CORS(app, resources=r'/*')
app.secret_key = os.urandom(32)

app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.config["MAX_CONTENT_LENGTH"] = 64 * 1024 * 1024  # 64 MiB

app.config["SHEPHERD_USER_CODE_ENTRYPOINT_NAME"] = "main.py"
app.config["SHEPHERD_USER_CODE_PATH"] = "/home/pi/usercode/"

run.init()

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
