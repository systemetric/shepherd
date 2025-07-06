from enum import Enum

class State(Enum):
    # Once shepherd is up, we are by definition ready to run code, so
    # there's no need for a "booting" state.
    ready = object()
    running = object()
    post_run = object()

class Mode(Enum):
    dev = "dev"
    comp = "comp"