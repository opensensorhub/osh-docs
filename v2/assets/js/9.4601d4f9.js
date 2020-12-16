(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{358:function(e,t,a){e.exports=a.p+"assets/img/data-model.e10f0007.svg"},390:function(e,t,a){"use strict";a.r(t);var s=a(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"data-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[e._v("#")]),e._v(" Data Model")]),e._v(" "),s("p",[e._v("OpenSensorHub (OSH) internals are modeled on a few key concepts defined by the "),s("a",{attrs:{href:"http://www.opengeospatial.org/standards/sensorml",target:"_blank",rel:"noopener noreferrer"}},[e._v("SensorML"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"http://www.opengeospatial.org/standards/om",target:"_blank",rel:"noopener noreferrer"}},[e._v("O&M"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://www.ogc.org/standards/swecommon",target:"_blank",rel:"noopener noreferrer"}},[e._v("SWE Common"),s("OutboundLink")],1),e._v(" standards. Below are detailed descriptions of these concepts and a few facts regarding their implementation in OSH.")]),e._v(" "),s("p",[e._v("Below is a diagram showing the main data model components and discussion about each class. We feel that it's important to read through these definitions so you can better understand how data is organized by OSH, and find your way around the OSH admin console.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(358),alt:"Data Model Diagram"}})]),e._v(" "),s("h2",{attrs:{id:"procedure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#procedure"}},[e._v("#")]),e._v(" Procedure")]),e._v(" "),s("p",[s("strong",[e._v("Procedures")]),e._v(" are entities that can produce and/or receive data. They can be "),s("strong",[e._v("physical entities")]),e._v(" (e.g. sensors, actuators, devices...) or "),s("strong",[e._v("logical entities")]),e._v(" (e.g. processing components, forecast models...), but in both cases detailed information about procedures (the specsheet) is provided using "),s("strong",[e._v("SensorML")]),e._v(" in OSH.")]),e._v(" "),s("p",[e._v("A procedure's SensorML specsheet provides a thorough description of its "),s("strong",[e._v("inputs, outputs and parameters")]),e._v(", but also information regarding its identification, classification, contacts, physical and measurement characteristics, etc. Each description also has a certain "),s("strong",[e._v("validity period")]),e._v(" (valid time) which allows for "),s("strong",[e._v("full historization")]),e._v(" of the procedure metadata (e.g. allows to capture and historize information about maintenance events like software updates or recalibrations, physical device deployments and relocations, etc.).")]),e._v(" "),s("p",[e._v("Procedures can also be "),s("strong",[e._v("parameterized")]),e._v(", either statically (via configuration) or dynamically (via tasking). Both types of parameterization can be self-described in the "),s("strong",[e._v("SensorML")]),e._v(" description.")]),e._v(" "),s("p",[e._v("A procedure can be a "),s("strong",[e._v("data producer")]),e._v(", in which case it has one or more "),s("strong",[e._v("outputs")]),e._v(" that represent data flows generated by the procedure. These data flows can include "),s("strong",[e._v("observation results")]),e._v(", but also other things such as "),s("strong",[e._v("status information")]),e._v(". Each "),s("strong",[e._v("output")]),e._v(" has a unique name (within the procedure) and is associated to a "),s("strong",[e._v("structure")]),e._v(" (a.k.a. schema) and "),s("strong",[e._v("encoding")]),e._v(". Data records generated by an output are collected into a "),s("strong",[e._v("datastream")]),e._v(" (see below). Since version 2.0, OSH also supports output schema changes over time.")]),e._v(" "),s("p",[e._v("A procedure can also be a "),s("strong",[e._v("command receiver")]),e._v(", in which case it has one or more "),s("strong",[e._v("taskable parameters")]),e._v(" that represent commands or messages that can be received by the procedure. Similarly to outputs, each taskable parameter (or group of parameters) has a unique name (within the procedure) and is associated to a schema. Commands sent to the procedure and targeted at a specific taskable parameter must abide by its schema or the command is rejected. Commands sent to a procedure are collected into "),s("strong",[e._v("command streams")]),e._v(" (see below).")]),e._v(" "),s("p",[e._v("Procedures can also be grouped into "),s("strong",[e._v("Procedure Groups")]),e._v(". This concept is used to model sensor networks or geographically distributed sensor arrays.")]),e._v(" "),s("h2",{attrs:{id:"datastream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datastream"}},[e._v("#")]),e._v(" Datastream")]),e._v(" "),s("p",[s("strong",[e._v("Datastreams")]),e._v(" are time series of "),s("strong",[e._v("observations")]),e._v(' of the same kind that are generated by a given procedure. By "same kind" we mean that the '),s("strong",[e._v("result")]),e._v(" of all "),s("strong",[e._v("observations")]),e._v(" in a given datastream share the same "),s("strong",[e._v("structure")]),e._v(" (i.e. abide to the same schema) and "),s("strong",[e._v("encoding")]),e._v(".")]),e._v(" "),s("p",[e._v("In OSH, datastreams are always associated to a "),s("strong",[e._v("procedure output")]),e._v(". If the schema of an "),s("strong",[e._v("output")]),e._v(" changes, a new "),s("strong",[e._v("datastream")]),e._v(" is created, and in this case, there will be several datastreams associated to the same output, each one with a different validity period.")]),e._v(" "),s("p",[e._v("Datastreams can be seen as the "),s("strong",[e._v("real-time channel")]),e._v(" through which data flows, or as a "),s("strong",[e._v("collection of historical observations")]),e._v(" over time. In fact, in OSH, a datastream represents both and allows for both methods of data consumption: real-time streaming or retrieval of historical data. Depending on how the acquisition pipeline for a particular procedure is configured, data records collected by a datastream can be discarded as soon as dispatched by the "),s("strong",[e._v("event bus")]),e._v(" (real-time datastream) or they can be persisted in a "),s("strong",[e._v("data store")]),e._v(" (historical datastream), or both.")]),e._v(" "),s("h2",{attrs:{id:"command-stream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-stream"}},[e._v("#")]),e._v(" Command Stream")]),e._v(" "),s("p",[s("strong",[e._v("Command streams")]),e._v(" are the counterparts of datastreams that are used to model procedures' "),s("strong",[e._v("command & control channels")]),e._v(". They are thus used to augment "),s("strong",[e._v("procedures")]),e._v(" with "),s("strong",[e._v("tasking capabilities")]),e._v(".")]),e._v(" "),s("p",[e._v("A command stream is essentially a time series of commands associated to a given "),s("strong",[e._v("procedure taskable parameter")]),e._v(". If the schema of a "),s("strong",[e._v("taskable parameter")]),e._v(" changes, a new "),s("strong",[e._v("command stream")]),e._v(" is created, and in this case, there will be several command streams associated to the same taskable parameter, each one with a different validity period.")]),e._v(" "),s("p",[e._v("Like datastreams, command streams represent both the "),s("strong",[e._v("real-time channel")]),e._v(" through which commands are delivered and the "),s("strong",[e._v("collection of historical commands")]),e._v(" that a procedure has received until the present time (but whose execution can actually be scheduled for a future time).")]),e._v(" "),s("h2",{attrs:{id:"observation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#observation"}},[e._v("#")]),e._v(" Observation")]),e._v(" "),s("p",[e._v("Observations are a specific type of event, where a "),s("strong",[e._v("procedure")]),e._v(" observes, estimates or forecasts the value of one or more properties of a "),s("strong",[e._v("feature of interest")]),e._v(". Each observation is associated to a "),s("strong",[e._v("datastream")]),e._v(", that in turn is associated to a specific "),s("strong",[e._v("output")]),e._v(" of the "),s("strong",[e._v("procedure")]),e._v(" that made the observation. Observations also have the following properties:")]),e._v(" "),s("p",[s("strong",[e._v("Phenomenon Time")])]),e._v(" "),s("p",[e._v("Observations have a phenomenon time that indicates "),s("strong",[e._v("when the phenomenon being observed (or forecasted) took place")]),e._v(". Note that the phenomenon time is not necessarily in the present: it can be in the past if the procedure observes something that happened long ago (e.g. a geological or astronomical event), or in the future when the procedure produces a forecast (e.g. forecast model).")]),e._v(" "),s("p",[s("strong",[e._v("Result Time")])]),e._v(" "),s("p",[e._v("Observations also have a result time that indicates the "),s("strong",[e._v("time at which the procedure generated the observation result")]),e._v(". It can be different from the phenomenon time.")]),e._v(" "),s("p",[s("strong",[e._v("Result")])]),e._v(" "),s("p",[e._v("In OSH, observation results are always defined by a SWE Common data structure and encoding, both of which are self descriptive and can be retrieved by data consumers before they start consuming data from an OSH node.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("For most types of automated/digital sensors, "),s("strong",[e._v("phenomenon time and result time can be considered identical")]),e._v(" because they are typically very close to each other. In this case, the only difference is due to the sensor latency, often of the order of a few milliseconds, sometimes a few seconds, and is neglected in most applications. Note that the latency can still be documented in the SensorML description of the procedure in case it is needed for more advanced processing.")])]),e._v(" "),s("h2",{attrs:{id:"feature-of-interest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#feature-of-interest"}},[e._v("#")]),e._v(" Feature of Interest")]),e._v(" "),s("h2",{attrs:{id:"lineage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lineage"}},[e._v("#")]),e._v(" Lineage")]),e._v(" "),s("h2",{attrs:{id:"change-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-management"}},[e._v("#")]),e._v(" Change Management")]),e._v(" "),s("p",[e._v("All types of resources defined above can change in time and one strength of OSH is its ability to maintain a full history of changes")])])}),[],!1,null,null,null);t.default=o.exports}}]);