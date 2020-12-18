# Installation

This page describes how to install OpenSensorHub (OSH) binary release so you can test it on your own platform. The process is actually really easy in the default configuration thanks to the use of embedded Jetty and embedded H2 database. It should not take you more than 5 minutes to get a running OSH instance on your machine. (_NOTE: Installation on Android phones and tablets is done through a separate APK file_).


### Prerequisistes

In order for OSH 2.0.x to run, you will need a working installation of Java JDK 11 or newer. On Linux, we have successfully tested OpenSensorHub with both OpenJDK and Oracle JDK.


### Setup

  * First download the latest OSH binary release (osh-base-install-***.zip) from our [GitHub Release Page](https://github.com/opensensorhub/osh-core/releases)
  * Unzip it to a directory of your choice
  * Execute the `launch.sh` script (on Linux or MacOS) or `launch.bat` (on Windows)
  * You should now be able to connect to <http://localhost:8181/sensorhub/test> and get the message `SensorHub web server is up`
  
*Note: This release has been tested on Ubuntu Linux, MacOS X and Windows 7.*


### Demo Configuration

The demo configuration provided with the binary release instructs OSH to start the following components:

  * The embedded Jetty server
  * The web admin UI
  * The simulated GPS example sensor
  * The simulated weather example sensor
  * Embedded storage instance collecting data produced by the 2 sensors
  * An SOS service connected to the real-time feeds and persistent storage
  * A SensorWeb API service connected to real-time feeds and persistent storage
  * Both SOS and SWE API services configured to accept registration of external sensors


### Connect to the Admin Console

You can connect to the [Admin Console](user/img/webui1.png "OSH Admin Web UI") at <http://localhost:8181/sensorhub/admin>.

When active, the console allows you to manage all OSH modules including sensors, processing chains, storage units, as well as service interfaces such as Sensor Observation Services (SOS) or Sensor Planning Services (SPS).

The "Simulated Weather Sensor" should be started and work out of the box.

However, if you select the "Simulated GPG Sensor" item in the Sensors tab, you'll see an error message asking for a Google API key. This key is necessary because the driver relies on [Google Directions API](https://developers.google.com/maps/documentation/directions/start) to generate realistic routes between random locations. So for this driver to function, you'll have to create your own Google API key as instructed [here](https://developers.google.com/maps/documentation/directions/get-api-key).

Once you generated your key, just copy-paste it in the "Google Api Key" field of the sensor configuration panel and click "Apply Changes" at the top right. You can then enable the sensor by right clicking the corresponding item in the left column and selecting "Start" in the drop-down menu. If the sensor starts without error, you should now see data in the "Outputs" section (under the config panel). If you click the "Refresh" button it will show data updating continuously.


### Connect to the Sensor Observation Service (SOS)

You can connect right away to the SOS endpoint to get sensor data and metadata. Here are some examples that work with the installed simulated sensors:

  * GetCapabilities [XML](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetCapabilities)
  * Get Weather Result Template [XML](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResultTemplate&urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather) or [JSON](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResultTemplate&offering=urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather&responseFormat=application/json)
  * Get Latest Weather Measurement [CSV](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,now) or [JSON](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,now&responseFormat=application/json)
  * Get Historical Weather Measurements [CSV](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2020-01-01Z/now) or [JSON](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2020-01-01Z/now&responseFormat=application/json)
  
More test links are available in the SOS Service section of the [admin console](http://localhost:8181/sensorhub/admin) (then go to the Test Links tab).
  
Also take a look at this simple [demo client](http://sensiasoft.net:8181/osm_client_websockets.html) that connects to the fake GPS live feed through websockets to display it on a map using OpenLayers. You can easily reproduce this locally.

More example data feed are also available [here](http://sensiasoft.net:8181/demo.html).


### Logging Configuration

All logging is made via logback and the configuration is done via the `logback.xml` file included in the distribution.
For instance, you can enable SensorHub debug logs by changing the following line in this file:

    <logger name="org.sensorhub" level="info"/>

to

    <logger name="org.sensorhub" level="debug"/>
    
See the [Logback Documentation](http://logback.qos.ch/manual/configuration.html#syntax) for more details. 



