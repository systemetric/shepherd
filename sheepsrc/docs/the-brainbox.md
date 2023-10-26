---
title: The BrainBox
category: Hardware
position: 2
---
# The BrainBox

The BrainBox is the core of the kit which we provide. In it is all of the electronics and software you need to power a robot. Lets start by turning it on. Take a battery from the kit and plug it into the yellow socket labelled battery, then take a red "power button" and connect that to the black connector along the side of the BrainBox. The battery and start button are both labelled on the red surface of the BrainBox. 
![The brain box](/images/angled.png)
## How to turn everything on
Pressing the start button will cause the battery status LEDs on the front of the BrainBox flash in an upwards direction and the power LED turns green. When the user light starts flashing blue your BrainBox is ready to run code. You can now turn connect to your robot. The user LED will go solid while code is running. 
## Power

The BrainBox distributes power to the robot from the battery. It provides both 12V and 5V power out. All power must go through the BrainBox and the fuse should never be replaced.

The On/Off switch also plugs into the BrainBox as well as the Start button which is used to start your robot code running.

## Motors & 12V Power

The specifications for the motor board can be found [here](/CytronBoardDocs.pdf), however to summarize:

| Condition per channel     | Maximum Value |
| ------------------------- | ------------- |
| Continuous current        | 10A           |
| Peak current (10 seconds) | 30A           |
| Operating Voltage         | 12V           |

:::tip
You can toggle the 12V which allows you to turn 12V devices on and off easily. However, this will also cut power to the motor board.
:::

## How to turn everything off
When you are done for the day, press the power button, the user LED will flash rapidly, when this turns off you may unplug the battery. 

## USB's
On the new brainBox, there is only one USB port. If you want to use something that requires a USB port such as a USB camera, you will need to get your own USB hub.  
 
## GPIO

### GPIO - Out

All of the BrainBox's GPIO pins are connected in-series with a 1K Ohm resistor, to provide current limiting. This means that you can plug devices such as LED's straight into your BrainBox.

Nominally they operate at 5V but depending on your load the true output will vary. You can calculate the voltage you will get across your load by measuring its resistance, then doing the sum:

(5*Load_resistance)/(Load_resistance+1000)   

### GPIO - In

We advise against you using analogue inputs with an impedance (You can think of impedance as "effective resistance in an analogue circuit") of greater than 9K Ohm's as this will result in values which do not necessarily correspond to what you'd expect. 

If you need to sense something with an impedance of more than 9K then you will need to use an Op-amp to buffer the input. If you would like more details on how to do this please contact us on the forums. 

### GPIO - Limits

Do not try and sink or source more than 25mA into the BrainBox's GPIO, it may damage some of the internal components.

## PWM Pins

PWM (Pulse Width Modulation) is a technique used for sending signals to a device for how much it should do a thing. This could be how fast to spin a motor, or the position to turn an RC Servo to. It does this by sending regular pulses, which vary in width. The length of the pulse tells the device how much to do the thing.  If you are interested you can find out more about using PWM for control [here](http://smartmicrocontroller.com/how-to-control-a-servo-using-pulse-width-modulation-pwm/).

Please note you will not be able to drive large motors over the PWM pin's supplied as the maximum which they can supply is 3A at 5V.

The PWM pins ranges:

| Value | Pulse  |
| ----- | ------ |
| 0     | 1.5ms  |
| 100   | 2ms    |
| \-100 | 1ms    |
| 178   | 2.39ms |
| \-178 | 0.61ms |

## Pin Out

### IO

![USB's](/images/powerconnector.png)

### Motors

![Motors](/images/brainboxmotors.png)


### Front

![Front](/images/redpanel.png)

## Expansion I2C, UART & USB

For expansion please see the [expansion page](/docs/expanding-functionality.html).
