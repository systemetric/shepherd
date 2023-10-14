'''
Simple code to run a websocket which sends a message out to all connected browsers
when the image file has been changed, i.e. when an image is taken from the camera.
'''
#!/usr/bin/env python

import asyncio
import os
import websockets

CONNECTIONS = set()

def wait_for_file_change():
    #os.system("sleep 1")#<-- equivalent for testing purposes.
    os.system("watch -d -t -g ls /home/pi/shepherd/shepherd/static/image.jpg && echo \"changed\"")#run blocking code here waiting until file has changed

async def register(websocket):
    CONNECTIONS.add(websocket)
    try:
        await websocket.wait_closed()
    finally:
        CONNECTIONS.remove(websocket)

async def send_file_change_messages():
    while True:
        message = "Image updated"
        websockets.broadcast(CONNECTIONS, message)
        wait_for_file_change()
        await asyncio.sleep(1)
        

async def main():
    async with websockets.serve(register, "0.0.0.0", 5001):
        await send_file_change_messages()

if __name__ == "__main__":
    asyncio.run(main())