OpenSensorHub and Arduino
===

Although OpenSensorHub is Java software and cannot run directly on low power micro-controllers like the ones used on Arduino boards (Atmel), there are several ways one can interface projects developed with Arduino (or other similar frameworks) to OSH.

Your options are:

- Using the OSHClient C++ library on your µC to connect your project to OSH without writing a single line of Java code

- Making your µC software compatible with an existing sensor driver 

- Writing a custom OSH driver that can talk to your µC board in any way you want
 


### Using the OSHClient Arduino library

We have developed a small C++ library that makes it super easy to connect your (sensor related) Arduino project to an OSH node. You can find it on our [osh-arduino GitHub Repo](https://github.com/opensensorhub/osh-arduino). This library allows you to generate a minimum set of metadata about the sensor(s) you're using, register it with an OSH node, and send your measurement values in the proper format. The communication with OSH uses a standard web service called [Sensor Observation Service](http://www.opengeospatial.org/standards/sos) (SOS) defined by the [OGC](http://www.opengeospatial.org).

For instance, with a few lines of code, you create a Sensor object with temperature and pressure measurements:

```
Sensor s1;
s1.setUniqueID("urn:osh:nano:temp:001");
s1.setName("My Temp Sensor");
s1.addTimeStampOBC("ms");
s1.addMeasurement("temp", TEMP_URI, "Cel", "Air Temperature");
s1.addMeasurement("press", PRESS_URI, "hPa", "Atmospheric Pressure");
```

You register your sensor on the OSH node with:

```
sos = new SOSClient(client, "http://192.168.0.16:8181/sensorhub/sos");
sos->registerDevice(&s1);
```

And you publish measurements like this:

```
sos->startMeasurement(&s1);
sos->pushInt(millis());
sos->pushFloat(random(15.0, 20.0)); // add random temperature value
sos->pushFloat(random(950, 1120));  // add random pressure value
sos->sendMeasurement();
```

These last 5 lines are typically called in your loop function to send measurements repeatedly.

For more info, please visit our [osh-arduino GitHub Repo](https://github.com/opensensorhub/osh-arduino). You will find full examples in the "examples" folder of the OSHClient library.



### Connecting with an Existing Sensor Driver

OpenSensorHub's community is continuously adding drivers for supporting various kinds of sensors. Some of these drivers implement generic protocols that could fit the need of your project. If this is the case, you could simply implement the protocol in your µC software and configure OSH to connect to it.

For instance, the [osh-sensors](https://github.com/opensensorhub/osh-sensors) repo contains a generic NMEA driver, so if your sensor is a GPS or compass, you can connect it to OSH by this means.



### Writing a Custom Driver

This is the most flexible option but also the one that requires the most work since you have to develop both the µC software and a sensor driver for OSH written in Java.

Fortunately, OpenSensorHub already provides some components that you can use on the Java side to ease this process. In particular, low level communication via serial is supported on various platforms via the Java RXTX library, and SPI, I2C, GPIO are supported on Linux via the OpenJDK Device I/O implementation.

We also provide support for wireless protocols such as Bluetooth, Bluetooth LE and WiFi (including device discovery through these channels) so you could also leverage these features in your project.



