# Shepherd Runner

## INIT state

- [x] setup GPIO
- [x] setup runner MQTT
- [x] setup Hopper for client
- [x] load initial image
- [x] -> READY

## READY state

- [x] robot reset (power)
- [x] setup usercode
- [x] start usercode
- [x] wait for start command -> RUNNING

## RUNNING state

- [x] send start info
- [x] wait for exit -> POST_RUN

## POST_RUN state

- [x] reset state
- [x] -> READY

