#!/usr/bin/env python3

# This file may be obsolete - need to check if scaling in shephard is laggy

import os
import time

from PIL import Image


static_path = 'shepherd/static/'
input_file = static_path + "full_image.jpg"
output_file = static_path + "image.jpg"
stat_file = static_path + "imgtime.txt"
mod_time = 0
out_width = 640.0
out_height = 480.0

while True:
    time.sleep(0.1)
    if os.path.exists(input_file):
        stat_obj = os.stat(input_file)
        if mod_time != stat_obj.st_mtime:
            try:
                img = Image.open(input_file)
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
                img.save(output_file,"JPEG")
                with open(stat_file, "w") as myfile:
                    myfile.write(str(mod_time))
            except IOError:
                pass
