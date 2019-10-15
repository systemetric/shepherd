---
title: Vision
category: Programming
position: 6
---
# Vision

Computer Vision allows your robots to understand their environment. For the competition, this is used to locate cubes and arena walls.

When you tell you robot to `see`, it will give you a list of all the markers it can see. The objects it returns will give you information about the type of the marker, the distance/angle to the marker along with other assorted information.


## Python

To look for markers call `see()`:

```python
markers = R.see()
```

`markers` is now a Python list of `marker objects`. Each `marker` object contains the following properties.

| Property                  | Description                                                           |
| ------------------------- | --------------------------------------------------------------------- |
| `marker.dist`             | Distance to the marker in metres                                      |
| `marker.rot_y`            | Angle to the marker in degrees                                        |
| `marker.info.code`        | Numeric code of the marker                                            |
| `marker.info.marker_type` | One of `MARKER_ARENA` or `MARKER_TOKEN`                               |
| `marker.info.token_type`  | One of `TOKEN_NONE`, `TOKEN_ORE`, `TOKEN_GOLD`, or `TOKEN_FOOLS_GOLD` |

## Blockly

Blocks for vision can be found in the **Vision** section.



## Changing the resolution

The default the camera takes pictures at a resolution of **640x480px**. You can change this by specifying a `res` parameter to `R.see()`. This maybe be helpful when trying to see things far away.

```python
markers = R.see(res=(1920, 1088))
```

You must use one of the following resolutions:

* `(640, 480)`
* `(1296, 736)` _(default)_
* `(1296, 976)`
* `(1920, 1088)`
* `(1920, 1440)`

:::warning
Using a higher resolution will increase the amount of time it takes to process the image, but you may be able to see more. Using a smaller resolution will be faster, but markers further away may stop being visible.
:::

Here's a more complete example:

```python
import robot

R = robot.Robot()

markers = R.see()

for marker in markers:
   if marker.info.token_type == robot.TOKEN_GOLD:
       move(marker.dist)
```

## Definition of Axes

The vision system describes the markers it can see using three coordinate
systems. These are intended to be complementary to each other and contain
the same information in different forms.

The individual coordinate systems used are detailed below on the
`Point` object, which represents a point in space.
Both it and the `Orientation` object provide further
details about what measurements of rotation or position mean for their
attributes.

The axis definitions match those in common use, as follows:

**x-axis**
:   The horizontal axis running left-to-right in front of the camera.
    Rotation about this axis is equivalent to leaning towards or away from
    the camera.

**y-axis**
:   The vertical axis running top-to-bottom in front of the camera.
    Rotation about this axis is equivalent to turning on the spot,
    to the left or right.

**z-axis**
:   The axis leading away from the camera to infinity.
    Rotation about this axis is equivalent to being rolled sideways.

:::tip
Note that the axes are all defined relative to the camera. Since we have
no way to know how you've mounted your camera, you may need to account
for that in your usage of the vision system's data.
:::

## Objects of the Vision System

### `Marker`

- - -

A `Marker` object contains information about a _detected_ marker.
It has the following attributes:

`info`
:   A `MarkerInfo` object containing information about the type of marker that was detected.

`centre`
:   A `Point` describing the position of the centre of the marker.

`vertices`
:   A list of 4 `Point` instances, each representing the position of the black corners of the marker.

`dist`
:   An alias for `centre.polar.length`

`rot_y`
:   An alias for `centre.polar.rot_y`

`orientation`
:   An `Orientation` instance describing the orientation of the marker.

`res`
:   The resolution of the image that was taken from the webcam.
    A 2-item tuple: (width, height).

`timestamp`
:   The timestamp at which the image was taken (a float).

### `MarkerInfo`
- - -

The `MarkerInfo` object contains information about a marker.
It has the following attributes:

`code`
:   The numeric code of the marker.

`marker_type`
:   The type of object that this marker represents.<br />
    One of:

* `MARKER_ARENA`
* `MARKER_TOKEN`

`token_type`
:    The type of token the marker represents.<br />
     One of:

* `TOKEN_NONE`
* `TOKEN_ORE`
* `TOKEN_GOLD`
* `TOKEN_FOOLS_GOLD`

`offset`
:   The offset of the numeric code of the marker from the lowest numbered marker of its type.
   

`size`
:   The size of the marker in metres.
    This is the length of the side of the main black body of the marker.

### `Point`

- - -

A `Point` object describes a position in three different ways.
These are accessed through the following attributes:

**image**
:   The pixel coordinates of the point in the image, with the origin (0,0) in the top-left of the image.
    This has two attributes: `x` and `y`.

**world**
:   The [Cartesian coordinates](https://en.wikipedia.org/wiki/Cartesian_coordinate_system) of the point in 3D space.
    This has three attributes: `x`, `y`, and `z`, each of which specifies a distance in metres.
    Positions in front of, to the right, or above the camera are positive.
    Positions to the left or below are negative.

**polar**
:   The [polar coordinates](https://en.wikipedia.org/wiki/Polar_coordinate_system) of the point in 3D space.<br />
This has three attributes:


`length`
:   The distance to the point.

`rot_x`
:   Rotation about the x-axis in degrees.
    Positions above the camera are positive.

`rot_y`
:   Rotation about the y-axis in degrees.
    Positions to the right of the camera are positive.

For example, the following code displays the polar coordinate of a `Point` object 

```python

    print "length", p.polar.length
    print "rot_x", p.polar.rot_x
    print "rot_y", p.polar.rot_y

```

### `Orientation`
--------

An `Orientation` object describes the orientation of a marker.  It has three attributes:

`rot_x`
:   Rotation of the marker about the x-axis.

Leaning a marker away from the camera increases the value of `rot_x`, while
leaning it towards the camera decreases it. A value of 0 indicates that the
marker is upright.

`rot_y`
:   Rotation of the marker about the y-axis.

Turning a marker clockwise (as viewed from above) increases the value of
`rot_y`, while turning it anticlockwise decreases it. A value of 0 means
that the marker is perpendicular to the line of sight of the camera.


`rot_z`
:   Rotation of the marker about the z-axis.

Turning a marker anticlockwise (as viewed from the camera) increases the
value of `rot_z`, while turning it clockwise decreases it. A value of 0
indicates that the marker is upright.

## Using USB camera's

:::warning
Your robots ability to see is very much dependant on the camera you use. We strongly recomend testing your webcams accuracy and maxium distance against that of the Pi cam in the Brain Box. 

Cheap webcameras do tend to hurt how well your robot can see.
:::

To use a USB camera you will need to initialize the robot object with the `use_usb_camera` parameter. Then just call `R.see()` as you would normally. 


```python
import robot

R = robot.Robot(use_usb_camera=True) 

print R.see()
```

You will then need to calibrate your camera as the distance that it reports will not be accurate. You can do this by changing the value in the `usbcamera_focal_lengths` dictionary up or down. 

To get the current value print it: 

```python
import robot.vision as vision

print vision.usbcamera_focal_lengths
```

Assign a new value and print the distance and rotation use the following code. 

```python
# usbcamera_focal_lengths[(resx, resy)] = (newValue,newValue) 
# Where (resx, resy) is the resolution that you want to tune
# To set the resolution (640, 480) to the focal length (100,100) do

import robot.vision as vision

vision.usbcamera_focal_lengths[(640, 480)] = (100, 100)

R = robot.Robot(use_usb_camera=True)

while True:
    markers = R.see()
    for marker in markers:
        dist = marker.dist
        rot_y = marker.rot_y
        print "dist:", dist, "rot_y:", rot_y

```

We recommend that you tune this value by placing a marker exactly 2m away, printing `R.see()` (remember to take an average), and tuning the focal length up or down until you get a value that is close to 2m. If you are feeling fancy you could even write a function to automatically tune the value.    

The default resolutions are as follows.

```python
usbcamera_focal_lengths = {
    (1920, 1440): (1393, 1395),
    (1920, 1088): (2431, 2431),
    (1296, 976): (955, 955),
    (1296, 736): (962, 962),
    (640, 480): (463, 463),
}
```

