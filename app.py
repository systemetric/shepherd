#!/usr/bin/env python2
# encoding: utf-8

from __future__ import absolute_import, division, print_function, unicode_literals

import logging

from shepherd import app

logging.basicConfig(level=logging.INFO)

if __name__ == "__main__":
    from gevent import pywsgi
    from geventwebsocket.handler import WebSocketHandler

    server = pywsgi.WSGIServer(('', 80), app, handler_class=WebSocketHandler)
    server.serve_forever()
