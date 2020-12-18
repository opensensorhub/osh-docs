(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{410:function(e,t,r){"use strict";r.r(t);var s=r(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"sensor-observation-service-sos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sensor-observation-service-sos"}},[e._v("#")]),e._v(" Sensor Observation Service (SOS)")]),e._v(" "),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("p",[e._v("The "),r("strong",[e._v("Sensor Observation Service (SOS)")]),e._v(" is an OGC standard allowing to retrieve sensor observations as well as associated metadata, such as the full sensor description in "),r("strong",[e._v("SensorML")]),e._v(" format.")]),e._v(" "),r("p",[e._v("This service is a core component of OpenSensorHub and can be configured to expose live data streams or historical data from any procedure registered on an OSH hub (e.g. sensor, actuator, complex system, process...). It can be instantiated several times on a single node, and the user can choose which procedure(s), datastream(s) and observations are exposed via each of these instances.")]),e._v(" "),r("p",[e._v("The main operations for data retrieval are:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("GetCapabilities")]),e._v(": to retrieve general server capabilities and the list of data offerings (XML only)")]),e._v(" "),r("li",[r("strong",[e._v("DescribeSensor")]),e._v(": to get the sensor description (SensorML encoded in XML or JSON)")]),e._v(" "),r("li",[r("strong",[e._v("GetFeatureOfInterest")]),e._v(": to get the list of features observed by a given sensor (XML or GeoJSON)")]),e._v(" "),r("li",[r("strong",[e._v("GetObservation")]),e._v(": to retrieve full Observation objects in XML format (O&M encoded in XML or JSON)")]),e._v(" "),r("li",[r("strong",[e._v("GetResult")]),e._v(": to retrieve a compact data stream (XML, CSV, JSON or binary)")]),e._v(" "),r("li",[r("strong",[e._v("GetResultTemplate")]),e._v(": to get the description of the compact data stream (SWE Common encoded as XML or JSON)")])]),e._v(" "),r("p",[e._v("The "),r("strong",[e._v("SOS Interface")]),e._v(" can also be used in a transactional mode to send new observations to an OSH node. The following operations are used for insertion:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("InsertSensor")]),e._v(": to insert sensor metadata and create the corresponding offering (XML only)")]),e._v(" "),r("li",[r("strong",[e._v("InsertObservation")]),e._v(": to insert complete observation objects with all the related metadata (XML only)")]),e._v(" "),r("li",[r("strong",[e._v("InsertResult")]),e._v(": to insert compact measurement records previously described with InsertResultTemplate (XML only)")]),e._v(" "),r("li",[r("strong",[e._v("InsertResultTemplate")]),e._v(": to insert the description of compact measurement records (XML, CSV, JSON or binary)")])]),e._v(" "),r("p",[e._v("Please see the "),r("a",{attrs:{href:"http://www.opengeospatial.org/standards/sos",target:"_blank",rel:"noopener noreferrer"}},[e._v("OGC® Sensor Observation Service Interface Standard v2.0"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("h2",{attrs:{id:"retrieving-observation-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-observation-data"}},[e._v("#")]),e._v(" Retrieving Observation Data")]),e._v(" "),r("p",[e._v("The SOS specification is based on the "),r("a",{attrs:{href:"http://www.opengeospatial.org/standards/om",target:"_blank",rel:"noopener noreferrer"}},[e._v("O&M Model"),r("OutboundLink")],1),e._v(" which allows one to provide robust metadata associated with any kind of measurement. With OpenSensorHub's implementation, it is possible to retrieve measurements as full observation objects as well as compact result streams.")]),e._v(" "),r("p",[e._v("All examples given in this section use HTTP GET but remember that OpenSensorHub also supports POST and SOAP requests natively. Please see the "),r("a",{attrs:{href:"http://www.opengeospatial.org/standards/sos",target:"_blank",rel:"noopener noreferrer"}},[e._v("SOS v2.0 Specification"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("h3",{attrs:{id:"result-streams"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#result-streams"}},[e._v("#")]),e._v(" Result Streams")]),e._v(" "),r("p",[e._v("Fortunately, SOS v2.0 provides a way to request only observation results in an efficient ASCII or binary encoding instead of verbose XML. This is clearly our preferred way to use SOS (especially with high rate sensors) and can be achieved by using the "),r("strong",[e._v("GetResult")]),e._v(" request as shown in the following example:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Parameter")])]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Value")])])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("request")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("GetResult")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("offering")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("urn:mysos:offering03")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("observedProperty")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("http://sensorml.com/ont/swe/property/Weather")])])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Try it")]),r("OutboundLink")],1),e._v(" on the demo server.")]),e._v(" "),r("p",[e._v("As you can see, the response only includes the measurement values themselves and no metadata. The actual choice of encoding depends on the server settings, which usually depends on the type of dataset: for instance a video stream will always be served as compressed binary, while low rate weather of GPS data is usually provided as ASCII tuples.")]),e._v(" "),r("p",[e._v("The description of tuples and their encoding can be retrieved using the "),r("strong",[e._v("GetResultTemplate")]),e._v(" request shown below:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Parameter")])]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Value")])])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("request")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("GetResultTemplate")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("offering")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("urn:mysos:offering03")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("observedProperty")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("http://sensorml.com/ont/swe/property/Weather")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("temporalFilter")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z")])])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResultTemplate&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Try it")]),r("OutboundLink")],1),e._v(" on the demo server.")]),e._v(" "),r("p",[e._v("The response contains detailed information about each field for which a value is given in the response to the "),r("strong",[e._v("GetResult")]),e._v(" call. This can be used to automatically configure a client for parsing the data, for automatically generating parser code or even for manually coding a parser.")]),e._v(" "),r("p",[r("em",[e._v("Note: For faster response times, OSH generates the response in a streaming fashion so that the client doesn't have to wait until all observations are fetched from database before it can start parsing. This behavior is also needed for streaming real-time data (See the "),r("RouterLink",{attrs:{to:"/web/swe-services/time-filter.html"}},[e._v("Temporal Filtering")]),e._v(" page to learn how to request a real-time stream).")],1)]),e._v(" "),r("h3",{attrs:{id:"observations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#observations"}},[e._v("#")]),e._v(" Observations")]),e._v(" "),r("p",[e._v("The traditional way of requesting data from SOS is through the "),r("strong",[e._v("GetObservation")]),e._v(" request which provides the full XML encoded view of each observation. Although it can be useful in some contexts, it is not appropriate nor recommended for requesting large numbers observations because the amount of data returned is quite large and redundant. The following table shows example parameters for such request with only a temporal filter:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Parameter")])]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Value")])])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("request")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("GetObservation")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("offering")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("urn:mysos:offering03")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("observedProperty")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("http://sensorml.com/ont/swe/property/Weather")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("temporalFilter")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z")])])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetObservation&offering=urn:mysos:offering03&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2016-08-11T19:58:00Z/2016-08-11T19:59:00Z",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Try it")]),r("OutboundLink")],1),e._v(" on the demo server.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),r("p",[e._v("For faster response times and to limit server memory usage, OSH generates the XML in a streaming fashion so that the client doesn't have to wait until all observations are fetched from database before it can start parsing. Despite this efficient implementation, OSH imposes a limit on the number of observations that can be returned with this method*")])]),e._v(" "),r("h2",{attrs:{id:"temporal-filtering"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#temporal-filtering"}},[e._v("#")]),e._v(" Temporal Filtering")]),e._v(" "),r("p",[e._v("OpenSensorHub's SOS implementation supports both "),r("strong",[e._v("historical")]),e._v(" and "),r("strong",[e._v("real-time")]),e._v(" requests for sensor data.")]),e._v(" "),r("p",[e._v("Historical requests are automatically enabled (and properly advertised in the capabilities) when a storage is configured and associated to a sensor. Likewise, real-time requests are automatically enabled when a sensor is directly connected to the SOS (and the sensor module is itself enabled and reports the sensor as connected).")]),e._v(" "),r("p",[e._v("Regarding temporal filtering, SensorHub's implementation only supports the "),r("strong",[e._v("TEquals")]),e._v(" operator for time instants and "),r("strong",[e._v("During")]),e._v(" operator for time periods and, currently, filtering can only be done on the 'phenomenonTime' property. The special value 'now' represents the limit between historical and real-time data.")]),e._v(" "),r("p",[e._v("The following tables explain how the server responds to different temporal filter settings:")]),e._v(" "),r("h3",{attrs:{id:"time-instants"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#time-instants"}},[e._v("#")]),e._v(" Time Instants")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Behavior")])]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Request")])])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Get observation at exact time")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("temporalFilter=phenomenonTime,2014-04-01T00:00:00Z")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Get latest observation")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("temporalFilter=phenomenonTime,now")])])])])]),e._v(" "),r("h3",{attrs:{id:"time-periods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#time-periods"}},[e._v("#")]),e._v(" Time Periods")]),e._v(" "),r("p",[r("em",[e._v("In all the examples below, 'now' is considered to be at 2014-02-20 and we assume storage contains data until this date.")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Behavior")])]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Request")])])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Get observations for a historical time range")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("temporalFilter=phenomenonTime,2014-01-01/2014-02-01")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Get historical data up to the latest observation")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("temporalFilter=phenomenonTime,2014-01-01/now")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Get real-time stream ending at specific time (1,2)")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("temporalFilter=phenomenonTime,now/2014-03-01")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v('Get "never ending" real-time stream')]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("temporalFilter=phenomenonTime,now/2080-01-01")])])])])]),e._v(" "),r("p",[e._v("(1) A real-time stream is only available through a persistent connection if sampling period is lower than a certain threshold (usually a few seconds). For lower rate data producers, the "),r("RouterLink",{attrs:{to:"/web/swe-services/websocket.html"}},[e._v("WebSocket")]),e._v(" protocol can be used instead.")],1),e._v(" "),r("p",[e._v("(2) The stream will be closed as soon as an observation more recent than the end date is produced. A date very far in the future can be used to get a virtually never ending data stream.")]),e._v(" "),r("p",[e._v("(3) If real-time streaming is available, the stream will be closed as in (2). Otherwise it will be closed right after the latest available observation has been sent, even if it is much earlier than the end date (i.e. the request will be treated as "),r("code",[e._v("temporalFilter=phenomenonTime,2014-01-01/now")]),e._v(").")]),e._v(" "),r("p",[r("em",[e._v("Note: Dates used are in the ISO8601 format and can include the time part or not (e.g. both 2014-01-01Z and 2013-05-06T12:05:00.111Z are valid). When no time is specified, midnight (00:00:00) is assumed.")])]),e._v(" "),r("h3",{attrs:{id:"replay-extension"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#replay-extension"}},[e._v("#")]),e._v(" Replay Extension")]),e._v(" "),r("p",[e._v("The SOS implementation also supports replaying historical observations at arbitrary speed (i.e. at real-time speed, or slower/faster than real-time). This is supported by adding the "),r("code",[e._v("replaySpeed")]),e._v(" parameter to a historical GetResult KVP request, such as in "),r("code",[e._v("temporalFilter=phenomenonTime,2014-01-01/2014-02-01&replaySpeed=2")]),e._v(". The parameter has no effect for a live stream request (i.e. if the requested period starts at 'now')")]),e._v(" "),r("p",[e._v("Observations are replayed at exactly real-time speed (according to observations time tags) with "),r("code",[e._v("replaySpeed=1")]),e._v(". The replay value is in fact a factor relative to real-time so that 10 means replaying 10x faster than real-time (if bandwidth permits!) and 0.1 means replaying 10x slower than real-time.")]),e._v(" "),r("p",[e._v("SensorHub implements this functionality by pausing the SOS data provider thread just the right amount of time to match the period infered by two successive measurement time stamps.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),r("p",[e._v("Be aware that if the start time of the request doesn't match an observation timestamp exactly, the server will wait the proper amount of time before the first observation is sent to the client. This can lead to "),r("strong",[e._v("large wait time")]),e._v(" if the start time stamp is not chosen appropriately.")])]),e._v(" "),r("h2",{attrs:{id:"filtering-by-feature-of-interest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filtering-by-feature-of-interest"}},[e._v("#")]),e._v(" Filtering by Feature of Interest")]),e._v(" "),r("p",[e._v("A Feature of Interest (FOI) is the feature that a sensor is observing at a given instant. It can refer to an actual object, or something more abstract like an area, a given acquisition run, etc.")]),e._v(" "),r("p",[e._v("OpenSensorHub's SOS implementation supports filtering observations by specifying the ID of a feature of interest. This is what is used to obtain observations from a single node in a large sensor network for instance, or to retrieve observations of a particular object by a mobile sensor.")]),e._v(" "),r("p",[e._v("Below are example "),r("strong",[e._v("HTTP GET")]),e._v(" requests for filtering by "),r("strong",[e._v("FOI")]),e._v(" identifier.")]),e._v(" "),r("h3",{attrs:{id:"getresult-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getresult-example"}},[e._v("#")]),e._v(" GetResult Example")]),e._v(" "),r("p",[e._v("The table below lists parameter of a "),r("strong",[e._v("GetResult")]),e._v(" request used to retrieve location data from a given time period only for emergency vehicle with ID "),r("strong",[e._v("FE4")]),e._v(":")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Parameter")])]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Value")])])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("request")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("GetResult")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("offering")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("urn:mysos:avl")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("observedProperty")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("http://www.opengis.net/def/property/OGC/0/SensorLocation")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("featureOfInterest")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("urn:osh:sensor:avl:911:fleet:FE4")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("temporalFilter")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T14:26:12Z")])])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:avl&observedProperty=http://www.opengis.net/def/property/OGC/0/SensorLocation&featureOfInterest=urn:osh:sensor:avl:911:fleet:FE4&temporalFilter=phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T14:26:12Z",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Try it")]),r("OutboundLink")],1),e._v(" on the demo server.")]),e._v(" "),r("h3",{attrs:{id:"getobservation-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getobservation-example"}},[e._v("#")]),e._v(" GetObservation Example")]),e._v(" "),r("p",[e._v("The table below lists parameter of a "),r("strong",[e._v("GetObservation")]),e._v(" request used to retrieve location data from a given time period only for emergency vehicle with ID "),r("strong",[e._v("FE4")]),e._v(":")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Parameter")])]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Value")])])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("request")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("GetObservation")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("offering")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("urn:mysos:avl")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("observedProperty")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("http://www.opengis.net/def/property/OGC/0/SensorLocation")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("featureOfInterest")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("urn:osh:sensor:avl:911:fleet:FE4")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("temporalFilter")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T06:26:12Z")])])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetObservation&offering=urn:mysos:avl&observedProperty=http://www.opengis.net/def/property/OGC/0/SensorLocation&featureOfInterest=urn:osh:sensor:avl:911:fleet:FE4&temporalFilter=phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T06:26:12Z",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Try it")]),r("OutboundLink")],1),e._v(" on the demo server.")]),e._v(" "),r("p",[r("em",[e._v("Notice that in this case we requested data for amuch shorter time period because the response is much more verbose.")])]),e._v(" "),r("h3",{attrs:{id:"getfeatureofinterest-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getfeatureofinterest-example"}},[e._v("#")]),e._v(" GetFeatureOfInterest Example")]),e._v(" "),r("p",[e._v("In order to know which ID to use, one needs to know the list of all "),r("strong",[e._v("FOIs")]),e._v(" observed by a particular sensor. This can be done by issuing a "),r("strong",[e._v("GetFeatureOfInterest")]),e._v(" request such as below:")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetFeatureOfInterest&procedure=urn:osh:sensor:avl:911:fleet",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Try it")]),r("OutboundLink")],1),e._v(" on the demo server.")]),e._v(" "),r("h2",{attrs:{id:"spatial-filtering"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spatial-filtering"}},[e._v("#")]),e._v(" Spatial Filtering")]),e._v(" "),r("p",[e._v("OpenSensorHub's SOS implementation supports simple spatial filtering of observations using either a BBOX or Polygon. As per the SOS v2.0 Only BBOX")]),e._v(" "),r("h3",{attrs:{id:"filtering-by-bbox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filtering-by-bbox"}},[e._v("#")]),e._v(" Filtering by BBOX")]),e._v(" "),r("p",[e._v("The table below lists parameter of a "),r("em",[e._v("GetResult")]),e._v(" request used to retrieve data only from the weather stations located within the given region:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Parameter")])]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[r("strong",[e._v("Value")])])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("request")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("GetResult")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("offering")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("urn:mysos:metar01")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("observedProperty")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("http://sensorml.com/ont/swe/property/Temperature")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("spatialFilter")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("featureOfInterest/*/shape,22.32,11.2,32.32,22.2,urn:ogc:def:crs:EPSG::4326")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("temporalFilter")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T14:26:12Z")])])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:metar01&observedProperty=http://sensorml.com/ont/swe/property/Temperature&spatialFilter=featureOfInterest/*/shape,22.32,11.2,32.32,22.2,urn:ogc:def:crs:EPSG::4326&temporalFilter=phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T14:26:12Z",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Try it")]),r("OutboundLink")],1),e._v(" on the demo server.")]),e._v(" "),r("h3",{attrs:{id:"filtering-by-polygon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filtering-by-polygon"}},[e._v("#")]),e._v(" Filtering by Polygon")]),e._v(" "),r("p",[r("strong",[e._v("TODO")]),e._v(" Show example POST request")]),e._v(" "),r("h2",{attrs:{id:"websocket-extension"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#websocket-extension"}},[e._v("#")]),e._v(" WebSocket Extension")]),e._v(" "),r("p",[e._v('Although it is possible to request a real-time data stream from OpenSensorHub\'s SOS using the "persistent HTTP" approach, this technique is hard to use within web browsers because the asynchronous '),r("strong",[e._v("XMLHttpRequest")]),e._v(" API is not designed for it and won't allow you to manage memory correctly (typically an ever growing buffer will be allocated to contain the endless stream of data).")]),e._v(" "),r("p",[e._v("To circumvent this issue, OpenSensorHub introduced the "),r("strong",[e._v("WebSocket")]),e._v(" extension to SOS very early-on. It is super easy to use since "),r("strong",[e._v("WebSocket")]),e._v(" requests are identical to "),r("strong",[e._v("HTTP GET")]),e._v(" requests (only the protocol part of the URL changes).")]),e._v(" "),r("p",[e._v("Note that the "),r("strong",[e._v("WebSocket")]),e._v(" protocol is only available for "),r("strong",[e._v("GetResult")]),e._v(" requests for now but we have plans to implement support for "),r("strong",[e._v("InsertResult")]),e._v(" as well.")]),e._v(" "),r("h3",{attrs:{id:"principle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),r("p",[e._v("The "),r("strong",[e._v("WebSocket")]),e._v(" is constructed in the same way an "),r("strong",[e._v("HTTP GET")]),e._v(" URL would be except the "),r("code",[e._v("ws://")]),e._v(" or "),r("code",[e._v("wss://")]),e._v(" protocol is used instead of "),r("code",[e._v("http://")]),e._v(" or "),r("code",[e._v("https://")]),e._v(", as in the following example:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ws://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:offering02&observedProperty=http://www.opengis.net/def/property/OGC/0/SensorLocation&temporalFilter=phenomenonTime,now/2055-01-01\n")])])]),r("p",[e._v("Once you connect with this URL, the SOS server will send one "),r("strong",[e._v("WebSocket")]),e._v(" message for each record of measurement (i.e. corresponding to the record described in "),r("strong",[e._v("GetResultTemplate")]),e._v("). With most "),r("strong",[e._v("WebSocket")]),e._v(" APIs, you will typically receive these messages via a callback function so that data can be processed in an event-based fashion.")]),e._v(" "),r("h3",{attrs:{id:"javascript-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-example"}},[e._v("#")]),e._v(" JavaScript Example")]),e._v(" "),r("p",[e._v("The following JavaScript example shows how to issue a real-time "),r("strong",[e._v("GetResult")]),e._v(" request using "),r("strong",[e._v("WebSocket")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('ws = new WebSocket("ws://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:offering02&observedProperty=http://www.opengis.net/def/property/OGC/0/SensorLocation&temporalFilter=phenomenonTime,now/2055-01-01");\nws.binaryType = \'arraybuffer\';\nws.onmessage = function (event) {\n  \n  var rec = String.fromCharCode.apply(null, new Uint8Array(event.data));\n  //console.log(rec);\n  \n  var tokens = rec.trim().split(",");\n  var lat = parseFloat(tokens[1]);\n  var lon = parseFloat(tokens[2]);\n  var alt = parseFloat(tokens[3]);\n\n  // do what you need with the data, like draw marker on a map\n}\nws.onerror = function (event) {\n  // error handling code\n  ws.close();\n}\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);