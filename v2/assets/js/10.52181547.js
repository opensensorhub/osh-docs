(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{358:function(e,a,t){e.exports=t.p+"assets/img/architecture-overview.0cff05ba.svg"},392:function(e,a,t){"use strict";t.r(a);var s=t(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"architecture-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#architecture-overview"}},[e._v("#")]),e._v(" Architecture Overview")]),e._v(" "),s("p",[e._v("OpenSensorHub's (OSH) "),s("strong",[e._v("modular and flexible architecture")]),e._v(" allows solving many different use cases related to sensor "),s("strong",[e._v("data collection")]),e._v(", "),s("strong",[e._v("harmonization")]),e._v(", "),s("strong",[e._v("processing")]),e._v(" and "),s("strong",[e._v("distribution/sharing")]),e._v(".")]),e._v(" "),s("p",[e._v("OSH core components implement a "),s("strong",[e._v("generic data model")]),e._v(" and an efficient "),s("strong",[e._v("streaming and historical data management engine")]),e._v(" that can accomodate "),s("strong",[e._v("any sensor type")]),e._v(", while "),s("strong",[e._v("add-on modules")]),e._v(" provide specific functionality, tailored to specific use cases or sensor kinds.")]),e._v(" "),s("p",[e._v("The main OSH components are shown on the following diagram:")]),e._v(" "),s("p",[s("img",{attrs:{src:t(358),alt:"Overall Architecture Diagram"}})]),e._v(" "),s("h2",{attrs:{id:"core-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#core-components"}},[e._v("#")]),e._v(" Core Components")]),e._v(" "),s("p",[e._v("The following components are part of the core engine and are thus present in all OSH deployments:")]),e._v(" "),s("h4",{attrs:{id:"event-bus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-bus"}},[e._v("#")]),e._v(" Event Bus")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("event bus")]),e._v(" enables "),s("strong",[e._v("asynchronous one-to-many messaging")]),e._v(" between components via a "),s("strong",[e._v("publish/subscribe")]),e._v(" paradigm. This is an essential component of OSH since many things in OSH are event-based and reactive.")]),e._v(" "),s("h4",{attrs:{id:"federated-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#federated-database"}},[e._v("#")]),e._v(" Federated Database")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("federated database")]),e._v(" is a "),s("strong",[e._v("unified queryable interface")]),e._v(" allowing access to all data stored by OSH storage modules.")]),e._v(" "),s("p",[e._v("It allows data consumers such as services and APIs to obtain their data in a unified manner. This is true for any storage type and/or any number of underlying storage backends that are used to persist and historize data.")]),e._v(" "),s("h4",{attrs:{id:"procedure-registry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#procedure-registry"}},[e._v("#")]),e._v(" Procedure Registry")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("procedure registry")]),e._v(" is a management component for modules adding new "),s("a",{attrs:{href:"./data-model#procedure"}},[e._v("procedures")]),e._v(" (e.g. sensors, actuators, sensor networks, processes) to an OSH hub, such a sensor drivers.")]),e._v(" "),s("p",[e._v("In particular, the "),s("strong",[e._v("procedure registry")]),e._v(" handles the following aspects:")]),e._v(" "),s("ul",[s("li",[e._v("Procedure state management")]),e._v(" "),s("li",[e._v("Validation and forwarding of events produced by data producers to the event bus")]),e._v(" "),s("li",[e._v("Dispatching of new events to the event bus when state changes are detected")]),e._v(" "),s("li",[e._v("Automatic persistence of real-time data (configurable)")])]),e._v(" "),s("h4",{attrs:{id:"processing-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processing-engine"}},[e._v("#")]),e._v(" Processing Engine")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("processing engine")]),e._v(" provides functionality to "),s("strong",[e._v("execute processing chains")]),e._v(" in different modes:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Stream processing mode")]),e._v(" to process real-time data flows (observations) into other derived data flows")]),e._v(" "),s("li",[s("strong",[e._v("On-demand processing mode")]),e._v(" to process data on-demand, when triggered by an external action (typically when requested from a service interface)")]),e._v(" "),s("li",[s("strong",[e._v("Batch processing mode")]),e._v(" to process or re-process archived data in batch")])]),e._v(" "),s("p",[e._v("Processing chains are made of atomic processing components that are provided as add-ons.")]),e._v(" "),s("h2",{attrs:{id:"add-on-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-on-components"}},[e._v("#")]),e._v(" Add-on Components")]),e._v(" "),s("p",[e._v("Add-on components can be included at build time in a given OSH node distribution or they can be installed later using the new dynamic deployment features built on OSGi.")]),e._v(" "),s("h4",{attrs:{id:"real-time-system-drivers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#real-time-system-drivers"}},[e._v("#")]),e._v(" Real-Time System Drivers")]),e._v(" "),s("p",[s("strong",[e._v("Real-time system drivers")]),e._v(" are add-ons implementing the "),s("a",{attrs:{href:"../../dev/java-apis/real-time-driver-api"}},[e._v("System Driver API")]),e._v(" and responsible for pushing real-time (or quasi real-time) data into OSH by adapting a data feed coming from external sources. Drivers can be:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Device drivers")]),e._v(" connecting directly to a "),s("strong",[e._v("physical device")]),e._v(" such as a "),s("strong",[e._v("sensor")]),e._v(", an "),s("strong",[e._v("actuator")]),e._v(", a digital system of any kind")]),e._v(" "),s("li",[s("strong",[e._v("Data feed drivers")]),e._v(" connecting to a network data feed in a non SWE format, e.g.\n"),s("ul",[s("li",[e._v("A Kafka feed flowing proprietary data")]),e._v(" "),s("li",[e._v("An AVL data feed over TCP produced by an existing AVL data aggregation system")]),e._v(" "),s("li",[e._v("A video data feed produced by a network camera")]),e._v(" "),s("li",[e._v("etc.")])])])]),e._v(" "),s("h4",{attrs:{id:"database-connectors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-connectors"}},[e._v("#")]),e._v(" Database Connectors")]),e._v(" "),s("p",[s("strong",[e._v("Any type of data store")]),e._v(" can be used to persist data generated by OSH if the proper connector is developed. This is done by implementing the "),s("a",{attrs:{href:"../../dev/java-apis/datastore-api"}},[e._v("Datastore API")]),e._v(". Once a connector is available, observations from any sensor can be "),s("strong",[e._v("persisted automatically")]),e._v(" by the "),s("strong",[e._v("procedure registry")]),e._v(" and retrieved by any other module thorugh the "),s("strong",[e._v("federated database")]),e._v(".")]),e._v(" "),s("p",[e._v("All kind of storage backends can be supported once a proper connector is developed, for example:")]),e._v(" "),s("ul",[s("li",[e._v("Embedded object databases (e.g. H2 MVStore, Perst)")]),e._v(" "),s("li",[e._v("SQL databases (e.g. PostgreSQL, SQLLite, Oracle)")]),e._v(" "),s("li",[e._v("Distributed NoSQL data stores (e.g. Elastic Search, MongoDB)")]),e._v(" "),s("li",[e._v("Remote datastores (e.g. proprietary web services or APIs providing access to observation archives)")]),e._v(" "),s("li",[e._v("File collections (e.g. NetCDF files)")]),e._v(" "),s("li",[e._v("etc.")])]),e._v(" "),s("h4",{attrs:{id:"processing-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processing-modules"}},[e._v("#")]),e._v(" Processing Modules")]),e._v(" "),s("p",[s("strong",[e._v("Processing modules")]),e._v(" provide one or more "),s("strong",[e._v("processing components")]),e._v(" that can be run "),s("strong",[e._v("standalone or as part of a larger processing chain")]),e._v(". Processing modules can easily be created and added to an OSH node by implementing the "),s("a",{attrs:{href:"../../dev/java-apis/processing-api"}},[e._v("Processing API")]),e._v(" to solve problems as various as:")]),e._v(" "),s("ul",[s("li",[e._v("Statitics and data summarizations")]),e._v(" "),s("li",[e._v("Quality assurance and control (QA/QC)")]),e._v(" "),s("li",[e._v("Geolocalization and other geospatial computations")]),e._v(" "),s("li",[e._v("Artificial Intelligence and Machine Learning (AI/ML)")]),e._v(" "),s("li",[e._v("Computer Vision and Video Processing (CV)")]),e._v(" "),s("li",[e._v("etc.")])]),e._v(" "),s("p",[e._v("Processing modules can be developed in pure Java or can wrap existing libraries developed in other languages (e.g. OpenCV, OpenAI, TensorFlow, Orekit, etc.)")]),e._v(" "),s("h4",{attrs:{id:"external-apis-and-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-apis-and-services"}},[e._v("#")]),e._v(" External APIs and Services")]),e._v(" "),s("p",[s("strong",[e._v("External APIs and Services")]),e._v(" provide "),s("strong",[e._v("communication interfaces")]),e._v(" allowing the exchange of data in and out of an OSH node.")]),e._v(" "),s("p",[e._v("Several "),s("strong",[e._v("HTTP based APIs and services")]),e._v(" are provided either as part of OSH Core or maintained by the core team:")]),e._v(" "),s("ul",[s("li",[e._v("OGC Sensor Observation Service (SOS), including transactional support (SOS-T)")]),e._v(" "),s("li",[e._v("OGC Sensor Planning Service (SPS) and our custom extension for registering a remotely taskbable sensor (SPS-T)")]),e._v(" "),s("li",[e._v("SensorWeb API")]),e._v(" "),s("li",[e._v("SensorThings API")])]),e._v(" "),s("p",[s("strong",[e._v("MQTT bindings")]),e._v(" are also available for publishing and subscribing to real-time data as an extension to both SensorWeb API and SensorThings API.")]),e._v(" "),s("p",[e._v("Many more can be developed as add-ons such as the video transcoding service that was added recently.")])])}),[],!1,null,null,null);a.default=r.exports}}]);