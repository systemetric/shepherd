---
title: Zones
category: Programming
position: 8
---
# Zones

Your code will probably need to look for different markers depending on the zone your robot starts in. Whilst you could have different files for each zone, there's also a property on the robot object for this.

## Python

`R.zone` will be equal to the the start zone of the robot, and will be equal to one of the teams.

| **Team** | **Code** |
| --- | --- |
| Russet | `robot.TEAM.RUSSET` |
| Sweet | `robot.TEAM.SWEET` |
| Maris Piper | `robot.TEAM.MARIS_PIPER` |
| Purple | `robot.TEAM.PURPLE` |
Here's an example:

```python
import robot

R = robot.Robot()

if R.zone == robot.TEAM.LEON:
    print("Do something!")
else:
    print("Do something else!")
```

## Blockly

You can find the zone block in the **Movement** section.
