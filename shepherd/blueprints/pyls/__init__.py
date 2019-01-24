import json
import subprocess
import threading

from flask import Blueprint
from jsonrpc import streams
from geventwebsocket import WebSocketError

blueprint = Blueprint("pyls", __name__)


@blueprint.route('/pyls')
def pyls_socket(socket):
    proc = subprocess.Popen(
        ['pyls', '-v'],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE
    )

    writer = streams.JsonRpcStreamWriter(proc.stdin)

    def consume():
        reader = streams.JsonRpcStreamReader(proc.stdout)
        reader.listen(lambda msg: socket.send(json.dumps(msg)))

    thread = threading.Thread(target=consume)
    thread.daemon = True
    thread.start()

    try:
        while not socket.closed:
            message = socket.receive()
            writer.write(json.loads(message))
    except (TypeError, WebSocketError):
        pass
    finally:
        proc.kill()
