# Shepherd WebSocket API Reference

This document describes the Shepherd WebSocket API, which can be used to
receive data and events from Shepherd during its lifecycle. For the HTTP
API, see [this page](./http.md), for the MQTT API, see [this page](./mqtt.md).

The Shepherd WebSocket API can be divided into three systems, specified by HTTP
endpoint:

- `/robot/log`, buffered logs from running usercode
- `/camera`, b64 encoded images from running usercode
- all other endpoints, relayed from [MQTT](./mqtt.md)

## `/robot/log`

The `/robot/log` endpoint broadcasts log messages from running usercode. These
logs are buffered from the `robot/log` [MQTT topic](./mqtt.md) for the current
usercode session.

Upon connecting to this endpoint, all previously buffered logs for the usercode
session are sent. To determine when the usercode session has terminated, e.g.
when client buffers should be cleared, use the MQTT relay endpoint `robot/status`,
this may change in the future.

## `/camera`

The `/camera` endpoint broadcasts base64-encoded, newline-terminated images
from usercode. These images will likely be in JPEG format, but other formats
may be present. Clients should either support common formats, or convert to
supported formats as required.

## other endpoints

All other endpoints are relayed from [MQTT](./mqtt.md), e.g. the endpoint
`/shepherd-run/status` corresponds to the `shepherd-run/status` MQTT topic.

