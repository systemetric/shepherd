Sheep is a client side app which is served by Shepherd to make interfacing with
Shepherd faster.

# The Shepherd REST API

Shepherd has a mostly plain html front end. The `\upload` page allowing
 selection of a file or zip and performed a HTTP POST to `\upload\upload`.

The `\run` page then allowed the user to POST to `\run\start` to start their
robot and then request `\run\picture` to get the last pictue. See the
`__init__.py`'s in the `shepherd\blueprints` folder for the full definition of
this API.

# Sheep

Sheep's primary goal is to provide "nicer editors for shepherd".

They are entirely client side.

It provides file management, logs & picture preview and two ways of using the
robot API:
    - [Monaco](https://microsoft.github.io/monaco-editor/)
    - [Blockly](https://developers.google.com/blockly)

Shepherd was extended with `shepherd\blueprints\editor\__init__.py` to provide
the ability to save and load files stored on the BrainBox.

# TO DOCUMENT

The PYLS
How to update blockly with new blocks