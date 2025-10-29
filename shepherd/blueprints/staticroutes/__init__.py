from os import path
from flask import Blueprint, send_file, send_from_directory

blueprint = Blueprint("staticroutes", __name__)

__dirname = path.dirname(path.realpath(__file__))

docs_path = path.join(__dirname, "docs")
editor_path = path.join(__dirname, "editor")

@blueprint.route("docs/")
def send_doc_index():
    return send_file(path.join(docs_path, "index.html"))

@blueprint.route("docs/<path:name>")
def send_doc_file(name):
    p = path.join(docs_path, name)
    
    if path.isfile(p):
        return send_file(p)
    else:
        return send_file(path.join(p, "index.html")) 

@blueprint.route("images/<path:filename>")
def send_image_for_docs(filename):
    return send_from_directory(path.join(docs_path,"images"),filename)

@blueprint.route("editor/")
def send_editor_index():
    return send_file(path.join(editor_path, "index.html"))


@blueprint.route("editor/<path:filename>")
def send_editor_file(filename):
    return send_from_directory(editor_path, filename)
