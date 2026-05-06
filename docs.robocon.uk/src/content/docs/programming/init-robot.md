---
title: Initialising the Robot
category: Programming
sidebar:
  order: 2
---
When using Python to program your robot, you must remember to initialise the robot. If you're using Blockly, this is done automatically.

All of the code required to control the Robot is located in the `robot` python module.
To import the module, and initialise the robot use the following code:

:::caution
You *must* add the following lines of code to any code you write in the editor, even if it doesn't use any of the brainbox's GPIO. 

If you don't, the brainbox will crash and you risk losing any code you have written if it hasn't been backed up! If your brainbox has crashed (or become unresponsive) [click here](/tools/brainbox-crashed-fix).
:::

```py
import robot
R = robot.Robot()
```

When you initialise the robot with `robot.Robot()`, your code will be paused until the hardware start button or Shepherd run button is pressed. When the Robot is waiting for either of these buttons to be pressed, the blue status LED will flash on and off.
