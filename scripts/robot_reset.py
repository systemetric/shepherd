#!/usr/bin/env python3

import sys

try:
    from robocon.brain.reset import reset
    reset()
except ImportError:
    print("failed to locate robot library!")
    sys.exit(1)
