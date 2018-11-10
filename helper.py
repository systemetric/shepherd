#!/usr/bin/env python2

import os
import time

from PIL import Image

mod_time = 0
out_width = 640.0
out_height = 480.0

while True:
    time.sleep(0.1)
    if os.path.exists("/tmp/colimage.jpg"):
        stat_obj = os.stat("/tmp/colimage.jpg")
        if mod_time != stat_obj.st_mtime:
            print "New image?"
            try:
                img = Image.open("/tmp/colimage.jpg")
                width_i, height_i = img.size
                width = width_i * 1.0
                height = height_i * 1.0
                scale_x = out_width / width
                scale_y = out_height / height
                if scale_x > scale_y:
                    img = img.resize((int(width*scale_y), int(height*scale_y)), Image.ANTIALIAS)
                else:
                    img = img.resize((int(width*scale_x), int(height*scale_x)), Image.ANTIALIAS)

                mod_time = stat_obj.st_mtime
                img.save("/root/shepherd2/shepherd/static/image.jpg","JPEG")
                with open("/root/shepherd2/shepherd/static/imgtime.txt", "w") as myfile:
                    myfile.write(str(mod_time))
            except IOError:
                pass
            mod_time = stat_obj.st_mtime
