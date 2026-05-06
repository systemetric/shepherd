---
title: Zones
category: Programming
sidebar:
  order: 8
---
Your code will probably need to look for different markers depending on the zone your robot starts in. Whilst you could have different files for each zone, there's also a property on the robot object for this.

## Python

`R.zone` will be equal to the the start zone of the robot, and will be equal to one of the teams.

| **Team** | **Code** |
| --- | --- |
| Red | `robot.SECTOR.RED` |
| Blue | `robot.SECTOR.BLUE` |
| Green | `robot.SECTOR.GREEN` |
| Yellow | `robot.SECTOR.YELLOW` |
Here's an example:

```python
import robot

R = robot.Robot()

if R.zone == robot.SECTOR.RED:
    print("Do something!")
else:
    print("Do something else!")
```

This code checks if the first marker in the list belongs to the current robot.

## Blockly

You can find the zone block in the **Movement** section.
