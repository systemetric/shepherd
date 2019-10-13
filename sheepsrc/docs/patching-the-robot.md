---
title: Patching the Robot
category: Tools
position: 6
---
# Patching the Robot

An important part of looking after your robot is making sure its software is up to date. We've released a patch that updates some of the documentation and fixes some issues with the editor. You can apply the patch using the existing code upload mechanism.

## Steps to Patch

1. Download the patch from the [blog](/blog/README.md).
2. [Turn on](/turning-everything-on.md) and [connect](/connecting.md) to your robot.
3. Navigate to <http://robot.go> and click on the blue upload button.

![Upload Button](./images/shepherd-upload.png)

4. Click on the **Choose file** button and select the patch that you've downloaded.
5. Click on the **Upload** button. *(this may take a few seconds)*
6. You should now see **Your file looks good** at the top of the screen. Click on the **run it from this page** link near the top of the page. You should now see the run interface.

![Run Interface](./images/run.png)

7. Click on the big **Start** button to patch your robot.

:::tip
Your robot will restart as part of the patching process, so you will loose connectivity with it for about half a minute. Your tablet should automatically reconnect to the robot when it turns back on. If you cannot connect to your robot, please contact us using the [forum](/forum/).
:::

8. Once you've reconnected to the robot, refresh the **Run** page. If everything worked, you should see `Patch Version: 3` in the logs beneath the start button. If you don't see this, please contact us using the [forum](/forum/).
