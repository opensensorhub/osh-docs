# SensorWeb API

The SensorWeb API allows access to all resources available on an OSH hub, including access to historical data, real-time data feeds and tasking.

In addition to the **traditional REST operations**, this API also exposes **Websocket** and **MQTT** endpoints to retrieve **real-time events** corresponding to **resource additions, modifications and deletions**, as well as **push real-time observations** into the system.


## REST API

This API loosely follows REST principles, by providing read/write access to the following hierarchy of resources:

  - **/procedures**
    - /specsheet
    - /history
    - /datastreams
    - /controls
      - /tasks
      - /status
    - /featuresOfInterest
    - /members
  - **/datastreams**
    - /observations
  - **/observations**
  - **/features**
    - /history
    - /members

REST calls are implemented with the 4 traditional HTTP operations + the PATCH operation for more efficient partial updates:

  - **GET** to retrieve individual resources or resource collections
  - **POST** to create new resources in a parent collection
  - **PUT** and **PATCH** to modify an existing resource
  - **DELETE** to delete an existing resource
  
**GET** operations supports query parameters to filter the retrieved content. See the [OpenAPI specification](./openapi) or the [request examples](./examples) for more details.
 


## Websocket Binding

### Subscription

A websocket request can be issued on all ressource collections to get notified of resource changes. The URLs to use are the same as the URLs used for normal **GET** requests, except that they use the `ws://` or `wss://` protocol. Most query parameters used to filter collections are also supported.

Additional query parameters allow controling the kind of events to subscribe to. These additional parameters are:

  - **eventTypes**: The type of event(s) to subscribe to. Must be one or more string from the following enum [`ADDED, MODIFIED, REMOVED, ENABLED`]
  
  - **eventOnly**: Boolean flag indicating if the resource data should be included in the message or if only a small notification containing the event type, the resource ID and timestamp should be sent to the websocket channel. This flag only applies to `ADDED` and `MODIFIED` events.
  
  - **replaySpeed**: This OSH extension allows replaying historical data at the desired speed. If this value is equal to `1.0`, the requested data is replayed at the same rate it was produced (corresponding to the phenomenonTime stamps). If greather than `1.0`, the playback will be accelerated by the corresponding factor. If lower than `1.0`, the playback will be slowed down by the corresponding factor.
  
:::tip
Although it is simpler to use than the MQTT binding, one restriction of the Websocket API is that it doesn't allow a client to subscribe to multiple collections at a time in the same connection.
:::

### Data Push

The Websocket incoming channel can also be used to push observations and commands into the system.

Observation data can be ingested by opening a channel on a `datastream/observations` sub-collection. The payload format must be indicated by the `resultFormat` query parameter.

Likewise, commands can be submitted by opening a channel on a `controls/tasks` sub-collection. 



## MQTT Binding

### Subscribe

The MQTT binding works slightly differently as it is available through it's own TCP port, separate from OSH's embedded HTTP server port. The MQTT endpoint is thus always the same and the resource URLs (including any query parameters) are used as MQTT topics instead.

So an example MQTT SUBSCRIBE request could be:

| **SUBSCRIBE** |               |
| ------------- |:--------------|
| topicName     | "http://demo.opensensorhub.org/api/procedures?eventTypes=ADDED" |
| qos           | 1             |

The topic name can include filtering parameters:

| **SUBSCRIBE** |               |
| ------------- |:--------------|
| topicName     | "http://demo.opensensorhub.org/api/datastreams/56ef1c2/observations?featureOfInterest=ac2ee56" |
| qos           | 1             |


### Publish
 
MQTT PUBLISH requests can also be used to post new observation resources. They must target a specific datastream by using its nested `observations` collection, like so:

| **PUBLISH**   |               |
| ------------- |:--------------|
| topicName     | "http://demo.opensensorhub.org/api/datastreams/56ef1c2/observations" |
| packetId      | 4589          |
| qos           | 1             |
| retainFlag    | true          |
| payload       | "{ 'temp': 20.5, 'press': 1032, 'status': 'ok' }" |

The datastream itself must have been previously created with the HTTP JSON API.


### MQTT over Websocket

In order to allow the MQTT endpoint to be used by web clients written in Javascript, the SensorWeb API implementation also supports MQTT over websocket.

The websocket endpoint to use is a sub-resource of the API root URL, for example:

`wsx://demo.opensensorhub.org/api/mqtt`


The [MQTT.js](https://github.com/mqttjs) library can be used to connect to OSH SensorWeb API endpoint using this protocol.









