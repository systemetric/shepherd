"""Python Language Server used to implement autocompletion in sheep in the
native enviroment on the robot

For more infomation see:
https://code.visualstudio.com/api/language-extensions/language-server-extension-guide

Doc's of jsonrpc: https://json-rpc.readthedocs.io/en/latest/quickstart.html
Doc's of pyls_jsonrpc: https://github.com/palantir/python-language-server

TODO check that this is getting autocomplete for the robot libarry
"""
import logging
import json
import subprocess
import threading
import flask

from pyls_jsonrpc import streams
from geventwebsocket import WebSocketError

blueprint = flask.Blueprint("pyls", __name__)


@blueprint.route('/pyls')
def pyls_socket(socket):
    """Handle messages between the client and a `pyls` process"""
    ls_process = subprocess.Popen(
        ['pyls', '-v'],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE
    )

    server_interface = streams.JsonRpcStreamWriter(ls_process.stdin)

    def process_message(message):
        serialized_json = json.dumps(message)
        socket.send(serialized_json)
        logging.debug(serialized_json)

    def server_data_to_client():
        reader = streams.JsonRpcStreamReader(ls_process.stdout)
        reader.listen(process_message)

    thread = threading.Thread(target=server_data_to_client)
    thread.daemon = True
    thread.start()

    try:
        while not socket.closed:
            message = json.loads(socket.receive())
            server_interface.write(message)
            logging.debug(message)
    except (TypeError, WebSocketError) as err:
        # When the client exits these errors can be raised
        logging.info("Exiting pyls with {}".format(err))
    finally:
        ls_process.kill()
