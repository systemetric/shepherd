'''
IMPORTANT NOTE!!

=> The following will ONLY run on Python 3.7 to 3.9
=> Install websockets version 11.0.3 via pip whl (do not use v12)
=> Install asynio 0.2.0 via pip whl

I will also update sheep to consume the websocket at the other end.
'''

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

#The following sets up the asynchronous waiting for file change
watcher = aionotify.Watcher()

#TODO - Change the input_file to the location of the image the camera takes!
static_path = '/home/pi/shepherd/shepherd/static/'
input_file = static_path + "full_image.jpg"
output_file = static_path + "image.jpg"
stat_file = static_path + "imgtime.txt"
mod_time = 0
out_width = 640.0
out_height = 480.0

watcher.watch(alias='image', path=input_file, flags=aionotify.Flags.MODIFY)#sets up watcher

def im_2_b64(image):
    buff = BytesIO()
    image.save(buff, format="JPEG")
    img_str = base64.b64encode(buff.getvalue())
    return img_str

async def wait_for_file_change():
    print("Waiting for file change")
    loop = asyncio.get_event_loop()
    c = 0
    bypass = False#so that the very first image isn't ignored.
    
    try:#the following fails if full_image.jpg doesn't exist. This is VERY UNUSUAL but can happen.
        await watcher.setup(loop)
    except OSError:
        print("Waiting for full_image.jpg")
        while not os.path.exists(input_file):
            time.sleep(0.5)#twiddle thumbs :)
        await watcher.setup(loop)
        bypass = True
    
    for _i in range(20):#for the first 20 events
        if not bypass:
            event = await watcher.get_event()#blocks until file changed
        else:
            bypass = False#reset bypass
        print("Processing...")
        failing = True
        c = 0
        while failing:
            if c < 5:
                try:#this runs until the bot has finished writing the image
                    img = Image.open(input_file)
                    print("Opened successfully :)")
                    failing = False
                except:
                    print("Error opening file: attempt #"+str(c))
            else:
                failing = False
                raise "Image file error"
            c += 1
            time.sleep(0.1)

        #Resizes image
        width_i, height_i = img.size
        width = width_i * 1.0
        height = height_i * 1.0
        scale_x = out_width / width
        scale_y = out_height / height
        if scale_x > scale_y:
            img = img.resize((int(width*scale_y), int(height*scale_y)), Image.LANCZOS)
        else:
            img = img.resize((int(width*scale_x), int(height*scale_x)), Image.LANCZOS)

        #converts image to a base64 which can be sent as a long string to the browser.
        img_b64 = im_2_b64(img).decode()
        print("Sending...")
        websockets.broadcast(CONNECTIONS, img_b64)#sends image to all connected browsers.
        print("Broadcast message!")

        #Save image file as a backup for when/if the websocket fails
        img.save(output_file,"JPEG")
    
    #politely stops watching file system.
    watcher.close()
    loop.stop()
    loop.close()

async def register(websocket):#Runs every time someone connects
    CONNECTIONS.add(websocket)
    print("Someone has connected to the websocket.")
    try:
        await websocket.wait_closed()
    finally:
        CONNECTIONS.remove(websocket)

async def main():
    async with serve(register, "0.0.0.0", 5001):
        await asyncio.gather(wait_for_file_change())#runs the file change checker and webserver at the same time.

asyncio.run(main())
print("Goodbye.")
