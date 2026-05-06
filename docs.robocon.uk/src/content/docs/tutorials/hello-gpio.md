---
title: Hello GPIO
category: Tutorials
sidebar:
  order: 5
---
GPIO, or General Purpose Input Output, is the main way you'll interface with simple or obscure bits of hardware. This tutorial will introduce the GPIO system and how to use it.

## GPIO Pins

On the side of your BrainBox, there are 4 regular pins and a "+5V" and "-" pin. The top of the BrainBox labels which pin corresponds to which number. Different devices need to be plugged into different pins.

## LED Output

:::tip
GPIO outputs are already protected by a 1k Ohm current limiting resistor, you can connect LEDs directly!
:::

If you want to put an LED on your robot, for testing or just for looks, you'll need to plug the short leg of the LED into the `-` (ground) pin, and the long leg of the LED into any regular pin (such as 1). Then, use the following code to set up the pin in `OUTPUT` mode and turn the LED on:

```python
import robot
R = robot.Robot()

# If you're not using GPIO pin 1, change this number to whatever pin you're using.
R.gpio[0].mode = robot.OUTPUT
R.gpio[0].digital = True
```

Try using a loop to make the light turn on and off every 2 seconds. You'll need the time library from the motors exercise.

## Buttons

While your robot hopefully won't be colliding with much, buttons are a good way for a robot to know if it's driven into something. Buttons should be plugged into the - pin and a regular pin (such as 0). Using the `INPUT_PULLUP` mode, you can detect when a button is pressed.

```python
import robot
import time
R = robot.Robot()

# If you're not using GPIO pin 0, change this number to whatever pin you're using.
R.gpio[0].mode = robot.INPUT_PULLUP

while True:
    if not R.gpio[0].digital:
        print("Pressed")
    else:
        print("Not Pressed")
    time.sleep(0.1)
```

Note that `INPUT_PULLUP` returns inverted values - `True` when it isn't pressed and `False` when it is. This means we use `not` to invert the output we get back to something more sensible for our use.

Try making a light turn on or off depending on if a button is pressed. An explanation of why it is needed to use `INPUT_PULLUP` can be found in the [GPIO documentation](/programming/gpio/#pull-ups).

## Potentiometers

Another form of input is a potentiometer or a variable resistor. Potentiometers should be plugged into the +5V, a regular pin (such as 3) and the - pin. Using `INPUT_ANALOG` mode, you can read the voltage output of the resistor (between 0V and 5V).

```python
import robot

R = robot.Robot()

POT_PIN = 3

R.gpio[POT_PIN].mode = robot.INPUT_ANALOG

while True:
    print(R.gpio[POT_PIN].analog)
```

## Using sensors with retroreflective tape

You can also use retroreflective sensors with your robot's GPIO. This can be configured in the code as follows:

```python
import robot
import time

R = robot.Robot()

R.gpio[0].mode = robot.INPUT

while True:
    if not R.gpio[0].digital:
        print("Reflecting!")
    time.sleep(1)
```

This is a piece of code, that when run, should detect things very close to the sensor, or reflective objects further away (such as the retroreflective tape in the arena).  
Note that the detector also returns `False` when it detects something, so `not` is used. Retroreflective tape is used in the arena to mark the borders of each quadrant. Using a sensor like this facing downwards can allow your robot to detect when it passes into a new quadrant. This could be used for a whole variety of helpful tasks when navigating the arena. We look forward to seeing your creativity!