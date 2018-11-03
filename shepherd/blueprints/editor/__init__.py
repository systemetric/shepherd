import json
import os
import os.path as path
import re

from flask import Blueprint, request

blueprint = Blueprint("editor", __name__)

robotsrc_path = path.join(os.getcwd(), "robotsrc")
main_path = path.join(robotsrc_path, 'main.py')
main_file = open(main_path, 'w')
main_file.write('# DO NOT DELETE\n')
main_file.close()


@blueprint.route('/')
def get_files():
    project_paths = [f for f in os.listdir(robotsrc_path)
                     if path.isfile(path.join(robotsrc_path, f))
                     and (f.endswith('.py') or f.endswith(".xml"))
                     and f != 'main.py']

    def read_project(project_path):
        with open(path.join(robotsrc_path, project_path), 'r') as project_file:
            content = project_file.read()

        return {
            'filename': project_path,
            'content': content
        }

    return json.dumps({
        'main': main_path,
        'projects': list(map(read_project, project_paths))
    })


@blueprint.route("/save/<string:filename>", methods=["POST"])
def save_file(filename):
    dots = len(re.findall("\.", filename))
    if dots == 1:
        f = open(path.join(robotsrc_path, filename), 'w')
        f.write(request.data)
        f.close()
    return ""


@blueprint.route("/delete/<string:filename>", methods=["DELETE"])
def delete_file(filename):
    dots = len(re.findall("\.", filename))
    if dots == 1:
        os.unlink(path.join(robotsrc_path, filename))
    return ""
