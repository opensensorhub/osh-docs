WebSocket Extension
===

Although it is possible to request a real-time data stream from OpenSensorHub's SOS using the "persistent HTTP" approach, this technique is hard to use within web browsers because the asynchronous **XMLHttpRequest** API is not designed for it and won't allow you to manage memory correctly (typically an ever growing buffer will be allocated to contain the endless stream of data).

To circumvent this issue, OpenSensorHub introduced the **WebSocket** extension to SOS very early-on. It is super easy to use since **WebSocket** requests are identical to **HTTP GET** requests (only the protocol part of the URL changes).

Note that the **WebSocket** protocol is only available for **GetResult** requests for now but we have plans to implement support for **InsertResult** as well.


### Principle

The **WebSocket** is constructed in the same way an **HTTP GET** URL would be except the `ws://` protocol is used instead of `http://`, as in the following example:

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



 


