---
title: If the Brainbox has crashed...
sidebar:
    hidden: true
---
## Symptoms
The BrainBox appears to power up, but I can't connect to the website and the blue LED lights but never starts flashing.

## Solution
This can happen if erroneous code which does not start with `R = robot.Robot()` is uploaded to The BrainBox. If you think this may have happened, download [this file](/assets/main.py) and place it on a USB stick. Put the USB stick into The BrainBox and turn the robot on normally. Wait 5 minutes, if you do not at this point get the flashing blue light, please contact us!

:::caution
Using this file will overwrite the current robot code. It will not touch any files you have stored in the editor.
:::