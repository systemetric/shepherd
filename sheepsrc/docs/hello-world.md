---
title: Hello World
category: Tutorials
position: 2
---
# Hello

Welcome to the tutorials of Robocon 2019!<br>
Following each of the tasks in this category will start you on your way to getting your robot doing stuff.

Ready? Let's go!

> These tutorials will always assume that you have connected to the robot,  started on the homepage and completed the previous tutorials. To find out how to connect to your robot click [here](/connecting.html)

# Creating your first program

As this is the first program that your robot will run we'll make it as simple and clichéd as it can get:<br>
We're going to make the robot write "Hello World!" into the output logs!

## Create a new file

![Run Button](./images/shepherd-editor.png)

1. On the main page click the "Editor" button.
2. On the tabs click new file and name it something (e.g. "HelloWorld")

## Writing the Code

There are two ways to go about writing code for the robot:<br>

1. Python - The main language used to program robots with the brainbox.<br>
2. Blockly - A Scratch-like language that allows you to write programs connecting blocks. This will automatically produce a python script that can be run in the robot.

Both can be used to program a winning robot for the competition and it is up to you which one you develop your robot with. However for the following tutorials python will be used.

Details on both these methods can be found in the programming section of the documentation.

For our program, we will only have to use the `print` statement, as all we're doing is writing a line of text in the logs.

1. In the editor window write:

```python
print "Hello world!"
```

## Running the code

Click on the green run button in the top right corner:

![Run Button](./images/editor-robot-run.png)

The logs should then appear with a friendly "Hello world!"

# Troubleshooting and Further Reading

[Connecting to the robot](/connecting.html) <br>
[Uploading and running code](/uploading.html) <br>
[Using the editor](/editor.html)
