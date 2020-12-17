(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{397:function(e,t,r){"use strict";r.r(t);var a=r(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"real-time-system-drivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-time-system-drivers"}},[e._v("#")]),e._v(" Real-time System Drivers")]),e._v(" "),r("p",[e._v("OSH simplifies the development of "),r("strong",[e._v("sensor and actuator drivers")]),e._v(" (referred collectively as "),r("em",[e._v("real-time system drivers")]),e._v(") by exposing a clean API for pushing "),r("strong",[e._v("observation data")]),e._v(" and "),r("strong",[e._v("procedure metadata")]),e._v(" (via SensorML) to an OSH management layer called the "),r("strong",[e._v("Procedure Registry")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"what-is-a-system-driver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-system-driver"}},[e._v("#")]),e._v(" What is a System Driver?")]),e._v(" "),r("p",[e._v("A "),r("strong",[e._v("real-time system driver")]),e._v(" in OSH is similar to a "),r("strong",[e._v("device driver")]),e._v(" for an operating system. Its purpose is to convert from heterogeneous data feeds or data formats (that can be proprietary, standards, or de-facto standards) to OSH internal data model based on OGC standards.")]),e._v(" "),r("p",[e._v("Thus, system drivers communicate with the rest of OSH components by providing "),r("strong",[e._v("procedure metadata")]),e._v(" as SensorML, "),r("strong",[e._v("datastream")]),e._v(" and "),r("strong",[e._v("command stream")]),e._v(" descriptions as SWE Common, "),r("strong",[e._v("features of interest")]),e._v(" following OGC feature model, and "),r("strong",[e._v("observation results")]),e._v(" as SWE Common encoded records or full-fledge "),r("strong",[e._v("Observation")]),e._v(" events.")]),e._v(" "),r("p",[e._v("They also describe accepted commands using the SWE Common format.")]),e._v(" "),r("h2",{attrs:{id:"procedure-registry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procedure-registry"}},[e._v("#")]),e._v(" Procedure Registry")]),e._v(" "),r("p",[e._v("Newly installed sensor and actuator drivers can be configured via the web admin interface.")]),e._v(" "),r("p",[e._v("Once properly configured, the driver can be started, which will trigger its registration with the hub's "),r("strong",[e._v("Procedure Registry")]),e._v(". At this point, OSH will connect the driver with the rest of the hub's components via the event-bus and persistent storage, and the driver will start producing data (and potentially accepting commands).")]),e._v(" "),r("p",[e._v("If a persistence module was previously configured to manage the new sensor, it will immediately start archiving all data produced by the driver, including observation data, tasking data and all provided procedure (i.e. sensor procedure) and features of interest metadata.")]),e._v(" "),r("p",[e._v("Likewise, if a service module was previously configured to expose data from the new sensor, such data will immediately become available through the service interface.")])])}),[],!1,null,null,null);t.default=s.exports}}]);