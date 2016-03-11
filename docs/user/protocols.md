Supported Protocols
===

OpenSensorHub (OSH) has built-in support (via modules) for various procotols that sensor adapters and other modules can be built onto.
 

### Hardware Protocols

Hardware protocols modules are mainly used within a sensor adapter and provide the heavy lifting to support a particular type of hardware communication:

- Serial / RS232
- USB Serial
- Bluetooth Serial
- Bluetooth LE + GATT
- WiFi / Ethernet

Coming soon:

- Zigbee
- Zwave
- SigFox
- LoRaWAN


### IoT Protocols

IoT protocols provide more advanced Plug & Play capabilities as well as communication with other IoT systems such as the AWS IoT cloud platform:

- ZeroConf Device Discovery
- MQTT

Coming soon:

- BLE "Generic Measurement Profile"
- Adafruit Unified Sensor Driver


### Web Protocols

We also support OGC web services and RESTFul interfaces that can be used to access, task and discover sensors connected to a Sensor Hub:

- Sensor Observation Service (SOS + SOS-T)
- Sensor Planning Service (SPS) 

Coming soon:

- Sensor Things API
- P2P Discovery Layer


