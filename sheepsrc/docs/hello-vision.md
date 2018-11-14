---
title: Hello Vision
category: Activities
position: 2
---
Your robot can use its camera to see markers to identify cubes and walls. This tutorial will help you make a program that makes the robot output the number of cubes it can see.

# Making the Robot see

## Writing the code

Create a new script called "VisionTest".

Unlike in the previous tutorial, [Hello World](/hello-world.html), we are going to use the code written specifically for the robot.  To do this we will need to initialise the robot:

```
import robot
R = robot.Robot()
```

To make the robot to "see" what is in front of it we have to call the function `R.see()` and assign it to a variable. This will return a list of all the markers it can see.

```
markers = R.see()
```

For each marker in the list it also contains extra information about it (e.g. type and how far away it is). However all we want is to output the number of markers it can see, so we want the length of the list.

```
print(len(markers)) 
```

If we run this code as it is, it will output the number of markers it can see once. To make it continue outputting this number we need to put it in a `while` loop.

The complete code is as follows:

```
import robot
R = robot.Robot()

while True:
    markers = R.see()
    print(len(markers))
```

## Running the code

Place a few markers infront of the camera on the robot about 10-20cm away and run the code. The logs will appear alongside a view from the position of the camera. In the logs the number of markers visible will be outputted.

# Further reading

[Initalising the robot](/init-robot.html)

[Vision Code](/vision)
