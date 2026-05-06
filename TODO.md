# `shepherd-app`

- [x] control router publishes mqtt messages
- [x] files router files saved via sheep
- [x] upload router for python & zip upload

# `shepherd-common`

- [x] fully centralised configuration
- [x] common config and argument parsing

# `shepherd-mqtt`

- [x] structured subscriptions
- [x] structured publications
- [ ] unsubscribing?

# `shepherd-run`

- [ ] handles events from gpio (start button), impl. further testing
- [x] handles events from mqtt
- [x] sets up hopper for usercode (log + start)
- [x] copies initial image to tmp
- [x] hardware reset, probably via external scripting?
- [x] usercode setup and management
- [x] sending start info to usercode via hopper
- [x] internal usercode state tracking
- [x] dump initial image into hopper

# `shepherd-ws`

- [x] handle incoming connections as subscriptions to mqtt topics
- [x] handle removal of websocket connections
- [x] hopper for usercode logs and camera
- [x] usercode log and camera message buffering
- [x] send buffered logs to new websocket clients
- [x] send buffered images to new clients

