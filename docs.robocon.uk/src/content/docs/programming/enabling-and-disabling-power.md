---
title: Toggling 12v and 5v power
category: Programming
sidebar:
    order: 10
---

Output power at both 12v and 5v can be toggled on and off using your code. This can be done in a couple different ways. 

## Toggling 12v power
The BrainBox provides 12v power to the Aux 12v port on the side of the BrainBox next to the motors. In your code you can toggle whether this power is being supplied using the `R.enable_12v` property as shown below:

```python
import robot
R = robot.Robot()

# ...Your code

R.enable_12v = False

# ...Rest of your code
```
This will disable the Aux 12v port until you re-enable it using `R.enable_12v = True`. 
You can also check whether the 12v is currently enabled or disabled.

```python
import robot
R = robot.Robot()

R.enable_12v = False
print(R.enable_12v) # Outputs "False"
```

## Toggling 5v power
The BrainBox supplied 5v power to multiple outputs. These are the Servos (all 0-3), as well as the 5v GPIO pin. You can disable these similarly to the 12v power by using the following code:

```python
import robot
R = robot.Robot()

# ...Your code

R.enable_5v = False

# ...Rest of your code
```
This will disable the Servo ports as well as the 5v GPIO pin until you re-enable them using `R.enable_5v = True`.
You can also check whether the 5v is currently enabled or disabled.
```python
import robot
R = robot.Robot()

R.enable_5v = False
print(R.enable_5v) # Outputs "False"
```

## Enabling or disabling power by default.
You can set the BrainBox to have 5v and 12v disabled by default using the following code:
```python
import robot
R = robot.Robot(start_enable_5v=False, start_enable_12v=False)
```

You can set both to false as in the example, or alternatively only set one. This will disable the power immediately when the brain loads to blinky, rather than you manually disabling it when the code starts execution.