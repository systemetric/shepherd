---
title: GPIO
category: Programming
position: 5
---
# GPIO

GPIO *(General Purpose Input Output)* allows you to turn on LEDs, react to button presses, or do just about anything.

Our BrainBox has 4 GPIO pins that you can control. Before you do anything with a pin, you must first set it's mode.

There are 4 modes:
|Mode|Python|Description|
|-|-|-|
|Digital Output|`robot.OUTPUT`|Allows you to write a high or low signal|
|Digital Input|`robot.INPUT`|Allows you to read a high or low signal|
|Analog Input|`robot.INPUT_ANALOG`|Allows you to read a voltage, like a voltmeter|
|Pullup Input|`robot.INPUT_PULLUP`|Like analog, but uses a virtual pullup resistor|

## Python

To write a digital signal on pin 1:

```python
R.gpio[1].mode = robot.OUTPUT
R.gpio[1].digital = True
```

To read a digital signal on pin 2:

```python
R.gpio[2].mode = robot.INPUT
print R.gpio[2].digital
```

To read an analog signal on pin 3:

```python
R.gpio[3].mode = robot.INPUT_ANALOG
print R.gpio[3].analog
```

:::tip
All modes can be used on all pins
:::

Here's a more complete example:

```python
import robot

R = robot.Robot()

# read digital value from GPIO 1
R.gpio[1].mode = robot.INPUT
print R.gpio[1].digital

# read analog value from GPIO 2
R.gpio[2].mode = robot.INPUT_ANALOG
print R.gpio[2].analog

# write digital value to GPIO 3
R.gpio[3].mode = robot.OUTPUT
R.gpio[3].digital = True

# all modes can be used on all GPIOs
# theres also robot.INPUT_PULLUP
```

## Blockly
GPIO blocks can be found in the **GPIO** section.
