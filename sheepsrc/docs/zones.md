---
title: Zones
category: Programming
position: 8
---
# Zones

Your code will probably need to look for different markers depending on the zone your robot starts in. Whilst you could have different files for each zone, there's also a property on the robot object for this.

## Python

`R.zone` will be equal to the start zone of the robot and will have a value from `0` to `3`.

Here's an example:

```python
if R.zone == 3:
    print("Do something!")
else:
    print("Do something else!")
```

## Blockly

You can find the zone block in the **Movement** section.
