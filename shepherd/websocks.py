'''
Simple code to run a websocket which sends a message out to all connected browsers
when the image file has been changed, i.e. when an image is taken from the camera.
'''

import websockets
import asyncio
import os

CONNECTIONS = set()

async def register(websocket):#add client to list of connnected clients upon connection
    CONNECTIONS.add(websocket)
    try:
        await websocket.wait_closed()
    finally:
        CONNECTIONS.remove(websocket)

async def send_file_change_messages():#broadcasts a websocket message when image file changed
    while True:
        await os.system("watch -d -t -g ls /home/pi/shepherd/shepherd/static/image.jpg && echo \"changed\"")#run blocking code here waiting until file has changed
        websockets.broadcast(CONNECTIONS, "Image updated")
        print("Image updated message sent.")

async def main():#runs the websocket
    async with websockets.serve(register, "localhost", 5001):
        await send_file_change_messages()

if __name__ == "__main__":
    asyncio.run(main())