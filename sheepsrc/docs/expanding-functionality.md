---
title: Expanding functionality
category: Hardware
position: 5
---
# Expanding functionality

:::warning
Although the I2C and UART are connected to the Raspberry Pi they operate at 5.1V not 3.3V check your devices are compatible first!
:::

## I2C

I2C is a great way to a components to your brain box. Look at the datasheet for your device which you would like to connect and connect the SDA and SDL to the appropriate pins. You should now be able to send data to your device by using the [SMBus2 python library](https://pypi.org/project/smbus2/).    

:::warning
You should avoid address 0x08 (8) and 0x68 (104) because these are used by critical system components.
:::

If you are interested in the I2C protocol there is a good guide to find out more about how it works [here](http://www.circuitbasics.com/basics-of-the-i2c-communication-protocol/). 

## UART & USB

You can use the USB using any of the standard methods you find online that work with a Raspbery Pi

UART is not enabled by default on the brain box and you will need to ask on the forums for us to provide a patch to enable it should you wish to use it.

:::tip
Please ask on the forums for more infomation if you wish to expand your brainbox
:::
