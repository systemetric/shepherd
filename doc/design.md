- MQTT based internally, as discussed previously
- multiple daemons handling a domain of services, like hopper architecture
    - usercode runner
    - usercode sources
    - ...
- structured schema for message transfer, probably JSON
- can be poked as needed, easier debug
- clean integration over network

# rationale

- hopper works well for broadcast, bad for individual conversations
- hopper clients complex, inconsistent
- individual messages cannot easily be separated
- each channel only one way
