---
title:    Introduction
sidebar_position: 1
---

# Introduction
**OpenSensorHub** (OSH) allows one to easily build interoperable and evolutive sensor networks, based on open-standards for all data exchanges, and providing advanced processing capabilities. 
The open-standards used are mostly [OGC](http://www.opengeospatial.org/) standards from the [Sensor Web Enablement](http://www.opengeospatial.org/projects/groups/sensorwebdwg) (SWE) initiative and are key to design sensor networks that can largely evolve with time (addition of new types of sensors, reconfigurations, etc.).

The Java framework allows one to connect any kind of sensors and actuators to a common bus via a simple yet generic driver API. 
Sensors can be connected through any available hardware interface such as [RS232/422](http://en.wikipedia.org/wiki/RS-232), 
[SPI](http://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus),[I2C](http://en.wikipedia.org/wiki/I%C2%B2C), [USB](http://en.wikipedia.org/wiki/USB), 
[Ethernet](http://en.wikipedia.org/wiki/Ethernet) , [Wi-Fi](http://en.wikipedia.org/wiki/Wi-Fi), [Bluetooth](http://en.wikipedia.org/wiki/Bluetooth), 
[ZigBee](http://en.wikipedia.org/wiki/ZigBee) , [HTTP](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) , etc... 
Once drivers are available for a specific sensor, it is automatically connected to the bus and it is then trivial to send commands and read data from it. 
An intuitive user interface allows the user to configure the network to suit its needs and more advanced processing capabilities are available via a plugin system.

**OpenSensorHub** embeds the full power of OGC web APIs ([Connected Systems API](https://ogcapi.ogc.org/connectedsystems/), [SensorThings API](https://www.ogc.org/standards/sensorthings)) 
and web services ([Sensor Observation Service](http://www.opengeospatial.org/standards/sos) or SOS, [Sensor Planning Service](http://www.opengeospatial.org/standards/sps) or SPS) 
to communicate with all connected sensors in the network and provide robust metadata (owner, location and orientation, calibration, etc.). 
Through these standards, several **OpenSensorHub** instances can also communicate with each other to form larger networks.

Low level functions of SensorHub (send commands and read data from sensor) are coded efficiently and can be used on embedded hardware running [Java SE®](http://www.oracle.com/technetwork/java/javase), 
[Java ME®](http://www.oracle.com/us/technologies/java/embedded/micro-edition/overview/index.html) or [Android®](http://www.android.com/) 
while more advanced data processing capabilities are fully multithreaded and can thus benefit from a more powerful hardware platform (e.g. multiprocessor servers or even clusters).

The core of **OpenSensorHub** is pure Java software, but we have other parts of this software in the family of [**OSH Connect**](../osh-connect/introduction) libraries.

Please report all problems related to **OpenSensorHub** software including documentation errors via the GitHub Issue Tracker of the corresponding repository.