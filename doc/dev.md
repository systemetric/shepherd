# Developing Shepherd

This page describes how to setup your system to develop Shepherd, either on
your own system, or on a RoboCon brain.

## Local

Shepherd development requires a *nix system, examples include both Linux and
macOS. Windows is explicitly not supported by Shepherd, or by most of its
dependencies.

Shepherd requires the following dependencies to be installed on your system:

- [Hopper](https://github.com/systemetric/hopper)
- [Midge](https://github.com/systemetric/midge)
- MQTT broker, e.g. Mosquitto
- Python 3.13
- A (relatively) recent libc, both glibc and musl should work. You probably
    don't need to worry about this, and you'll already know if it's going to
    be a problem for you.

Shepherd also requires various Python modules to be installed, it is preferable
a virtual environment via pip or [uv](https://github.com/astral-sh/uv).

Shepherd is divided into various modules, which provide Shepherd services. Each
of these can be run with `python3 -m shepherdx.{{name}}`, where `name` is either
`app`, `run`, or `ws`.

In order to run Shepherd services, both the Hopper daemon, and a MQTT broker,
must be running. Setting up Hopper involves setting the environment variable
`HOPPER_PATH` to the Hopper directory, for Shepherd, the recommended default is
`/run/user/1000/hopper`. You can then run `hopperd` with this variable set.

### Building Static Files

This is not strictly required for local development, but is helpful for testing.
Both Sheep and RoboCon documentation can be built with the `build-shepherd`
command from within their respective subdirectories, which will generate files
in the correct Shepherd directories.

As with Shepherd, a *nix system is required for this, and you will need both
coreutils and findutils installed. These are typically provided out-of-the-box.

Please don't commit RoboCon docs or Sheep static files, the `.gitignore` rule
is there for a reason!

Both of these dependencies are versioned as Git submodules, and can be updated
by pulling changes from within their respective module directories.

## RoboCon Brain

Shepherd can also be developed on a RoboCon brain. This is the only option for
users of Windows systems. However, you will not be able to build static files,
as this is not supported yet on RoboCon brains.

The general process of developing Shepherd on a RoboCon brain involves stopping
the existing Shepherd services, transferring new source code, and then running
Shepherd manually.

