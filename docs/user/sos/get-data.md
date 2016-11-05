Retrieving Observation Data
===

The SOS specification is based on the [O&M Model](http://www.opengeospatial.org/standards/om) which allows one to provide robust metadata associated with any kind of measurement. With OpenSensorHub's implementation, it is possible to retrieve measurements as full observation objects as well as compact result streams.

All examples given in this section use HTTP GET but remember that OpenSensorHub also supports POST and SOAP requests natively. Please see the [SOS v2.0 Specification](http://www.opengeospatial.org/standards/sos) for more details.


### Result Streams

Fortunately, SOS v2.0 provides a way to request only observation results in an efficient ASCII or binary encoding instead of verbose XML. This is clearly our preferred way to use SOS (especially with high rate sensors) and can be achieved by using the **GetResult** request as shown in the following example:

| **Parameter** | **Value** |
|:--------------|:----------|
| request | `GetResult` |
| offering | `urn:mysos:offering03` |
| observedProperty | `http://sensorml.com/ont/swe/property/Weather` |

**On Demo Server:**

<http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z>

As you can see, the response only includes the measurement values themselves and no metadata. The actual choice of encoding depends on the server settings, which usually depends on the type of dataset: for instance a video stream will always be served as compressed binary, while low rate weather of GPS data is usually provided as ASCII tuples.

The description of tuples and their encoding can be retrieved using the **GetResultTemplate** request shown below:

| **Parameter** | **Value** |
|:--------------|:----------|
| request | `GetResultTemplate` |
| offering | `urn:mysos:offering03` |
| observedProperty | `http://sensorml.com/ont/swe/property/Weather` |
| temporalFilter | `phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z` |

**On Demo Server:**

<http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResultTemplate&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather>

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

**On Demo Server:**

<http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetObservation&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z>

*Note: For faster response times and to limit server memory usage, OSH generates the XML in a streaming fashion so that the client doesn't have to wait until all observations are fetched from database before it can start parsing. Despite this efficient implementation, OSH imposes a limit on the number of observations that can be returned with this method*
