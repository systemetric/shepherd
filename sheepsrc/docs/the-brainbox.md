---
title: The BrainBox
category: Hardware
position: 2
---
# The Brain Box

The brain box is the center of the kit, it controls power, provides you with useful electronics and is where your code runs. Do **NOT** open the brain box unless given written permission by Hills Road RoboCon.

![The brain box](./images/brainbox.jpg)



## Power

The distributes power to the robot from the battery. It provides both 12V and 5V power out. All power must go through the brain box and the fuse should never be replaced.

The On|Off switch also plugs into the BrainBox as well as the Start button which is used to start your robot code running.

## Motors & 12V Power

The specifications for the motor board can be found [here](/docs/CytronBoardDocs.pdf), however to summarize:

| Condition per channel     | Maximum Value |
| ------------------------- | ------------- |
| Continuous current        | 10A           |
| Peak current (10 seconds) | 30A           |
| Operating Voltage         | 12V           |

:::tip
You can toggle the 12V which allows you to turn 12V devices on and off easily. However this will also cut power to the motor board.
:::

## Expanding functionality

If you feel constrained by the brain box we have designed it with expansion in mind. You may expand the functionality of the brain box over I2C, UART, or USB. All of these are attached to the Raspberry Pi.

:::warning
The I2C and UART operate at 5.1V not 3.3V, check your peripherals datasheet **before** plugging it in!
:::
