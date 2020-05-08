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

 - Properly packaged, so that we can work around a stupid bug import bug in the
   python language server where sematic analysis will fail due to it testing
   for `ImportError` from optional dependancies and one of them raises
   `DependancyNotFound` because it couldn't find `ujson`.

## TODO
- Update to python3
- Fix the autocomplete failing bug
- Socketed image update
- Refactor of `store.ts`
- Removed commented out code