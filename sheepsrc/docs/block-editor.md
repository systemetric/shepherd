---
title: Scratch-like Interface
category: Programming
position: 1
---

# Using the Scratch-like Interface

Here are some instructions on how to get started with Sheep, our Scratch-like Interface.

## Connecting to the Robot

1. Turn on your tablet and wait until you reach the Windows desktop.
2. Click on the WiFi icon in the bottom right and connect to `robocon-TEAMXX` where `XX` is your team number.
3. Navigate to <http://robot.go:1337> in your web browser of choice (Chrome or Firefox is recommended). You should see an interface similar to this:

![The Interface](/images/sheep.png)

## Blocks

You should be able to see a set of tabs down the left side. Each tab contains a selection of blocks that you can use to build programs. Try clicking on the **Robot** tab. You should see something like this:

![The Robot Tab](/images/robottab.png)

Try dragging the **Move 1 metre(s)** block to the blank area on the screen.

:::warning
Before you run your robot, make sure it's on the floor and NOT on a table!
:::

Then press the green <span style="color: #4CAF50">**Run on Robot**</span> button. The robot should start moving!

::: tip
You might have noticed that `move(1)` appeared on the right of the screen. This is the generated Python code. We'll go into more detail on this later.
:::

Now try dragging the **Turn 90 degree(s)** block underneath the **Move 1 metre(s)** block. You should notice that they snap together. When you <span style="color: #4CAF50">**Run on Robot**</span> now, the robot will move forward and then turn.

## Squares

Let's try something a bit more challenging: a square. Whilst you could just drag 3 more sets of robot blocks underneath your existing program, there is a much better way.

Introducing **LOOPS**!

Loops are just a way to run the same piece of code more than once. Click on the **Loops** tab. Drag the **Repeat 10 times** block into an empty space. Then drag your existing yellow blocks into the repeat block. Finally because we're trying to make a square, a shape with 4 sides, we need to change the blue **10** to a **4**.

You should end up with something like this:

![Square Blocks](/images/square.png)

When you <span style="color: #4CAF50">**Run on Robot**</span> now, you should get a **square with side lengths of 1m**.

::: tip
To make sure you understand what your robot is doing, try change the numbers in the blocks to make a triangle.
:::
