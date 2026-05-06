---
title: Hello World
category: Tutorials
position: 2
---
# Hello

Welcome to the RoboCon tutorials!<br>
Following each of the tasks in this category will start you on your way to getting your robot doing stuff.

Ready? Let's go!

> These tutorials will always assume that you have connected to the robot,  started on the homepage and completed the previous tutorials. To find out how to connect to your robot click [here](/connecting.md)

# Creating your first program

As this is the first program that your robot will run we'll make it as simple and clichéd as it can get:<br>
We're going to make the robot write "Hello World!" into the output logs!

## Create a new file

![Run Button](/images/shepherd-editor.png)

1. On the main page click the "Editor" button.
2. On the tabs click new file and name it something (e.g. "HelloWorld")

## Writing the Code

There are two ways to go about writing code for the robot:<br>

1. Python - The main language used to program robots with the BrainBox.<br>
2. Blockly - A Scratch-like language that allows you to write programs connecting blocks. This will automatically produce a python script that can be run in the robot.

Both can be used to program a winning robot for the competition and it is up to you which one you develop your robot with. However for the following tutorials, Python will be used.

Details on both these methods can be found in the programming section of the documentation.

If you are running into problems using the editor, more details can be found [here](/editor.md).

In the editor window write:

```python
import robot

R = robot.Robot()

print("Hello World!")
```
You don't need to know much about what the first couple lines do - they are covered in later chapters, and do setup for the robot to be able to run. The important bit for you to understand is the last bit - the `print()` statement.

## Running the code

Click on the green run button in the top right corner:

![Run Button](/images/editor-robot-run.png)

The logs should then appear with a friendly "Hello World!"

## Troubleshooting and Further Reading

[Connecting to the robot](/connecting.md) <br>
[Uploading and running code](/uploading.md) <br>
[Using the editor](/editor.md)