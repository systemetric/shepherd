---
title: GPIO
category: Programming
position: 5
---
# GPIO

The GPIO _(General Purpose Input Output)_ allows you to turn on LEDs, react to button presses, or do just about anything.

Our BrainBox has 4 GPIO pins that you can control. Before you do anything with a pin, you must first set its mode.

There are 4 modes:
|Mode|Python|Description|
|-|-|-|
|Digital Output|`robot.OUTPUT`|Allows you to write a high or low signal|
|Digital Input|`robot.INPUT`|Allows you to read a high or low signal|
|Analog Input|`robot.INPUT_ANALOG`|Allows you to read a voltage, like a voltmeter|
|Pullup Input|`robot.INPUT_PULLUP`|Like analog, but uses a [weak pullup resistor](/gpio.html#pull-ups)|

:::tip
The GPIO are numbered 0-3
:::

## Python

To write a digital signal on pin 1:

```python
R.gpio[1].mode = robot.OUTPUT
R.gpio[1].digital = True
```

To read a digital signal on pin 2:

```python
R.gpio[2].mode = robot.INPUT
print(R.gpio[2].digital)
```

To read an analog signal on pin 3:

```python
R.gpio[3].mode = robot.INPUT_ANALOG
print(R.gpio[3].analog)
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
print(R.gpio[1].digital)

# read analog value from GPIO 2
R.gpio[2].mode = robot.INPUT_ANALOG
print(R.gpio[2].analog)

# write digital value to GPIO 3
R.gpio[3].mode = robot.OUTPUT
R.gpio[3].digital = True

# all modes can be used on all GPIOs
# theres also robot.INPUT_PULLUP
```

## Blockly

The GPIO blocks can be found in the **GPIO** section.

## Pull-ups

The BrainBox possesses the ability to enable a built-in pull-up resistor on any input pin. This takes a small amount of explanation.

Normally, input pins are not connected to anything - known as “floating”. In this state, they might read high or low, or different values depending on their environment (due to anything from cosmic rays to the wiring in the building). This is obviously not good for consistent control.

Many pieces of off-the-shelf electronics that have some form of standard I/O output will connect this pin to 5V (high) and 0V (low) when required, so this is not a problem. However, for simple electronics, a microswitch for example, you would normally be required to connect a resistor between the input pin and 5V (a pull-up resistor), or between the input pin and 0V (a pull-down resistor) to keep the input in a known state until the switch overrides it by connecting directly to the opposite state.

However, the built-in pull-up resistor alleviates this need. It essentially wires in a resistor connected to 5V, meaning that when this option is enabled, an input pin will “default” to being high. This means you can simply connect a switch between the input pin and a ground pin without any need of resistors - when the switch is open, the pin will read high; when closed, it will read low.

![An example weak pull up](./images/capture.png)
