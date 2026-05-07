from robocon.vision import Camera
from robocon.brain import IO
import time

I = IO()
C = Camera()

i = 0
led_state = False
while True:
    print(i)
    i += 1

    C.capture()

    I.set_user_led(led_state)
    led_state = not led_state

    time.sleep(1)
