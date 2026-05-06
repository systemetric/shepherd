# Static files

Shepherd serves static files from this directory.

## Sheep (`/editor`)

Build Sheep from the submodule and place artifacts in `static/editor`.

Use the `build-shepherd` build command from within the submodule to
automatically place generated files there, this only works on *nix.

## Docs (`/docs`)

Docs should be generated from the submodule and placed in `static/docs`.

The `build-shepherd` build command can be used from the submodule, which
will automatically place files there, this only works on *nix however.
