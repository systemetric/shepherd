"""
IMPORTANT NOTE!!

=> The following will ONLY run on Python 3.7 to 3.9
=> Install websockets version 11.0.3 via pip whl (do not use v12)
=> Install asynio 0.2.0 via pip whl
"""

import asyncio
import aionotify
from websockets.server import serve
import websockets
import time
import base64
import os
from io import BytesIO
from PIL import Image


CONNECTIONS = set()

# The following sets up the asynchronous waiting for file change
picture_watcher = aionotify.Watcher()
log_watcher = aionotify.Watcher()

img_static_path = "/home/pi/shepherd/shepherd/static/"
img_input_file = img_static_path + "image.jpg"
img_output_file = img_static_path + "resized_image.jpg"
stat_file = img_static_path + "imgtime.txt"
mod_time = 0
out_width = 640.0
out_height = 480.0

log_static_path = "/media/RobotUSB/"
log_input_file = log_static_path + "logs.txt"

picture_watcher.watch(
    alias="image", path=img_input_file, flags=aionotify.Flags.MODIFY
)  # sets up watcher
log_watcher.watch(alias="logs", path=log_input_file, flags=aionotify.Flags.MODIFY)


def shrink_image(img):
    width_i, height_i = img.size
    width = float(width_i)
    height = float(height_i)
    scale_x = out_width / width
    scale_y = out_height / height
    if scale_x > scale_y:
        img = img.resize((int(width * scale_y), int(height * scale_y)), Image.LANCZOS)
    else:
        img = img.resize((int(width * scale_x), int(height * scale_x)), Image.LANCZOS)
    return img


def im_2_b64(image):
    buff = BytesIO()
    image.save(buff, format="JPEG")
    img_str = base64.b64encode(buff.getvalue())
    return img_str


async def wait_for_picture_change():
    loop = asyncio.get_event_loop()

    bypass = False  # so first image is not ignored.
    while not os.path.exists(img_input_file):
        await asyncio.sleep(0.5)  # twiddle thumbs :)
        if not bypass:
            bypass = True
    await picture_watcher.setup(loop)
    print("Image change watcher is running.")

    while True:  # for all events
        if not bypass:
            event = await picture_watcher.get_event()  # blocks until file changed
        else:
            bypass = False  # reset bypass

        for c in range(10):
            await asyncio.sleep(0.01)  # give it time to write the file.
            try:  # this runs until the bot has finished writing the image
                img = Image.open(img_input_file)
                img.load()
                print("Opened successfully")
                break
            except:
                print("Error opening file: attempt \#" + str(c))

        if c >= 9:
            continue  # error with this file, go back and wait for next change.

        img = shrink_image(img)
        # converts image to a base64 which can be sent as a long string to the browser.
        img_b64 = im_2_b64(img).decode()
        websockets.broadcast(
            CONNECTIONS, "[CAMERA]" + img_b64
        )  # sends image to all connected browsers.
        print("Image broadcast.")

    # politely stops watching file system.
    picture_watcher.close()
    loop.stop()
    loop.close()


async def wait_for_log_change():
    loop = asyncio.get_event_loop()

    bypass = False  # so first image is not ignored.
    while not os.path.exists(log_input_file):
        await asyncio.sleep(0.5)  # twiddle thumbs :)
        if not bypass:
            bypass = True
    await log_watcher.setup(loop)
    print("Log change watcher is running.")

    while True:  # for all events
        if not bypass:
            event = await log_watcher.get_event()  # blocks until file changed
        else:
            bypass = False  # reset bypass

        with open(log_input_file, "r") as l:
            old_logs = l.read()
        for c in range(10):
            await asyncio.sleep(0.01)  # give it time to write the file.
            try:  # this runs until the bot has finished writing the logs
                with open(log_input_file, "r") as l:
                    new_logs = l.read()
                print("Opened logs successfully")
                break
            except:
                print("Error opening logs: attempt \#" + str(c))

        if c >= 9:
            continue  # error with this file, go back and wait for next change.

        new_logs.replace(old_logs, "")  # only new logs remain.
        index = len(new_logs) - len(old_logs)
        old_logs = new_logs
        new_logs = new_logs[index:]

        websockets.broadcast(CONNECTIONS, "[LOGS]" + new_logs)  # sends new logs.
        print("Logs broadcast.")

    # politely stops watching file system.
    log_watcher.close()
    loop.stop()
    loop.close()


async def register(websocket):  # Runs every time someone connects
    CONNECTIONS.add(websocket)
    print("Someone has connected to the websocket.")
    for c in range(3):
        time.sleep(0.1)  # give it time to write the file.
        try:  # this runs until the bot has finished writing the image
            img = Image.open(img_input_file)
            img.load()
            print("Opened successfully")
            break
        except:
            print("Error opening file: attempt #" + str(c))
    bypass = False
    if c > 3:
        bypass = True  # error with this file, go back and wait for next change.
    if not bypass:
        img = shrink_image(img)
        img_b64 = im_2_b64(img).decode()
        await websocket.send(img_b64)
    try:
        await websocket.wait_closed()
    finally:
        CONNECTIONS.remove(websocket)


async def main():
    async with serve(register, "0.0.0.0", 5001):
        await asyncio.gather(
            wait_for_picture_change(), wait_for_log_change()
        )  # runs the file change checker and webserver at the same time.


asyncio.run(main())
print("Goodbye.")
