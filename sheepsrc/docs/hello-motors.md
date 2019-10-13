---
title: Hello Motors
category: Tutorials
position: 4
---
# Making The Robot Go
Your robot is unlikely to score many points if it doesn't go anywhere. This tutorial will show you how to access and turn the motors on your robot.

## Getting Ready
First things first, make sure that your robot is not about to drive off a table. Even if you're planning on turning on the spot, it's best to put your robot on the floor in case it does something unexpected.

Next, you'll need to intialise the robot. For this exercise, you'll also need the "time" python library - this is because python doesn't automatically come with a wait function.
```python
import time
import robot
R = robot.Robot()
```

## Driving Around
Now that everything is set up, it's time to set the motors. All the motors are stored in a list inside the Robot variable - to access the first motor, you can use `R.motors[1]`, the second motor is found with `R.motors[2]`.<br\>

:::warning
If you are using the mini-bot do not set the power above 25% as this may burn the motors out.
:::

Changing the speed of the motor is easy - just set the motor to a number from -25 to 25. Immediately setting the power to 25 can have unwanted side effects, so we'll start by setting them to half power:
```python
R.motors[1] = 12
R.motors[2] = 12
```
Running this program will make your robot move forwards. Unfortunately, it will never tell it to stop moving forwards, so hopefully you put it on the floor and it hasn't driven off the table.<br>
Fixing this is fairly easy, just set the power of the motors to 0 after a couple seconds:
```python
time.sleep(2)

R.motors[1] = 0
R.motors[2] = 0
```
To turn the robot, you just need to set one motor going forwards and the second motor going backwards. The following program makes the robot do a little dance - try it out!
```python
speed = 25

R.motors[1] = speed
R.motors[2] = speed

time.sleep(2)

R.motors[1] = speed
R.motors[2] = -speed

time.sleep(2)

R.motors[1] = -speed
R.motors[2] = -speed

time.sleep(2)

R.motors[1] = -speed
R.motors[2] = speed

time.sleep(2)

R.motors[1] = 0
R.motors[2] = 0
```
A final note, even if you set both motors to the same power, your robot probably won't drive in a perfectly straight line. This is due to defects in the motors, and unless you get specialised motors, no two motors will have the same offset. How your robot deals with this is up to you!
# Troubleshooting and Further Reading
[Connecting to the robot](/connecting.html) <br>
[Uploading and running code](/uploading.html) <br>
[Using the editor](/editor.html) <br>
[Motors](/motors.html)
