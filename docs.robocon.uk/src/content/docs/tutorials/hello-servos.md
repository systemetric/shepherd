---
title: Hello Servos
category: Tutorials
sidebar:
  order: 6
---
Servos are a type of motor with internal feedback they can move to a set position. The type of servo you will come across most frequently have a set range of motion, but with precise position control you can do a whole manner of actions within the mechanics of your robot! Servo motors (or anything else you connect to the servo ports of your BrainBox) are controlled by accessing `R.servos[]`, similar to how motors are accessed.

```python
import robot
import time

R = robot.Robot()
R.servos[0].mode = robot.PWM_SERVO

R.servos[0] = 50

time.sleep(1)
```

However, where the value of a motor determines the *speed* it turns, the value of a servo controls the *position* it is at on its rotation, with a range of -100 to 100. Try it out on your robot to see which values correspond to each position!

Servos take a moment to move into their new positions, so it's a good idea to add a delay after setting positions (use `time.sleep`) if it might affect your robot later.

:::tip
When your robot is turned off, the brain will automatically set all of its servos to the 0 position. Make sure you factor this in when you run your robots!
:::

