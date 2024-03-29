# encoding: utf-8



from datetime import datetime
import errno
import os
import shutil
import tempfile
import zipfile

from flask import Blueprint, render_template, flash, redirect, url_for, request, abort, current_app

from shepherd.blueprints import run  # FIXME: this coupling is horrific
import robot.reset as robot_reset  # This *should* be safe, if nasty.

blueprint = Blueprint("upload", __name__, template_folder="templates")


@blueprint.route("/")
def index():
    return render_template("upload/index.html", last_upload_time=None)


@blueprint.route("/upload", methods=["POST"])
def upload():
    try:
        file = request.files["uploaded_file"]
    except KeyError:
        abort(400)
    if file.filename == "":
        flash("You didn't upload a file.", "error")
    else:
        flash("Got a file with filename {}".format(file.filename), "debug")
        err = process_uploaded_file(file)
        if err:
            flash(err, "error")
        else:
            flash("Your file looks good!", "success")  # TODO: run a linter on the code?
            if run.reaper_timer is not None:
                run.reaper_timer.cancel()
            run.reap(reason="new code upload")

            # Turn everything off
            # run._kill_motors()
            # run._kill_gpios()

            robot_reset.reset()

            # Make the world look like the Pi just booted
            # run._work_around_pic_servo_bug()
            run._reset_state()

            run._start_user_code(current_app)
    return redirect(url_for(".index"))


def process_uploaded_file(file):
    if file.mimetype.startswith("text") or file.filename.endswith(".py"):
        # Probably a plain Python file.
        tempdir = tempfile.mkdtemp(prefix="shepherd-user-code-")
        file.save(os.path.join(tempdir, current_app.config["SHEPHERD_USER_CODE_ENTRYPOINT_NAME"]))
        shutil.rmtree(current_app.config["SHEPHERD_USER_CODE_PATH"])
        shutil.move(tempdir, current_app.config["SHEPHERD_USER_CODE_PATH"])
        return None
    elif ("zip" in file.mimetype or file.filename.endswith(".zip")) and zipfile.is_zipfile(file):
        # Hopefully a zip file.
        tempdir = tempfile.mkdtemp(prefix="shepherd-user-code-")
        try:
            with zipfile.ZipFile(file, "r") as zip:
                zip.extractall(tempdir)
        except zipfile.BadZipfile:
            shutil.rmtree(tempdir)
            return "Your file looked like a zip file, but it isn't actually a valid zip file!"
        # Check that there's an entrypoint. 
        try:
            with open(os.path.join(tempdir, current_app.config["SHEPHERD_USER_CODE_ENTRYPOINT_NAME"]), "r"):
                pass
        except IOError as e:
            shutil.rmtree(tempdir)
            if e.errno in (errno.ENOENT, errno.EISDIR):
                return "Your file is a zip file, but it doesn't include a main.py file!"
            else:
                errorcode = errno.errorcode[e.errno]
                return "Your file is a zip file, but something went wrong after extracting it! (error: {})".format(errorcode)
        shutil.rmtree(current_app.config["SHEPHERD_USER_CODE_PATH"])
        shutil.move(tempdir, current_app.config["SHEPHERD_USER_CODE_PATH"])
        return None
    else:
        return "Your file doesn't look like valid code. Make sure the extension is correct."
