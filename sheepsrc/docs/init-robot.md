---
title: Initialising the Robot
category: Programming
position: 2
---
# Initialising the Robot

When using Python to program your robot, you must remember to initialise the robot. If you're using Blockly, this is done automatically.

All of the code required to control the Robot is located in the `robot` python module.
To import the module, and initialise the robot use the following code:

```py
import robot
R = robot.Robot()
```

When you initialise the robot with `robot.Robot()`, your code will be paused until the hardware start button or Shepherd run button is pressed. When the Robot is waiting for either of these buttons to be pressed, the blue user LED will flash on and off.
