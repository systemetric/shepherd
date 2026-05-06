---
title: Uploading and Running Code
category: Tools
sidebar:
  order: 7
---
:::caution[Deprecated]
The methods outlined here have been deprecated infavour of [the editor](/tools/editor). The documentation here remains for development purposes only.
:::

If you've written code outside of the editor environment, you'll want to upload and run it on your robot. You can use the steps below to do this, 
but we **strongly** recommend [using the editor](/tools/editor).

:::tip[Alternative method]
You can create a new file in the editor, and copy your code into that.
:::

## Upload

:::note
Easy access to the upload page has been removed in favour of the editor. The instructions here remain for the purpose of developemental use. If you are looking to run code please see instructions for the editor
:::

Assuming you've [connected to your robot](/tools/connecting), head to `http://robot.go/upload`

You should now see the upload interface.

![Upload Interface](/images/upload.png)

Click on the **Choose file** button and select either:
- A single Python 3 source file
- A zip file containing one or more Python 2 source files. The file must contain a file named `main.py` in the root of
the archive. This should be the entry point for the program.

Now click the **Upload** button to upload the selected file.

:::caution
Uploading code will stop the robot if it is currently running.
:::

## Run

If you're on the **Upload** page, click the **run it from this page** link. Otherwise, you can access the run page at
`http://robot.go/run` or by clicking the green run button on the Shepherd homepage (note upload button has been removed to simplify the UI).

![Run Button](/images/shepherd-run.png)

You should now see the run interface.

![Run Interface](/images/run.png)

Choose the zone you'd like the robot to think it's in and then choose the mode. **Development** mode has no round timer
meaning your code can run for as long as you need it to. **Competition** mode stops your code after 3 minutes, like it
would in the arena.

:::caution
Before you run your robot, make sure it's on the floor and NOT on a table!
:::

When you're ready, press the big **Start** button.

You'll now be able to see what the robot sees and the output of your program below.
