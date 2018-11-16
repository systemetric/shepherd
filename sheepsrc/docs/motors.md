---
title: Motors
category: Programming
position: 3
---
# Motors

Motors can be used for all sorts of things, besides just moving your robot. For instance, they could also be used as part of a mechanism to collect cubes. However you decide to use them, they're really simple to control.

When you control motors, you can choose how much power you want to give them. This is expressed as a percentage, so 0% means a stopped motor and 100% means a motor at full power.

:::warning
Avoid immediately starting your motors at 100%. This may cause them to stall. Instead, start at a lower value such as 20% and work your way up. 
:::

If you want to spin your motors in reverse, just stick a negative sign in front of your percentage.

## Python
You can control motors using the `motors` property of the `Robot` object. To set the power of the first motor to 50% use:

```python
R.motors[1] = 50
```

To control the second motor instead, replace `motors[1]` with `motors[2]`.

To stop both motors:

```python
R.motors[1] = 0
R.motors[2] = 0
```

Here's a more complete example:

```python
import robot

R = robot.Robot()

# set motor 1 to 50% power
R.motors[1] = 50

# set motor 2 to 100% power in the backwards direction
R.motors[2] = -100

# turn both motors off
R.motors[1] = 0
R.motors[2] = 0
```

## Blockly

Blocks for controlling motors can be found in the **Movement** section.
