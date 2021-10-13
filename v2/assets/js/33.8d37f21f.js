(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{391:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"configuration-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file"}},[t._v("#")]),t._v(" Configuration File")]),t._v(" "),e("p",[t._v("An OSH hub is configured with a single JSON file that includes parameters for all modules loaded on the hub.")]),t._v(" "),e("h3",{attrs:{id:"common-config-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-config-parameters"}},[t._v("#")]),t._v(" Common Config Parameters")]),t._v(" "),e("p",[t._v("Each module configuration contains a common set of parameters that are described below:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("objClass")]),t._v(": The class of the configuration object itself (needed for deserialization)")]),t._v(" "),e("li",[e("strong",[t._v("id")]),t._v(": Local ID of the module instance")]),t._v(" "),e("li",[e("strong",[t._v("name")]),t._v(": Name of the module instance")]),t._v(" "),e("li",[e("strong",[t._v("description")]),t._v(": Description of the module instance")]),t._v(" "),e("li",[e("strong",[t._v("moduleClass")]),t._v(": The class of the module to instantiate")]),t._v(" "),e("li",[e("strong",[t._v("autoStart")]),t._v(": Boolean flag indicating if the module should be automatically started when the hub starts")])]),t._v(" "),e("p",[t._v("Any other parameter is specific to the module and should be described in the module documentation.")]),t._v(" "),e("h3",{attrs:{id:"system-drivers-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-drivers-configuration"}},[t._v("#")]),t._v(" System Drivers Configuration")]),t._v(" "),e("p",[t._v("System drivers share some common configuration properties inherited from the "),e("code",[t._v("SensorConfig")]),t._v(" class:")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("sensorML")]),t._v(": URL pointing to a SensorML file describing the sensor characteristics (the content of the file will be merged with information generated automatically by the framework, see below)")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("lastUpdated")]),t._v(": The date at which the SensorML description generated by the driver starts to be valid. Note that everytime this value is changed (or the validTime in the SensorML document is manually updated), the procedure description is versioned in OSH data stores.")])])]),t._v(" "),e("p",[t._v("The rules for merging an external SensorML file are as follow:")]),t._v(" "),e("ul",[e("li",[t._v("Input, output and taskable parameter descriptors generated by the driver code will always override the ones provided in the external SensorML description referenced by the "),e("code",[t._v("sensorML")]),t._v(" property")]),t._v(" "),e("li",[t._v("If not provided in the external SensorML file, a validTime is generated using the "),e("code",[t._v("lastUpdated")]),t._v(" config property. In this case, the validity period starts at the specified time stamp and ends 'now'")]),t._v(" "),e("li",[t._v("If not provided in the external SensorML file, the module name is used as the process name in the generated SensorML description.")]),t._v(" "),e("li",[t._v("If not provided in the external SensorML file, the module description is used as the process description in the generated SensorML description.")])]),t._v(" "),e("h3",{attrs:{id:"datastore-identifiers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datastore-identifiers"}},[t._v("#")]),t._v(" Datastore Identifiers")]),t._v(" "),e("p",[t._v("The "),e("strong",[t._v("federated database")]),t._v(" needs each storage module deployed on an OSH hub to be assigned a unique number (in the hub scope) in order to generate unambiguous resource IDs.")]),t._v(" "),e("p",[t._v("A common configuration field called "),e("strong",[t._v("databaseNum")]),t._v(" is shared by all modules implementing data stores. The configuration of each storage module must set a different positive integer number to this field or the hub won't start.")]),t._v(" "),e("h3",{attrs:{id:"database-view-filters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-view-filters"}},[t._v("#")]),t._v(" Database View Filters")]),t._v(" "),e("p",[t._v("Many modules make use of "),e("strong",[t._v("filtered views")]),t._v(" to select only a subset of the data available on an OSH hub.")]),t._v(" "),e("p",[t._v("In particular, "),e("strong",[t._v("filtered views")]),t._v(" are used to select what observations are exposed to external consumers via APIs or web services or data push clients. All modules maintained by the core team share a common "),e("code",[t._v("exposedResources")]),t._v(" property that takes a "),e("code",[t._v("ObsFilter")]),t._v(" object or, for the sake of simplicity, directly a "),e("code",[t._v("DataStreamFilter")]),t._v(" or "),e("code",[t._v("SystemFilter")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("Example filters:")])]),t._v(" "),e("p",[t._v("Expose observations from all procedures with matching UIDs (exact match or prefix match):")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v('includeFilter"'),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"objClass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.sensorhub.api.datastore.system.SystemFilter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uniqueIDs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"urn:osh:sensor:simgps:d136b6ea"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"urn:osh:sensor:simweather:0123456879"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"urn:osh:sensor:v4l-cam:*"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Expose observations from all datastreams with given observed properties URI:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v('includeFilter"'),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"objClass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.sensorhub.api.datastore.obs.DataStreamFilter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"observedProperties"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://mmisw.org/ont/cf/parameter/air_temperature"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://mmisw.org/ont/cf/parameter/air_pressure"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Expose observations from selected procedures but only for a specific time period:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"includeFilter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"objClass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.sensorhub.api.datastore.obs.ObsFilter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phenomenonTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"during"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-03-25Z"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-04-17Z"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"withDatastreams"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"objClass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.sensorhub.api.datastore.obs.DataStreamFilter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"withSystems"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"objClass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.sensorhub.api.datastore.system.SystemFilter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uniqueIDs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"urn:osh:sensor:simgps:d136b6ea"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"urn:osh:sensor:simweather:0123456879"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Expose only the latest observations from all datastreams:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"includeFilter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"objClass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.sensorhub.api.datastore.obs.ObsFilter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phenomenonTime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"indeterminate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"current"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);