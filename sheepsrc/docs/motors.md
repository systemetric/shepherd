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
R.motors[0] = 60
```

To control the second motor instead, replace `motors[1]` with `motors[2]`.

To stop both motors:

```python
R.motors[0] = 0
R.motors[1] = 0
```

Here's a more complete example:

```python
import robot

R = robot.Robot()

# set motor 1 to 60% power
R.motors[0] = 60

# set motor 2 to 60% power in the backwards direction
R.motors[1] = -60

# turn both motors off
R.motors[0] = 0
R.motors[1] = 0
```

:::tip
By default the BrainBox is designed to work safely with the TT motors supplied, these are 6V motors. If you choose to use motors that have a diffrent nominal voltage, then you can specify this when initalising the robot object. For example when using 9V motors:

```python
R = robot.Robot(max_motor_voltage=9)
```

We do not recommend running motors above their design voltage, it may (sometimes dramatically) shorten the lifespan of your motors. If you choose to overvolt your motors you should be prepared to swap them with spares and design your robot to ensure you have access to replace them.
:::

## Blockly

Blocks for controlling motors can be found in the **Movement** section.
