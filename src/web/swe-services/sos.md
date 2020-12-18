# Sensor Observation Service (SOS)


## Introduction

The **Sensor Observation Service (SOS)** is an OGC standard allowing to retrieve sensor observations as well as associated metadata, such as the full sensor description in **SensorML** format.

This service is a core component of OpenSensorHub and can be configured to expose live data streams or historical data from any procedure registered on an OSH hub (e.g. sensor, actuator, complex system, process...). It can be instantiated several times on a single node, and the user can choose which procedure(s), datastream(s) and observations are exposed via each of these instances.
 
The main operations for data retrieval are:

  * **GetCapabilities**: to retrieve general server capabilities and the list of data offerings (XML only)
  * **DescribeSensor**: to get the sensor description (SensorML encoded in XML or JSON)
  * **GetFeatureOfInterest**: to get the list of features observed by a given sensor (XML or GeoJSON)
  * **GetObservation**: to retrieve full Observation objects in XML format (O&M encoded in XML or JSON)
  * **GetResult**: to retrieve a compact data stream (XML, CSV, JSON or binary)
  * **GetResultTemplate**: to get the description of the compact data stream (SWE Common encoded as XML or JSON)

The **SOS Interface** can also be used in a transactional mode to send new observations to an OSH node. The following operations are used for insertion:

  * **InsertSensor**: to insert sensor metadata and create the corresponding offering (XML only)
  * **InsertObservation**: to insert complete observation objects with all the related metadata (XML only)
  * **InsertResult**: to insert compact measurement records previously described with InsertResultTemplate (XML only)
  * **InsertResultTemplate**: to insert the description of compact measurement records (XML, CSV, JSON or binary)

Please see the [OGC® Sensor Observation Service Interface Standard v2.0](http://www.opengeospatial.org/standards/sos) for more details.



## Retrieving Observation Data

The SOS specification is based on the [O&M Model](http://www.opengeospatial.org/standards/om) which allows one to provide robust metadata associated with any kind of measurement. With OpenSensorHub's implementation, it is possible to retrieve measurements as full observation objects as well as compact result streams.

All examples given in this section use HTTP GET but remember that OpenSensorHub also supports POST and SOAP requests natively. Please see the [SOS v2.0 Specification](http://www.opengeospatial.org/standards/sos) for more details.

### Result Streams

Fortunately, SOS v2.0 provides a way to request only observation results in an efficient ASCII or binary encoding instead of verbose XML. This is clearly our preferred way to use SOS (especially with high rate sensors) and can be achieved by using the **GetResult** request as shown in the following example:

| **Parameter** | **Value** |
|:--------------|:----------|
| request | `GetResult` |
| offering | `urn:mysos:offering03` |
| observedProperty | `http://sensorml.com/ont/swe/property/Weather` |

[**Try it**](http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z) on the demo server.

As you can see, the response only includes the measurement values themselves and no metadata. The actual choice of encoding depends on the server settings, which usually depends on the type of dataset: for instance a video stream will always be served as compressed binary, while low rate weather of GPS data is usually provided as ASCII tuples.

The description of tuples and their encoding can be retrieved using the **GetResultTemplate** request shown below:

| **Parameter** | **Value** |
|:--------------|:----------|
| request | `GetResultTemplate` |
| offering | `urn:mysos:offering03` |
| observedProperty | `http://sensorml.com/ont/swe/property/Weather` |
| temporalFilter | `phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z` |

[**Try it**](http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResultTemplate&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather) on the demo server.

The response contains detailed information about each field for which a value is given in the response to the **GetResult** call. This can be used to automatically configure a client for parsing the data, for automatically generating parser code or even for manually coding a parser.

*Note: For faster response times, OSH generates the response in a streaming fashion so that the client doesn't have to wait until all observations are fetched from database before it can start parsing. This behavior is also needed for streaming real-time data (See the [Temporal Filtering](time-filter.md) page to learn how to request a real-time stream).*

### Observations

The traditional way of requesting data from SOS is through the **GetObservation** request which provides the full XML encoded view of each observation. Although it can be useful in some contexts, it is not appropriate nor recommended for requesting large numbers observations because the amount of data returned is quite large and redundant. The following table shows example parameters for such request with only a temporal filter:

| **Parameter** | **Value** |
|:--------------|:----------|
| request | `GetObservation` |
| offering | `urn:mysos:offering03` |
| observedProperty | `http://sensorml.com/ont/swe/property/Weather` |
| temporalFilter | `phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z` |

[**Try it**](http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetObservation&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z) on the demo server.

:::tip NOTE
For faster response times and to limit server memory usage, OSH generates the XML in a streaming fashion so that the client doesn't have to wait until all observations are fetched from database before it can start parsing. Despite this efficient implementation, OSH imposes a limit on the number of observations that can be returned with this method*
:::



## Temporal Filtering

OpenSensorHub's SOS implementation supports both **historical** and **real-time** requests for sensor data.

Historical requests are automatically enabled (and properly advertised in the capabilities) when a storage is configured and associated to a sensor. Likewise, real-time requests are automatically enabled when a sensor is directly connected to the SOS (and the sensor module is itself enabled and reports the sensor as connected).

Regarding temporal filtering, SensorHub's implementation only supports the **TEquals** operator for time instants and **During** operator for time periods and, currently, filtering can only be done on the 'phenomenonTime' property. The special value 'now' represents the limit between historical and real-time data.

The following tables explain how the server responds to different temporal filter settings:

### Time Instants
| **Behavior** | **Request** |
|:-------------|:------------|
| Get observation at exact time | `temporalFilter=phenomenonTime,2014-04-01T00:00:00Z` |
| Get latest observation        | `temporalFilter=phenomenonTime,now`                  |

### Time Periods
*In all the examples below, 'now' is considered to be at 2014-02-20 and we assume storage contains data until this date.*

| **Behavior** | **Request** |
|:-------------|:------------|
| Get observations for a historical time range        | `temporalFilter=phenomenonTime,2014-01-01/2014-02-01` |
| Get historical data up to the latest observation    | `temporalFilter=phenomenonTime,2014-01-01/now`        |
| Get real-time stream ending at specific time (1,2)  | `temporalFilter=phenomenonTime,now/2014-03-01`        |
| Get "never ending" real-time stream                 | `temporalFilter=phenomenonTime,now/2080-01-01`        |

(1) A real-time stream is only available through a persistent connection if sampling period is lower than a certain threshold (usually a few seconds). For lower rate data producers, the [WebSocket](websocket.md) protocol can be used instead.

(2) The stream will be closed as soon as an observation more recent than the end date is produced. A date very far in the future can be used to get a virtually never ending data stream.

(3) If real-time streaming is available, the stream will be closed as in (2). Otherwise it will be closed right after the latest available observation has been sent, even if it is much earlier than the end date (i.e. the request will be treated as `temporalFilter=phenomenonTime,2014-01-01/now`).

*Note: Dates used are in the ISO8601 format and can include the time part or not (e.g. both 2014-01-01Z and 2013-05-06T12:05:00.111Z are valid). When no time is specified, midnight (00:00:00) is assumed.*

### Replay Extension
The SOS implementation also supports replaying historical observations at arbitrary speed (i.e. at real-time speed, or slower/faster than real-time). This is supported by adding the `replaySpeed` parameter to a historical GetResult KVP request, such as in `temporalFilter=phenomenonTime,2014-01-01/2014-02-01&replaySpeed=2`. The parameter has no effect for a live stream request (i.e. if the requested period starts at 'now')

Observations are replayed at exactly real-time speed (according to observations time tags) with `replaySpeed=1`. The replay value is in fact a factor relative to real-time so that 10 means replaying 10x faster than real-time (if bandwidth permits!) and 0.1 means replaying 10x slower than real-time.

SensorHub implements this functionality by pausing the SOS data provider thread just the right amount of time to match the period infered by two successive measurement time stamps.

:::tip NOTE
Be aware that if the start time of the request doesn't match an observation timestamp exactly, the server will wait the proper amount of time before the first observation is sent to the client. This can lead to **large wait time** if the start time stamp is not chosen appropriately. 
:::



## Filtering by Feature of Interest

A Feature of Interest (FOI) is the feature that a sensor is observing at a given instant. It can refer to an actual object, or something more abstract like an area, a given acquisition run, etc.

OpenSensorHub's SOS implementation supports filtering observations by specifying the ID of a feature of interest. This is what is used to obtain observations from a single node in a large sensor network for instance, or to retrieve observations of a particular object by a mobile sensor.

Below are example **HTTP GET** requests for filtering by **FOI** identifier.

### GetResult Example

The table below lists parameter of a **GetResult** request used to retrieve location data from a given time period only for emergency vehicle with ID **FE4**:

| **Parameter** | **Value** |
|:--------------|:----------|
| request | `GetResult` |
| offering | `urn:mysos:avl` |
| observedProperty | `http://www.opengis.net/def/property/OGC/0/SensorLocation` |
| featureOfInterest | `urn:osh:sensor:avl:911:fleet:FE4` |
| temporalFilter | `phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T14:26:12Z` |

[**Try it**](http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:avl&observedProperty=http://www.opengis.net/def/property/OGC/0/SensorLocation&featureOfInterest=urn:osh:sensor:avl:911:fleet:FE4&temporalFilter=phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T14:26:12Z) on the demo server.

### GetObservation Example

The table below lists parameter of a **GetObservation** request used to retrieve location data from a given time period only for emergency vehicle with ID **FE4**:

| **Parameter** | **Value** |
|:--------------|:----------|
| request | `GetObservation` |
| offering | `urn:mysos:avl` |
| observedProperty | `http://www.opengis.net/def/property/OGC/0/SensorLocation` |
| featureOfInterest | `urn:osh:sensor:avl:911:fleet:FE4` |
| temporalFilter | `phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T06:26:12Z` |

[**Try it**](http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetObservation&offering=urn:mysos:avl&observedProperty=http://www.opengis.net/def/property/OGC/0/SensorLocation&featureOfInterest=urn:osh:sensor:avl:911:fleet:FE4&temporalFilter=phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T06:26:12Z) on the demo server.

_Notice that in this case we requested data for amuch shorter time period because the response is much more verbose._

### GetFeatureOfInterest Example

In order to know which ID to use, one needs to know the list of all **FOIs** observed by a particular sensor. This can be done by issuing a **GetFeatureOfInterest** request such as below:

[**Try it**](http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetFeatureOfInterest&procedure=urn:osh:sensor:avl:911:fleet) on the demo server.



## Spatial Filtering

OpenSensorHub's SOS implementation supports simple spatial filtering of observations using either a BBOX or Polygon. As per the SOS v2.0 Only BBOX

### Filtering by BBOX

The table below lists parameter of a *GetResult* request used to retrieve data only from the weather stations located within the given region:

| **Parameter** | **Value** |
|:--------------|:----------|
| request | `GetResult` |
| offering | `urn:mysos:metar01` |
| observedProperty | `http://sensorml.com/ont/swe/property/Temperature` |
| spatialFilter | `featureOfInterest/*/shape,22.32,11.2,32.32,22.2,urn:ogc:def:crs:EPSG::4326` |
| temporalFilter | `phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T14:26:12Z` |

[**Try it**](http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:metar01&observedProperty=http://sensorml.com/ont/swe/property/Temperature&spatialFilter=featureOfInterest/*/shape,22.32,11.2,32.32,22.2,urn:ogc:def:crs:EPSG::4326&temporalFilter=phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T14:26:12Z) on the demo server.

### Filtering by Polygon

**TODO** Show example POST request



## WebSocket Extension

Although it is possible to request a real-time data stream from OpenSensorHub's SOS using the "persistent HTTP" approach, this technique is hard to use within web browsers because the asynchronous **XMLHttpRequest** API is not designed for it and won't allow you to manage memory correctly (typically an ever growing buffer will be allocated to contain the endless stream of data).

To circumvent this issue, OpenSensorHub introduced the **WebSocket** extension to SOS very early-on. It is super easy to use since **WebSocket** requests are identical to **HTTP GET** requests (only the protocol part of the URL changes).

Note that the **WebSocket** protocol is only available for **GetResult** requests for now but we have plans to implement support for **InsertResult** as well.

### Principle

The **WebSocket** is constructed in the same way an **HTTP GET** URL would be except the `ws://` or `wss://` protocol is used instead of `http://` or `https://`, as in the following example:

```
ws://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:offering02&observedProperty=http://www.opengis.net/def/property/OGC/0/SensorLocation&temporalFilter=phenomenonTime,now/2055-01-01
```

Once you connect with this URL, the SOS server will send one **WebSocket** message for each record of measurement (i.e. corresponding to the record described in **GetResultTemplate**). With most **WebSocket** APIs, you will typically receive these messages via a callback function so that data can be processed in an event-based fashion.

### JavaScript Example

The following JavaScript example shows how to issue a real-time **GetResult** request using **WebSocket**:

```
ws = new WebSocket("ws://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:offering02&observedProperty=http://www.opengis.net/def/property/OGC/0/SensorLocation&temporalFilter=phenomenonTime,now/2055-01-01");
ws.binaryType = 'arraybuffer';
ws.onmessage = function (event) {
  
  var rec = String.fromCharCode.apply(null, new Uint8Array(event.data));
  //console.log(rec);
  
  var tokens = rec.trim().split(",");
  var lat = parseFloat(tokens[1]);
  var lon = parseFloat(tokens[2]);
  var alt = parseFloat(tokens[3]);

  // do what you need with the data, like draw marker on a map
}
ws.onerror = function (event) {
  // error handling code
  ws.close();
}
```
