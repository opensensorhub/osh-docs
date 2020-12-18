# Sensor Planning Service (SPS)

## Introduction

The **Sensor Planning Service (SPS)** is an OGC standard allowing to send tasks (or commands) to sensors, actuators or systems.

This service is a core component of OpenSensorHub and can be configured to expose the taskable parameters of any procedure registered on an OSH hub (e.g. sensor, actuator, complex system, process...). It can be instantiated several times on a single node, and the user can choose which command interfaces are exposed via each of these instances.
 
The main SPS operations are:

  * **GetCapabilities**: to retrieve general server capabilities and the list of data offerings (XML only)
  * **DescribeSensor**: to get the sensor description (SensorML encoded as XML or JSON)
  * **DescribeTasking**: to get the description of the tasking parameters (SWE Common encoded as XML or JSON)
  * **Submit**: to submit a task (XML)
  * **Update**: to update an existing task with new parameters (XML)
  
OSH also has a transactional extension of the **SPS Interface** to register new sensors/procedures and command interfaces, and to connect an external system for receiving commands. The following operations are used for insertion:

  * **InsertSensor**: to insert sensor metadata and create the corresponding offering (XML only)
  * **InsertTaskingTemplate**: to add a new new tasking interface to an existing sensor/procedure (XML only)
  * **DirectTasking**: to reserve a direct exclusive tasking session on a taskable asset (XML only)
  * **ConnectTasking**: to send or receive streaming commands using a pre-registered exclusive tasking session (XML, CSV, JSON or binary)

Please see the [OGC® Sensor Planning Service Interface Standard v2.0](http://www.opengeospatial.org/standards/sps) for more details.


## Request Examples

Below are example requests to task a PTZ camera.

#### DescribeTasking

Request:

```xml
<sps:DescribeTasking service="SPS" version="2.0.0" xmlns:sps="http://www.opengis.net/sps/2.0">
  <sps:procedure>http://www.ogc.org/procedure/camera/1</sps:procedure>
</sps:DescribeTasking>
```

Response:

```xml
<sps:DescribeTaskingResponse xmlns:sps="http://www.opengis.net/sps/2.0" xmlns:swe="http://www.opengis.net/swe/2.0" xmlns:swes="http://www.opengis.net/swes/2.0" xmlns:xlink="http://www.w3.org/1999/xlink">
  <sps:taskingParameters name="CameraTask">
    <swe:DataRecord>
      <swe:field name="taskTimeFrame">
        <swe:TimeRange definition="http://www.opengis.net/def/property/OGC-SPS/0/TaskTimeFrame" referenceFrame="http://www.opengis.net/def/trs/BIPM/0/UTC" optional="false" updatable="false">
          <swe:label>Task Timeframe</swe:label>
          <swe:description>Desired start and end time for tasking the sensor</swe:description>
          <swe:uom xlink:href="http://www.opengis.net/def/uom/ISO-8601/0/Gregorian"/>
        </swe:TimeRange>
      </swe:field>
      <swe:field name="positioningChoice">
        <swe:DataChoice optional="true">
          <swe:item name="pointToLookAt">
            <swe:Vector definition="http://www.opengis.net/def/property/OGC-SPS-X-CAM/0/PointToLookAt" referenceFrame="http://www.opengis.net/def/crs/EPSG/0/4979">
            <swe:label>Look Pointer</swe:label>
            <swe:description>3D location where the camera should look at</swe:description>
              <swe:coordinate name="lat">
                <swe:Quantity definition="http://sweet.jpl.nasa.gov/2.0/spaceCoordinates.owl#Latitude" axisID="Lat">
                  <swe:label>Geodetic latitude</swe:label>
                  <swe:uom code="deg"/>
                </swe:Quantity>
              </swe:coordinate>
              <swe:coordinate name="long">
                <swe:Quantity definition="http://sweet.jpl.nasa.gov/2.0/spaceCoordinates.owl#Longitude" axisID="Long">
                  <swe:label>Geodetic longitude</swe:label>
                  <swe:uom code="deg"/>
                </swe:Quantity>
              </swe:coordinate>
              <swe:coordinate name="h">
                <swe:Quantity definition="http://sweet.jpl.nasa.gov/2.0/spaceCoordinates.owl#Vertical" axisID="h">
                  <swe:label>Ellipsoidal height</swe:label>
                  <swe:uom code="m"/>
                  <swe:value>0</swe:value>
                </swe:Quantity>
              </swe:coordinate>
            </swe:Vector>
          </swe:item>
          <swe:item name="relativePositioning">
            <swe:DataRecord definition="http://www.opengis.net/def/property/OGC-SPS-X-CAM/0/RelativePan">
            <swe:label>Relative Positioning</swe:label>
            <swe:description>Camera movement relative to the current position</swe:description>
              <swe:field name="relativeHorizontalPan">
                <swe:Quantity definition="http://www.opengis.net/def/property/OGC-SPS-X-CAM/0/RelativeHorizontalPan" optional="true">
                  <swe:uom code="deg"/>
                  <swe:constraint>
                    <swe:AllowedValues>
                      <swe:interval>-180 180</swe:interval>
                    </swe:AllowedValues>
                  </swe:constraint>
                </swe:Quantity>
              </swe:field>
              <swe:field name="relativeVerticalPan">
                <swe:Quantity definition="http://www.opengis.net/def/property/OGC-SPS-X-CAM/0/RelativeVerticalPan" optional="true">
                  <swe:uom code="deg"/>
                  <swe:constraint>
                    <swe:AllowedValues>
                      <swe:interval>-90 90</swe:interval>
                    </swe:AllowedValues>
                  </swe:constraint>
                </swe:Quantity>
              </swe:field>
            </swe:DataRecord>
          </swe:item>
        </swe:DataChoice>
      </swe:field>
      <swe:field name="focalLength">
        <swe:Quantity definition="http://www.opengis.net/def/property/OGC-SPS-X-CAM/0/FocalLength" optional="true">
        <swe:label>Focal length</swe:label>
        <swe:description>Focal length of the camera. Controls the camera's zoom level.</swe:description>
          <swe:uom code="mm"/>
          <swe:constraint>
            <swe:AllowedValues>
              <swe:interval>3.5 10</swe:interval>
            </swe:AllowedValues>
          </swe:constraint>
        </swe:Quantity>
      </swe:field>
    </swe:DataRecord>
  </sps:taskingParameters>
</sps:DescribeTaskingResponse>
```

#### Submit

Request:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sps:Submit xmlns:sps="http://www.opengis.net/sps/2.0" service="SPS" version="2.0.0" xmlns:swe="http://www.opengis.net/swe/2.0">
    <sps:procedure>http://www.ogc.org/procedure/camera/1</sps:procedure>
    <sps:taskingParameters>
        <sps:ParameterData>
            <sps:encoding>
                <swe:TextEncoding blockSeparator="@@" collapseWhiteSpaces="true" decimalSeparator="." tokenSeparator=","/>
            </sps:encoding>
            <sps:values>2010-08-20T12:37:00Z,2010-08-20T14:30:00Z,pointToLookAt,51.902112,8.192728,0.0,3.5</sps:values>
        </sps:ParameterData>
    </sps:taskingParameters>
</sps:Submit>
```

Response:

```xml
<sps:SubmitResponse xmlns:sps="http://www.opengis.net/sps/2.0">
  <sps:result>
    <sps:StatusReport>
      <sps:task>http://www.ogc.org/procedure/camera/1/tasks/6</sps:task>
      <sps:event>TaskSubmitted</sps:event>
      <sps:percentCompletion>0</sps:percentCompletion>
      <sps:procedure>http://www.ogc.org/procedure/camera/1</sps:procedure>
      <sps:requestStatus>Accepted</sps:requestStatus>
      <sps:taskStatus>InExecution</sps:taskStatus>
      <sps:updateTime>2010-08-20T11:12:04+02:00</sps:updateTime>
      <sps:taskingParameters>
        <sps:ParameterData>
          <sps:encoding>
            <swe:TextEncoding tokenSeparator="," blockSeparator="@@"/>
          </sps:encoding>
          <sps:values>2010-08-20T12:37:00+02:00,2010-08-20T14:30:00+02:00,Y,pointToLookAt,51.902112,8.192728,0,Y,3.5</sps:values>
        </sps:ParameterData>
      </sps:taskingParameters>
    </sps:StatusReport>
  </sps:result>
</sps:SubmitResponse>
```


#### Update

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sps:Update xmlns:sps="http://www.opengis.net/sps/2.0" service="SPS" version="2.0.0" xmlns:swe="http://www.opengis.net/swe/2.0">
    <sps:procedure>http://www.ogc.org/procedure/camera/1</sps:procedure>
    <sps:taskingParameters>
        <sps:ParameterData>
            <sps:encoding>
                <swe:TextEncoding blockSeparator="@@" collapseWhiteSpaces="true" decimalSeparator="." tokenSeparator=","/>
            </sps:encoding>
            <sps:values>pointToLookAt,51.902112,8.192728,0.0,3.5</sps:values>
        </sps:ParameterData>
    </sps:taskingParameters>
    <sps:targetTask>T001</sps:targetTask>
</sps:Update>
```
