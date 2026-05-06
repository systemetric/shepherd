---
title: Hello Motors
category: Tutorials
position: 4
---
# Making The Robot Go
Your robot is unlikely to score many points if it doesn't go anywhere. This tutorial will show you how to access and turn the motors on your robot.

## Getting Ready
First things first, make sure that your robot is not about to drive off a table. Even if you're planning on turning on the spot, it's best to put your robot on the floor in case it does something unexpected.

Next, you'll need to initialise the robot. For this exercise, you'll also need the "time" Python library - remember that we used this last chapter to help our camera code along.
```python
import time
import robot
R = robot.Robot()
```

## Driving Around

:::tip
Motor power is automatically scaled for the 3-6V motors included in the kit, if you are sourcing your own motors then see [the motors reference](/motors.md) for how to allow faster speeds.
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
Running this program will either make you move forwards or make your robot turn on the spot, depending on how you have set up the motors. If your motor is spinning, try setting one of the motors to the negative value, spinning it in the other direction, and swap which one is negative until your robot drives forwards in a way you are happy with.

The issue with this code is that unfortunately, it will never tell it to stop moving forwards, so hopefully you put it on the floor and it hasn't driven off the table.<br>
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
This is where `sleep()` becomes handy. It pauses the execution of your code with the motors still at 50, and so they stay running until we stop them after the `sleep()` call ends.

To turn the robot, you just need to set one motor going forwards and the second motor going backwards. The following program makes the robot do a little dance - try it out! (Note that if your robot had inverted motors from earlier, you may have differing results)
```python
import time
import robot
R = robot.Robot()

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
[Connecting to the robot](/connecting.html) <br>
[Uploading and running code](/uploading.html) <br>
[Using the editor](/editor.html) <br>
[Motors](/motors.html)
