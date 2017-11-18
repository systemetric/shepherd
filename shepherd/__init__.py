# encoding: utf-8

from __future__ import absolute_import, division, print_function, unicode_literals

import errno
import os

from flask import Flask, render_template, send_file

from shepherd.blueprints import upload, run

app = Flask(__name__, template_folder="templates")

app.secret_key = os.urandom(32)

app.config["MAX_CONTENT_LENGTH"] = 16 * 1024 * 1024  # 16 MiB
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
