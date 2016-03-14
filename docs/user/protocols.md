Supported Protocols
===

OpenSensorHub (OSH) has built-in support (via modules) for various procotols that sensor adapters and other modules can be built onto.
 

### Network Protocols

Hardware protocols modules are mainly used within a sensor adapter and provide the heavy lifting to support a particular type of hardware communication:

- Serial / RS232
- USB Serial
- Bluetooth Serial
- Bluetooth LE + GATT
- WiFi / Ethernet with ZeroConf Discovery

Coming soon:

- Zigbee
- Zwave (via USB adapter)
- SigFox (via serial modem)
- LoRaWAN

You'll find the code supporting these different protocols in the [osh-comm](https://github.com/opensensorhub/osh-comm) repo.

 
### IoT Protocols

IoT protocols provide more advanced Plug & Play capabilities as well as communication with other IoT systems such as the AWS IoT cloud platform:

- MQTT

Coming soon:

- BLE "Generic Measurement Profile"
- Adafruit Unified Sensor Driver
- CoAP


### Web Protocols

We also support OGC web services and RESTFul interfaces that can be used to access, task and discover sensors connected to a Sensor Hub:

- Sensor Observation Service (SOS + SOS-T)
- Sensor Planning Service (SPS) 

Coming soon:

- Sensor Things API
- P2P Discovery Layer


