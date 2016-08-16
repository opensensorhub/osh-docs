Filtering by Feature of Interest
===

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

**On Demo Server**:

<http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:avl&observedProperty=http://www.opengis.net/def/property/OGC/0/SensorLocation&featureOfInterest=urn:osh:sensor:avl:911:fleet:FE4&temporalFilter=phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T14:26:12Z>


### GetObservation Example

The table below lists parameter of a **GetObservation** request used to retrieve location data from a given time period only for the same emergency vehicle with ID **FE4**:

| **Parameter** | **Value** |
|:--------------|:----------|
| request | `GetObservation` |
| offering | `urn:mysos:avl` |
| observedProperty | `http://www.opengis.net/def/property/OGC/0/SensorLocation` |
| featureOfInterest | `urn:osh:sensor:avl:911:fleet:FE4` |
| temporalFilter | `phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T06:26:12Z` |

**On Demo Server**:

<http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetObservation&offering=urn:mysos:avl&observedProperty=http://www.opengis.net/def/property/OGC/0/SensorLocation&featureOfInterest=urn:osh:sensor:avl:911:fleet:FE4&temporalFilter=phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T06:26:12Z>

Notice that in this case we requested much less data because the response is much more verbose.


### GetFeatureOfInterest Example

In order to know which ID to use, one needs to know the list of all **FOIs** observed by a particular sensor. This can be done by issuing a **GetFeatureOfInterest** request such as below:

<http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetFeatureOfInterest&procedure=urn:osh:sensor:avl:911:fleet>



