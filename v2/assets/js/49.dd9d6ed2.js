(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{410:function(e,t,s){"use strict";s.r(t);var a=s(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"api-principles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-principles"}},[e._v("#")]),e._v(" API Principles")]),e._v(" "),s("p",[e._v("The SensorWeb API allows access to all resources available on an OSH hub, including access to historical data, real-time data feeds and tasking.")]),e._v(" "),s("p",[e._v("In addition to the "),s("strong",[e._v("traditional REST operations")]),e._v(", this API also exposes "),s("strong",[e._v("Websocket")]),e._v(" and "),s("strong",[e._v("MQTT")]),e._v(" endpoints to retrieve "),s("strong",[e._v("real-time events")]),e._v(" corresponding to "),s("strong",[e._v("resource additions, modifications and deletions")]),e._v(", as well as "),s("strong",[e._v("push real-time observations")]),e._v(" into the system.")]),e._v(" "),s("h2",{attrs:{id:"rest-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[e._v("#")]),e._v(" REST API")]),e._v(" "),s("p",[e._v("This API loosely follows REST principles, by providing read/write access to the following hierarchy of resources:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("/systems")]),e._v(" "),s("ul",[s("li",[e._v("/details")]),e._v(" "),s("li",[e._v("/history")]),e._v(" "),s("li",[e._v("/fois")]),e._v(" "),s("li",[e._v("/datastreams")]),e._v(" "),s("li",[e._v("/controls\n"),s("ul",[s("li",[e._v("/tasks")]),e._v(" "),s("li",[e._v("/status")]),e._v(" "),s("li",[e._v("/commands")])])]),e._v(" "),s("li",[e._v("/featuresOfInterest (sampling features or refs to sampled/domain feature)")]),e._v(" "),s("li",[e._v("/members (for procedure groups)")])])]),e._v(" "),s("li",[s("strong",[e._v("/datastreams")]),e._v(" "),s("ul",[s("li",[e._v("/observations")])])]),e._v(" "),s("li",[s("strong",[e._v("/observations")])]),e._v(" "),s("li",[s("strong",[e._v("/fois")]),e._v(" "),s("ul",[s("li",[e._v("/history")]),e._v(" "),s("li",[e._v("/members (for feature collections)")])])])]),e._v(" "),s("p",[e._v("REST calls are implemented with the 4 traditional HTTP operations + the PATCH operation for more efficient partial updates:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("GET")]),e._v(" to retrieve individual resources or resource collections")]),e._v(" "),s("li",[s("strong",[e._v("POST")]),e._v(" to create new resources in a parent collection")]),e._v(" "),s("li",[s("strong",[e._v("PUT")]),e._v(" and "),s("strong",[e._v("PATCH")]),e._v(" to modify an existing resource")]),e._v(" "),s("li",[s("strong",[e._v("DELETE")]),e._v(" to delete an existing resource")])]),e._v(" "),s("p",[s("strong",[e._v("GET")]),e._v(" operations support query parameters to further filter the retrieved content. See the "),s("a",{attrs:{href:"./openapi"}},[e._v("OpenAPI specification")]),e._v(" or the "),s("a",{attrs:{href:"./examples"}},[e._v("request examples")]),e._v(" for more details.")]),e._v(" "),s("p",[e._v("The full "),s("strong",[e._v("OpenAPI documentation")]),e._v(" is available "),s("a",{attrs:{href:"https://opensensorhub.github.io/sensorweb-api/swagger-ui/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"websocket-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket-binding"}},[e._v("#")]),e._v(" Websocket Binding")]),e._v(" "),s("h3",{attrs:{id:"subscription"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscription"}},[e._v("#")]),e._v(" Subscription")]),e._v(" "),s("p",[e._v("A websocket request can be issued on all ressource collections to get notified of resource changes. The URLs to use are the same as the URLs used for normal "),s("strong",[e._v("GET")]),e._v(" requests, except that they use the "),s("code",[e._v("ws://")]),e._v(" or "),s("code",[e._v("wss://")]),e._v(" protocol. Most query parameters used to filter collections are also supported.")]),e._v(" "),s("p",[e._v("Additional query parameters allow controling the kind of events to subscribe to. These additional parameters are:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("eventTypes")]),e._v(": The type of event(s) to subscribe to. Must be one or more string from the following enum ["),s("code",[e._v("ADDED, MODIFIED, REMOVED, ENABLED")]),e._v("]")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("replaySpeed")]),e._v(": This OSH extension allows replaying historical data at the desired speed. If this value is equal to "),s("code",[e._v("1.0")]),e._v(", the requested data is replayed at the same rate the phenomenon actually happened (as indicated by the phenomenonTime property). If greather than "),s("code",[e._v("1.0")]),e._v(", the playback will be accelerated by the corresponding factor. If lower than "),s("code",[e._v("1.0")]),e._v(", the playback will be slowed down by the corresponding factor.")])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Although it is simpler to use than the MQTT binding, one restriction of the Websocket API is that it doesn't allow a client to subscribe to multiple collections at a time in the same connection.")])]),e._v(" "),s("p",[e._v("When subscribing to a websocket on an observation collection, the default time parameter is "),s("code",[e._v("now/..")]),e._v(", which corresponds to a request for real-time data. By changing the time parameter, it is possible to request a replay of historical data as well.")]),e._v(" "),s("p",[e._v("The JSON object sent through a websocket connection includes extra property providing information about the event itself:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  '@eventType'"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" 'ADDED'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  '@eventTime'"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" '"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("-03")]),e._v("-06T15"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("46")]),e._v(".132Z'\n  'id'"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" 'ef4c5a2'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  'name'"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" 'Weather station'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  'description'"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" 'Weather station'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("The client can use a "),s("code",[e._v("select")]),e._v(" filter (e.g. "),s("code",[e._v("select=id,name")]),e._v(") to strip some information and receive a minimal event object.")]),e._v(" "),s("h3",{attrs:{id:"data-push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-push"}},[e._v("#")]),e._v(" Data Push")]),e._v(" "),s("p",[e._v("The Websocket incoming channel can also be used to push observations and commands into the system.")]),e._v(" "),s("p",[e._v("Observation data can be ingested by opening a channel on a "),s("code",[e._v("datastream/{id}/observations")]),e._v(" sub-collection. The payload format must be indicated by the "),s("code",[e._v("format")]),e._v(" query parameter or the "),s("code",[e._v("Content-Type")]),e._v(" HTTP header.")]),e._v(" "),s("p",[e._v("Likewise, commands can be submitted by opening a channel on a "),s("code",[e._v("controls/tasks")]),e._v(" sub-collection.")]),e._v(" "),s("h2",{attrs:{id:"mqtt-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-binding"}},[e._v("#")]),e._v(" MQTT Binding")]),e._v(" "),s("p",[e._v("The MQTT binding works slightly differently as it is available through it's own TCP port, separate from OSH's embedded HTTP server port. The MQTT endpoint is thus always the same and the resource URLs (including any query parameters) are used as MQTT topics instead.")]),e._v(" "),s("h3",{attrs:{id:"subscribe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subscribe"}},[e._v("#")]),e._v(" Subscribe")]),e._v(" "),s("p",[e._v("An example MQTT SUBSCRIBE request is given below:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[e._v("SUBSCRIBE")])]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}})])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("topicName")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v('"http://demo.opensensorhub.org/api/procedures?eventTypes=ADDED"')])]),e._v(" "),s("tr",[s("td",[e._v("qos")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("1")])])])]),e._v(" "),s("p",[e._v("The topic name can include filtering parameters:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[e._v("SUBSCRIBE")])]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}})])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("topicName")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v('"http://demo.opensensorhub.org/api/datastreams/56ef1c2/observations?featureOfInterest=ac2ee56"')])]),e._v(" "),s("tr",[s("td",[e._v("qos")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("1")])])])]),e._v(" "),s("h3",{attrs:{id:"publish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publish"}},[e._v("#")]),e._v(" Publish")]),e._v(" "),s("p",[e._v("MQTT PUBLISH requests can also be used to post new observation resources. They must target a specific datastream by using its nested "),s("code",[e._v("observations")]),e._v(" collection, like so:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[e._v("PUBLISH")])]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}})])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("topicName")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v('"http://demo.opensensorhub.org/api/datastreams/56ef1c2/observations"')])]),e._v(" "),s("tr",[s("td",[e._v("packetId")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("4589")])]),e._v(" "),s("tr",[s("td",[e._v("qos")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("1")])]),e._v(" "),s("tr",[s("td",[e._v("retainFlag")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("true")])]),e._v(" "),s("tr",[s("td",[e._v("payload")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("\"{ 'temp': 20.5, 'press': 1032, 'status': 'ok' }\"")])])])]),e._v(" "),s("p",[e._v("The datastream itself must have been previously created with the HTTP JSON API.")]),e._v(" "),s("h3",{attrs:{id:"mqtt-over-websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-over-websocket"}},[e._v("#")]),e._v(" MQTT over Websocket")]),e._v(" "),s("p",[e._v("In order to allow the MQTT endpoint to be used by web clients written in Javascript, the SensorWeb API implementation also supports MQTT over websocket.")]),e._v(" "),s("p",[e._v("The websocket endpoint to use is a sub-resource of the API root URL, for example:")]),e._v(" "),s("p",[s("code",[e._v("wsx://demo.opensensorhub.org/api/mqtt")])]),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"https://github.com/mqttjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("MQTT.js"),s("OutboundLink")],1),e._v(" library can be used to connect to OSH SensorWeb API endpoint using this protocol.")])])}),[],!1,null,null,null);t.default=o.exports}}]);