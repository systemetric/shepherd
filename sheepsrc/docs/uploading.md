---
title: Uploading and Running Code
category: Tools
position: 2
---

# Uploading and Running code on the Robot

If you've already got some code you want to run on the robot, or you prefer to code in another application you'll need
to follow these steps when uploading and running code on the robot.

## Upload

Assuming you've [connected to your robot](/connecting.md), head to <http://robot.go/upload> or click the blue
upload button on the Shepherd homepage.

![Upload Button](./images/shepherd-upload.png)

You should now see the upload interface.

![Upload Interface](./images/upload.png)

Click on the **Choose file** button and select either:
- A single Python 2 source file
- A zip file containing one or more Python 2 source files. The file must contain a file named `main.py` in the root of
the archive. This should be the entry point for the program.

Now click the **Upload** button to upload the selected file.

:::warning
Uploading code will stop the robot if it is currently running. 
:::

## Run

If you're on the **Upload** page, click the **run it from this page** link. Otherwise, you can access the run page at
<http://robot.go/run> or by clicking the green run button on the Shepherd homepage.

![Run Button](./images/shepherd-run.png)

You should now see the run interface.

![Run Interface](./images/run.png)

Choose the zone you'd like the robot to think it's in and then choose the mode. **Development** mode has no round timer
meaning your code can run for as long as you need it to. **Competition** mode stops your code after 3 minutes, like it
would in the arena.

:::warning
Before you run your robot, make sure it's on the floor and NOT on a table!
:::

When you're ready, press the big **Start** button.

You'll now be able to see what the robot sees and the output of your program below.
