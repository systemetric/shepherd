---
title: Expanding Functionality
category: Hardware
position: 5
---
# Expanding Functionality

:::warning
Although the I2C and UART are connected to the Raspberry Pi, they operate at 5.1V not 3.3V. Check that your devices are compatible first!
:::

## I2C

I2C is a great way to a components to your brain box. Look at the datasheet for your device which you would like to connect and connect the SDA and SDL to the appropriate pins. You should now be able to send data to your device by using the [SMBus2 python library](https://pypi.org/project/smbus2/).    

:::warning
You should avoid address 0x08 (8) and 0x68 (104) because these are used by critical system components.
:::

If you are interested in the I2C protocol there is a good guide to find out more about how it works [here](http://www.circuitbasics.com/basics-of-the-i2c-communication-protocol/). 

## USB 

Make sure that you are running at least patch 2. If so then you can use usb devices using the [`serial`](https://pyserial.readthedocs.io/en/latest/shortintro.html) library. The connection will probably open on something similar to `dev/ttyUSB0`.  

## UART

UART is not enabled by default on the brain box and you will need to ask on the forums for us to provide a patch to enable it should you wish to use it.

:::tip
Please ask on the forums for more infomation if you wish to expand your brainbox
:::
