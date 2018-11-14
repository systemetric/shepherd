---
title: Vision
category: Programming
position: 6
---
# Vision

Computer Vision allows your robots to understand their environment. For the competition, this is used to locate cubes and arena walls.

When you tell you robot to `see`, it will give you a list of all the markers it can see. The objects it returns will give you information about the type of the marker, the distance/angle to the marker along with other assorted information.

Our documentation is not as complete as the [Student Robotics vision documentation](https://www.studentrobotics.org/docs/programming/sr/vision/). As we share much of the same code for vision, you can use this too.

:::tip
Our `MarkerInfo` object is slightly different from Student Robotics:
- `marker_type` can be one of:
  - `robot.MARKER_ARENA`
  - `robot.MARKER_TOKEN`
- There's also a `token_type` property that can be one of:
  - `robot.TOKEN_NONE` *(if the marker is not a token)*
  - `robot.TOKEN_ORE` *(normal cube)*
  - `robot.TOKEN_GOLD` *(treasure cube)*
  - `robot.TOKEN_FOOLS_GOLD` *(trash cube)*
:::

## Python

To look for markers call `see()`:

```python
markers = R.see()
```

`markers` is now a Python list of `marker objects`. Each `marker` object contains the following properties.

|Property|Description|
|-|-|
|`marker.dist`|Distance to the marker in metres|
|`marker.rot_y`|Angle to the marker in degrees|
|`marker.info.code`|Code of the marker|
|`marker.info.marker_type`|One of `MARKER_ARENA` or `MARKER_TOKEN`|
|`marker.info.token_type`|One of `TOKEN_NONE`, `TOKEN_ORE`, `TOKEN_GOLD`, or `TOKEN_FOOLS_GOLD`|

Here's a more complete example:

```python
import robot

R = robot.Robot()

# see below for more info on what markers is
markers = R.see()

for marker in markers:
   if marker.info.token_type == robot.TOKEN_GOLD:
       move(marker.dist)
```

## Blockly

Blocks for vision can be found in the **Vision** section.
