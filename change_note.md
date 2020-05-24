# Robot libarry

- Moved to April tags
  * Based on the [python bindings](https://pypi.org/project/dt-apriltags/) made
    by [Duckie Town](https://www.duckietown.org/).
  * Added support for polar co-ordinates and variable sized markers.
- Removed obsolte SR code regarding initalisation of devs
- Updated to Python3
- Used single openCV method to draw bounding box
- Pretty printing of marker objects and explaination text as to what they are
- Automatic finding of the values for the focal length luts for new cameras
- Refactor of the vision module:
  * Polar co-ordinates of the translation of markers are now "bearings".
   "rotation" is used exclusively to mean the Euler angles of a marker.
   These are abrivated to "bear" and "rot" respectively.
  * Cameras are now polymorphically used rather than branching using
   `isinstance(camera, picamera)`. The class is selected in `Vision.__init__`.
  * R.see can no longer mutate the robot state through kwargs, this must be done
   through accessor methods
  * The `PostProcessor` now handles everything which isn't marker detection or
   assignment of RoboCon info, and runs in a seperate process oposed to thread.
  * Removed `with timer` statements in `R.see()`

## TODO
- switch to YUV picam capture

# Shepherd

 - Properly packaged, so that we can work around an import bug in the python
   language server where sematic analysis will fail due to it testing
   for `ImportError` from optional dependancies and one of them raises
   `DependancyNotFound` because it couldn't find `ujson`.
 - Moved to port 8080
   * For development purposes the `webpack-dev-server` is now on 8081. (used for
     hot reload so you don't have to compile `sheep` everytime you make a
     change)
 - Updated to `python3.6.7` couldn't get later versions to work but this is
   probally some weirdness with my install of `python 3.8.3` not shepherd.
 - Fixed bug causing autocompletion to fail in sheep, caused by unexpectedly
   passing `None` to a function expecting `JSON` data.
 - Added import checking for `RPi.GPIO` stubs so you don't have to run shepherd
   on a brain if you are just doing dev work.

# Sheep

## TODO
- Socketed image update
- Refactor of `store.ts`
- Removed commented out code
- Update docs
- rewrite `MUTATION_CLOSE_PROJECT` using filter and set the next open project to
  the most recently opened project 
- Fix bug with creating a new file with the same name as an existing file
  causing original file to be overwritten
- Depricate competition mode
- Validate that shepherd was given a JPEG
- File locking or some other way of preventing people for overwritting each
  others changes

# Notes
 
 - This needs to be heavily tested, I have already found many bugs with the port
   to python3 which fail at run time silently.