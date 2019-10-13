---
title: Hello Servos
category: Tutorials
position: 6
---
# Servos

Servos are a bit like motors, except they move to a position rather than at a speed. This is useful for building an arm mechanism that grabs cubes, or anything else that has fixed states that it needs to be in.

You can control servos in a similar way to motors:

<!--TODO: MAYBE MAKE THIS A BIT MORE TUTORIALY-->

```python
import robot
import time

R = robot.Robot()

while True:
    R.servos[1] = -50
    
    time.sleep(2)
    
    R.servos[1] = 50
```
