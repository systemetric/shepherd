---
title: Hello Motors
category: Tutorials
position: 4
---
# Making The Robot Go
Your robot is unlikely to score many points if it doesn't go anywhere. This tutorial will show you how to access and turn the motors on your robot.

## Getting Ready
First things first, make sure that your robot is not about to drive off a table. Even if you're planning on turning on the spot, it's best to put your robot on the floor in case it does something unexpected.

Next, you'll need to intialise the robot. For this exercise, you'll also need the "time" Python library - this is because Python doesn't automatically come with a wait function.
```python
import time
import robot
R = robot.Robot()
```

## Driving Around

:::tip
Motor power is automatically scaled for the 3-6V motors included in the kit, if you are sourcing your own motors then see https://hr-robocon.org/docs/motors.html for how to allow faster speeds.
:::

Now that everything is set up, it's time to set the motors. All the motors are stored in a list inside the Robot variable - to access the first motor, you can use `R.motors[0]`, the second motor is found with `R.motors[1]`.

Changing the speed of the motor is easy - just set the motor to a number from -100 to 100. Immediately setting the power to 100 can have unwanted side effects, so we'll start by setting them to half power:
```python
import time
import robot
R = robot.Robot()

R.motors[0] = 50
R.motors[1] = 50
```
Running this program will make you move forwards. Unfortunately, it will never tell it to stop moving forwards, so hopefully you put it on the floor and it hasn't driven off the table.<br>
To fix this we can set the power of the motors to 0 after a couple of seconds:
```python
import time
import robot
R = robot.Robot()

R.motors[0] = 50
R.motors[1] = 50

time.sleep(2)

R.motors[0] = 0
R.motors[1] = 0
```
To turn the robot, you just need to set one motor going forwards and the second motor going backwards. The following program makes the robot do a little dance - try it out!
```python
speed = 50

R.motors[0] = speed
R.motors[1] = speed

time.sleep(2)

R.motors[0] = speed
R.motors[1] = -speed

time.sleep(2)

R.motors[0] = -speed
R.motors[1] = -speed

time.sleep(2)

R.motors[0] = -speed
R.motors[1] = speed

time.sleep(2)

R.motors[0] = 0
R.motors[1] = 0
```
A final note, even if you set both motors the same power, your robot probably won't drive in a perfectly straight line. This is due to defects in the motors, and unless you get specialised motors, no two motors will have the same offset. How your robot deals with this is up to you!

# Troubleshooting and Further Reading
[Connecting to the robot](/docs/connecting.html) <br>
[Uploading and running code](/docs/uploading.html) <br>
[Using the editor](/docs/editor.html) <br>
[Motors](/docs/motors.html)
