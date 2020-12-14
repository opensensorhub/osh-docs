(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{381:function(e,t,o){"use strict";o.r(t);var r=o(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),o("p",[e._v("This page describes how to install OpenSensorHub (OSH) binary release so you can test it on your own platform. The process is actually really easy in the default configuration thanks to the use of embedded Jetty and embedded H2 database. It should not take you more than 5 minutes to get a running OSH instance on your machine. ("),o("em",[e._v("NOTE: Installation on Android phones and tablets is done through a separate APK file")]),e._v(").")]),e._v(" "),o("h3",{attrs:{id:"prerequisistes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisistes"}},[e._v("#")]),e._v(" Prerequisistes")]),e._v(" "),o("p",[e._v("In order for OSH 2.0.x to run, you will need a working installation of Java JDK 11 or newer.")]),e._v(" "),o("p",[e._v("On Linux, we have successfully tested OpenSensorHub with both OpenJDK and Oracle JDK.")]),e._v(" "),o("h3",{attrs:{id:"setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),o("ul",[o("li",[e._v("First download the latest OSH binary release (osh-base-install-***.zip) from our "),o("a",{attrs:{href:"https://github.com/opensensorhub/osh-core/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Release Page"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Unzip it to a directory of your choice")]),e._v(" "),o("li",[e._v("Execute the "),o("code",[e._v("launch.sh")]),e._v(" script (on Linux or MacOS) or "),o("code",[e._v("launch.bat")]),e._v(" (on Windows)")]),e._v(" "),o("li",[e._v("You should now be able to connect to "),o("a",{attrs:{href:"http://localhost:8181/sensorhub/test",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8181/sensorhub/test"),o("OutboundLink")],1),e._v(" and get the message "),o("code",[e._v("SensorHub web server is up")])])]),e._v(" "),o("p",[o("em",[e._v("Note: This release has been tested on Ubuntu Linux, MacOS X and Windows 7.")])]),e._v(" "),o("h3",{attrs:{id:"demo-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#demo-configuration"}},[e._v("#")]),e._v(" Demo Configuration")]),e._v(" "),o("p",[e._v("The demo configuration provided with the binary release instructs OSH to start the following components:")]),e._v(" "),o("ul",[o("li",[e._v("The embedded Jetty server")]),e._v(" "),o("li",[e._v("The web admin UI")]),e._v(" "),o("li",[e._v("The simulated GPS example sensor")]),e._v(" "),o("li",[e._v("The simulated weather example sensor")]),e._v(" "),o("li",[e._v("Embedded storage instance collecting data produced by the 2 sensors")]),e._v(" "),o("li",[e._v("An SOS service connected to the real-time feeds and persistent storage")]),e._v(" "),o("li",[e._v("A SensorWeb API service connected to real-time feeds and persistent storage")]),e._v(" "),o("li",[e._v("Both SOS and SWE API services configured to accept registration of external sensors")])]),e._v(" "),o("h3",{attrs:{id:"connect-to-the-admin-console"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-the-admin-console"}},[e._v("#")]),e._v(" Connect to the Admin Console")]),e._v(" "),o("p",[e._v("You can connect to the "),o("a",{attrs:{href:"user/img/webui1.png",title:"OSH Admin Web UI"}},[e._v("Admin Console")]),e._v(" at "),o("a",{attrs:{href:"http://localhost:8181/sensorhub/admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8181/sensorhub/admin"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("When active, the console allows you to manage all OSH modules including sensors, processing chains, storage units, as well as service interfaces such as Sensor Observation Services (SOS) or Sensor Planning Services (SPS).")]),e._v(" "),o("p",[e._v('The "Simulated Weather Sensor" should be started and work out of the box.')]),e._v(" "),o("p",[e._v('However, if you select the "Simulated GPG Sensor" item in the Sensors tab, you\'ll see an error message asking for a Google API key. This key is necessary because the driver relies on '),o("a",{attrs:{href:"https://developers.google.com/maps/documentation/directions/start",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Directions API"),o("OutboundLink")],1),e._v(" to generate realistic routes between random locations. So for this driver to function, you'll have to create your own Google API key as instructed "),o("a",{attrs:{href:"https://developers.google.com/maps/documentation/directions/get-api-key",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v('Once you generated your key, just copy-paste it in the "Google Api Key" field of the sensor configuration panel and click "Apply Changes" at the top right. You can then enable the sensor by right clicking the corresponding item in the left column and selecting "Start" in the drop-down menu. If the sensor starts without error, you should now see data in the "Outputs" section (under the config panel). If you click the "Refresh" button it will show data updating continuously.')]),e._v(" "),o("h3",{attrs:{id:"connect-to-the-sensor-observation-service-sos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-the-sensor-observation-service-sos"}},[e._v("#")]),e._v(" Connect to the Sensor Observation Service (SOS)")]),e._v(" "),o("p",[e._v("You can connect right away to the SOS endpoint to get sensor data and metadata. Here are some examples that work with the installed simulated sensors:")]),e._v(" "),o("ul",[o("li",[e._v("GetCapabilities "),o("a",{attrs:{href:"http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetCapabilities",target:"_blank",rel:"noopener noreferrer"}},[e._v("XML"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Get Weather Result Template "),o("a",{attrs:{href:"http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResultTemplate&urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather",target:"_blank",rel:"noopener noreferrer"}},[e._v("XML"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResultTemplate&offering=urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather&responseFormat=application/json",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Get Latest Weather Measurement "),o("a",{attrs:{href:"http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,now",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSV"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,now&responseFormat=application/json",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Get Historical Weather Measurements "),o("a",{attrs:{href:"http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2020-01-01Z/now",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSV"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"http://localhost:8181/sensorhub/sos?service=SOS&version=2.0&request=GetResult&offering=urn:osh:sensor:simweather:0123456879&observedProperty=http://sensorml.com/ont/swe/property/Weather&temporalFilter=phenomenonTime,2020-01-01Z/now&responseFormat=application/json",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("More test links are available in the SOS Service section of the "),o("a",{attrs:{href:"http://localhost:8181/sensorhub/admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("admin console"),o("OutboundLink")],1),e._v(" (then go to the Test Links tab).")]),e._v(" "),o("p",[e._v("Also take a look at this simple "),o("a",{attrs:{href:"http://sensiasoft.net:8181/osm_client_websockets.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo client"),o("OutboundLink")],1),e._v(" that connects to the fake GPS live feed through websockets to display it on a map using OpenLayers. You can easily reproduce this locally.")]),e._v(" "),o("p",[e._v("More example data feed are also available "),o("a",{attrs:{href:"http://sensiasoft.net:8181/demo.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"logging-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging-configuration"}},[e._v("#")]),e._v(" Logging Configuration")]),e._v(" "),o("p",[e._v("All logging is made via logback and the configuration is done via the "),o("code",[e._v("logback.xml")]),e._v(" file included in the distribution.\nFor instance, you can enable SensorHub debug logs by changing the following line in this file:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('<logger name="org.sensorhub" level="info"/>\n')])])]),o("p",[e._v("to")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('<logger name="org.sensorhub" level="debug"/>\n')])])]),o("p",[e._v("See the "),o("a",{attrs:{href:"http://logback.qos.ch/manual/configuration.html#syntax",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logback Documentation"),o("OutboundLink")],1),e._v(" for more details.")])])}),[],!1,null,null,null);t.default=n.exports}}]);