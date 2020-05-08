"""Methods for saving, reading and deleting sheep projects"""
import json
import os
import os.path as path
import re

from flask import Blueprint, request

blueprint = Blueprint("editor", __name__)

robotsrc_path = path.join(os.getcwd(), "robotsrc")
if not path.exists(robotsrc_path):
    os.mkdir(robotsrc_path)
main_path = path.join(robotsrc_path, 'main.py')
main_file = open(main_path, 'w')
main_file.write('# DO NOT DELETE\n')
main_file.close()
blocks_path = path.join(robotsrc_path, 'blocks.json')


@blueprint.route('/')
def get_files():
    project_paths = [f for f in os.listdir(robotsrc_path)
                     if path.isfile(path.join(robotsrc_path, f))
                     and (f.endswith('.py') or f.endswith(".xml") or f == "blocks.json")
                     and f != 'main.py']

    def read_project(project_path):
        with open(path.join(robotsrc_path, project_path), 'r') as project_file:
            content = project_file.read()

        return {
            'filename': project_path,
            'content': content
        }

    blocks = {}
    if path.exists(blocks_path):
        with open(blocks_path, 'r') as blocks_file:#
            try:
                blocks = json.load(blocks_file)
            except ValueError:
                pass
    if "requires" not in blocks:
        blocks["requires"] = []
    if "header" not in blocks:
        blocks["header"] = ""
    if "footer" not in blocks:
        blocks["footer"] = ""
    if "blocks" not in blocks:
        blocks["blocks"] = []

    return json.dumps({
        'main': main_path,
        'blocks': blocks,
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
    if filename == "blocks.json":
        return ""
    dots = len(re.findall("\.", filename))
    if dots == 1:
        os.unlink(path.join(robotsrc_path, filename))
    return ""
