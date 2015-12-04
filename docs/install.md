How To Install
===

This page describes how to install OpenSensorHub (OSH for short) binary release so you can test it on your own platform. The process is actually really easy thanks to the use of embedded Jetty, so it should not take you more than 5 minutes to get a running OSH instance on your machine. (_NOTE: Installation on Android phones and tablets is through a separate APK file_).


### Prerequisistes

In order for OSH to run, you will need a working installation of Java JDK 7.

On Linux, we have successfully tested SensorHub with both OpenJDK and Oracle JDK.


### Setup

  * First download the latest OSH binary release (both 'core' and 'sensors' zip files) from our [GitHub Release Page](https://github.com/opensensorhub/osh-core/releases)
  * Unzip both files to a directory of your choice
  * Execute the `launch.sh` script (on Linux)
  * You should now be able to connect to <http://localhost:8181/sensorhub/test> and get the message `SensorHub web server is up`
  
*Note: This release has been tested on Ubuntu Linux, MacOS X and Windows 7.*


### Demo Configuration

The demo configuration provided with the binary release instructs OSH to start the following components:

  * The embedded Jetty server
  * The web admin UI
  * The simulated GPS example sensor
  * The simulated weather example sensor
  * Embedded storage instances for data produced by the 2 sensors
  * An SOS service connected to the real-time feeds and storages


### Connect to the Sensor Observation Service (SOS)

You can connect to the SOS deployed at `http://localhost:8181/sensorhub/sos` right away, to get sensor data and metadata:

  * [GetCapabilities](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetCapabilities)
  * [Get Weather Result Template](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResultTemplate&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather)
  * [Get Latest Weather Measurement](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,now)
  * [Get Historical Weather Measurements](http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2015-01-01/now)
  
Also take a look at this simple [demo client](http://sensiasoft.net:8181/osm_client_websockets.html) that connects to the fake GPS live feed through websockets to display it on a map using OpenLayers. You can easily reproduce this locally.

More example data feed are also available [Here](http://sensiasoft.net:8181/demo.html).


### Connect to the Admin Console

You can connect to the [Admin Console](images/webui1.png "OSH Admin Web UI") at <http://localhost:8181/sensorhub/admin>.

When active, the console allows you to manage all OSH modules including sensors, processing chains, storage units, as well as service interfaces such as Sensor Observation Services (SOS) or Sensor Planning Services (SPS).


### Logging Configuration

All logging is made via logback and the configuration is done via the `logback.xml` file included in the distribution.
For instance, you can enable SensorHub debug logs by changing the following line in this file:

    <logger name="org.sensorhub" level="info"/>

to

    <logger name="org.sensorhub" level="debug"/>
    
See the [Logback Documentation](http://logback.qos.ch/manual/configuration.html#syntax) for more details. 

