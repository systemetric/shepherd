# Shepherd MQTT API Reference

Shepherd uses MQTT for data and status events. Clients may prefer to use
the [WebSocket API](./ws.md) instead, which relays all MQTT messages.
For the HTTP API, see [this page](./http.md).

## `status` and LWT

All Shepherd services have a status topic which is used to report service
status, notably, LWT. These topics are named `{{service}}/status`, where
service is either `shepherd-run`, `shepherd-app`, or `shepherd-ws`.

All LWT messages use the same JSON format, containing a single string
field, `msg`.

## `shepherd-run/control`

This topic is used for communicating with the Shepherd runner, sending control
messages for usercode. This topic is used internally by Shepherd for starting
and stopping the usercode from the HTTP API. Clients should not publish on
this topic, rather, use the [HTTP API](./http.md) instead.

For reference, messages contain `mode` and `zone` fields, represented in JSON,
for the current mode (`dev` or `comp`), and zone (0-3) for usercode.

## `robot/log`

This topic contains logs sent from running usercode. It may be preferable to
use the [WebSocket API](./ws.md) for logs, as buffering is handled
automatically, ensuring clients don't miss earlier log messages.

## `robot/status`

This topic contains the status of the running usercode, as reported by the
Shepherd runner. This message contains a single field `new_state`, which can
be either `init`, `ready`, `running`, or `post_run`, to indicate the current
state of usercode. This is particuarly useful for clients to signal logs need
to be cleared in the `ready` state.

