---
title: Servos
category: Programming
sidebar:
  order: 5
---
Servos are a bit like motors, except their position is fixed. This is useful for building an arm mechanism that grabs cubes, or anything else that has fixed states that it needs to be in.

Similarly to motors, the position of a servo is expressed as a percentage. This can be negative.

Servos are plugged into the **Servo** ports on the BrainBox. The numbers present on each port correspond to the index used in your code.

## Python

You can control servos using the `servos` property of the `Robot` object. To set the servo 0 to the 50% position use:

```python
R.servos[0].mode = robot.PWM_SERVO
R.servos[0] = 50
```

:::tip
For example, to control servo 3 instead, replace `servos[0]` with `servos[3]`. Again, remember that indexes start at 0.
:::

Here's a more complete example, controlling servos 0 and 1:

```python
import robot
import time

R = robot.Robot()
R.servos[0].mode = robot.PWM_SERVO
R.servos[1].mode = robot.PWM_SERVO

# set servo 0 to the 50% position
R.servos[0] = 50

# wait for the servo to finish moving
time.sleep(1)

# set servo 1 to the -100% position
R.servos[1] = -100

time.sleep(1)

# set servos 0 & 1 to the default positions
R.servos[0] = 0
R.servos[1] = 0
```

:::tip
Add a delay with `time.sleep` to wait for the servos to finish moving into their new positions.
:::

## Blockly

Blocks for controlling servos can be found in the **Movement** section.
