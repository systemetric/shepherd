---
title: Servos
category: Programming
position: 4
---
# Servos

Servos are a bit like motors, except their position is fixed. This is useful for building an arm mechanism that grabs cubes, or anything else that has fixed states that it needs to be in.

Similarly to motors, the position of a servo is expressed as a percentage. This can be negative.

Servos are plugged into the **PWM** ports on the BrainBox. **PWM 1** represents **servo 1**, **PWM 2** is **servo 2**, etc.

## Python

You can control servos using the `servos` property of the `Robot` object. To set the first servo to the 50% position use:

```python
R.servos[1] = 50
```

To control the fourth servo instead, replace `servos[1]` with `servos[4]`.

Here's a more complete example:

```python
import robot

R = robot.Robot()

# set servo 1 to the 50% position
R.servos[1] = 50

# set servo 3 to the -100% position
R.servos[3] = -100

# set servos 1 & 3 to the default positions
R.servos[1] = 0
R.servos[3] = 0
```

## Blockly

Blocks for controlling servos can be found in the **Movement** section.

