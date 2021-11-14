# This is the default Python implementation for the Blockly blocks
# For information on how to customise this, please see the docs
from __future__ import print_function
import robot
import time

power = 50
multiplier = power / 25
speed = 0.2 * multiplier
angleSpeed = 139.5 * multiplier

R = robot.Robot()

time.sleep(0.1)

def move(distance):
    print("Moving", distance, "m")
    t = distance / (speed)

    R.motors[0].m0.power = -power
    R.motors[0].m1.power = -power

    time.sleep(t)

    R.motors[0].m0.power = 0
    R.motors[0].m1.power = 0


def turn(angle):
    print("Turning", angle, "degrees")
    t = angle / angleSpeed

    R.motors[0].m0.power = -power * t / abs(t)
    R.motors[0].m1.power = power * t / abs(t)

    time.sleep(abs(t))

    R.motors[0].m0.power = 0
    R.motors[0].m1.power = 0


def turn_to_cube():
    print("Finding cube...")
    notseen = 0
    while True:
        markers = R.see()
        if len(markers) > 0:
            notseen = 0
            print("Found a cube at an angle of", markers[0].rot_y, "degrees")
            turn(markers[0].rot_y)
            break
        else:
            notseen+=1
            if notseen > 5:
                print("Turning...")
                turn(40)
                time.sleep(0.2)
            else:
                time.sleep(0.1)

def move_to_cube():
    print("Moving to cube...")
    notseen = 0
    while True:
        markers = R.see()
        if len(markers) > 0:
            notseen = 0
            print("The cube is", markers[0].dist, "metres away")
            turn(markers[0].rot_y)
            move(markers[0].dist / 2)
            if markers[0].dist < 0.2:
                break
        else:
            notseen+=1
            if notseen > 5:
                break
            else:
                time.sleep(0.1)

