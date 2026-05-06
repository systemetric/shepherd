# Shepherd HTTP API Reference

This document describes the layout of the Shepherd HTTP API, which is used
primarily by Sheep. For the WebSocket API, see [this page](./ws.md), for the
MQTT API, please refer to other documentation (ref docs when they exist).

It can be broken down into 3 different areas:

- Editor, managing usercode projects stored on the brain
- Upload, uploading usercode files to **run** (different from editor)
- Control, managing the state of the running usercode

See notes on errors at the bottom of this document.

## Editor

All editor API routes have the `/files` prefix (`/editor` is used for serving
Sheep itself).

### `/files/list`

- Methods: `GET`

List current projects and block definitions stored on the brain.

Example response:

```json
{
  "blocks": {
    "requires": [
      "nice_robot.py"
    ],
    "header": "...",
    "blocks": [
      ...
    ],
    "footer": ""
  },
  "files": [
    "blocks.json",
    "me.py",
    "new_project.py",
    "nice_robot.py"
  ]
}
```

- `projects` is an array of files that can be accessed via the `/files/load`
    route. **NOTE:** Previous versions of Shepherd returned file content in this
    array, this has been removed.

- `blocks` contains information about Blockly blocks. I guess I'll point you to
    the Sheep source code for how they are interpreted, because I can't remember.

### `/files/load/{filename}`

- Methods: `GET`

Load a file specified by `filename` if it exists. A list of valid files can be
obtained with `/files/list` (see above).

Example response:

```json
{
  "filename": "main.py",
  "content": "..."
}
```

- `filename` is the name of the file you requested.
- `content` is the content of the file you requested.

### `/files/save/{filename}`

- Methods: `POST`

Write to a file specified by `filename`. The content is the request body, which
must be UTF-8 encoded.

### `/files/delete/{filename}`

- Methods: `DELETE`

Delete a file specified by `filename`.

## Upload

Upload API routes are all prefixed with `/upload`.

### `/upload/file`

- Methods: `POST`

Upload a file for current usercode execution. If successful, this clears any
current usercode.

Files should be sent as multipart form data.

File formats accepted are Python and ZIP (DEFLATE). File detection is done
by a combination of MIME type and file extension. To ensure maximum
compatibility, use the following MIME types and extensions:

- Python
    - MIME types: `text/x-python`, `text/plain`, `text/*`
    - Extensions: `.py`
- ZIP
    - MIME types: `application/zip`
    - All ZIP files are checked for validity, and if compressed, should
        be with the DEFLATE algorithm.

Usercode state will **not** change upon completing this request. This is
a change from previous versions of Shepherd, where usercode was restarted
automatically when usercode changed.

If this request succeeds, status code 201 is set.

### `/upload/team-image`

- Methods: `POST`

Upload a team image file.

The team image file should be sent as multipart form data.

This request accepts various image file formats. To reduce processing costs,
send images in JPEG format (`image/jpeg`). All images received will be
converted to this format automatically otherwise.

The recommended resolution for images is 640x480 pixels, as (currently) images
are **not** automatically resized. If you choose to use other dimensions, be
aware that images in aspect ratios other than 4:3 may display poorly elsewhere,
e.g. in the arena.

If this request succeeds, status code 201 is set.

## Control

All control routes use the `/control` prefix.

**NOTE:** The structure of the control API is still in development, and may
change in the future.

**NOTE:** Most of the control API invokes the MQTT API internally. Clients
supporting the MQTT protocol may wish to use that instead (ref docs when they
exist).

### `/control/start`

- Methods: `POST`

Start (or restart) usercode.

If this request succeeds, status code 204 is set.

### `/control/stop`

- Methods: `POST`

Stop running usercode, if it is running.

If this request succeeds, status code 204 is set.

## Errors

If an error occurs during processing of any of the above requests, an
appropriate status code (typically 500) will be set, and a JSON body similar
to the following will be returned:

```json
{
  "detail": "..."
}
```

- `detail` contains the error message.

