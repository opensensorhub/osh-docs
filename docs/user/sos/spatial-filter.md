Spatial Filtering
===

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

**On Demo Server**:

<http://sensiasoft.net:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:mysos:metar01&observedProperty=http://sensorml.com/ont/swe/property/Temperature&spatialFilter=featureOfInterest/*/shape,22.32,11.2,32.32,22.2,urn:ogc:def:crs:EPSG::4326&temporalFilter=phenomenonTime,2014-03-29T06:16:12Z/2014-03-29T14:26:12Z>


### Filtering by Polygon

**TODO** Show example POST request



