---
title: Motors
category: Programming
position: 3
---
# Motors

Motors can be used for all sorts of things, besides just moving your robot. For instance, they could also be used as part of a mechanism to collect cubes. However you decide to use them, they're really simple to control.

When you control motors, you can choose how much power you want to give them. This is expressed as a percentage, so 0% means a stopped motor and 100% means a motor at full power.

:::tip
If you have large motors you should avoid using 100% power when the motor is stalled or stationary, otherwise the rush of current may cause the robot to shut down the motor output. Instead of jumping from 0% to 100% start at a lower value such as 50% and work your way up.
:::

If you want to spin your motors in reverse, just stick a negative sign in front of your percentage.

## Python

You can control motors using the `motors` property of the `Robot` object. To set the power of the first motor to 60% use:

```python
R.motors[1] = 60
```

:::warning
If you are using the mini-bot or similar motors. Do not exceed a motor power of 25% otherwise they will burn out.
:::

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

# set motor 1 to 60% power
R.motors[1] = 60

# set motor 2 to 60% power in the backwards direction
R.motors[2] = -60

# turn both motors off
R.motors[1] = 0
R.motors[2] = 0
```

## Blockly

Blocks for controlling motors can be found in the **Movement** section.

# Using larger motors than supplied
The Brainbox outputs 12v pulses and by default is restricted to 25% for safe use with the 6v motors, if you wish to use other motors you may wish to change the maximum duty cycle, for example 12v motors may accept 100% duty cycles.
You can use any motors you like with the brain box as long as the total current requested does not exceed 20A.

The maximum motor current is a feature of the robot and can only be set when first initilizing the robot object

```python
import robot

R = robot.Robot(motor_max=100)
```