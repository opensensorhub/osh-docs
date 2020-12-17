(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{408:function(e,t,o){"use strict";o.r(t);var s=o(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"requests-examples"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requests-examples"}},[e._v("#")]),e._v(" Requests Examples")]),e._v(" "),o("h2",{attrs:{id:"individual-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#individual-resources"}},[e._v("#")]),e._v(" Individual Resources")]),e._v(" "),o("p",[e._v("Individual resources can be retrieved by including their ID directly in the URL path, after the URL of the collection they belong to. This is shown in the examples below:")]),e._v(" "),o("p",[e._v("Top level collections:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/procedures/2ecd4713")])]),e._v(" "),o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/datastreams/56de11a")])])]),e._v(" "),o("p",[e._v("One or more JSON properties can be included or excluded specifically with the "),o("code",[e._v("select")]),e._v(" query parameter. The "),o("code",[e._v("!")]),e._v(" character is used to exclude fields:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/procedures/2ecd4713?select=id,name")])]),e._v(" "),o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/procedures/2ecd4713?select=!validTime")])])]),e._v(" "),o("h2",{attrs:{id:"resource-collections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resource-collections"}},[e._v("#")]),e._v(" Resource Collections")]),e._v(" "),o("p",[e._v("Resource collections are accessed using plural in the URL path.")]),e._v(" "),o("p",[e._v("For example, to retrieve the entire collection of procedures, datastreams, observations and features, you would use respectively:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/procedures")])]),e._v(" "),o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/datastreams")])]),e._v(" "),o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/observations")])]),e._v(" "),o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/features")])])]),e._v(" "),o("h4",{attrs:{id:"nested-collections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nested-collections"}},[e._v("#")]),e._v(" Nested Collections")]),e._v(" "),o("p",[e._v("Nested collections can be accessed in the same way, provided the parent resource is identified:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/procedures/2ecd4713/members")])]),e._v(" "),o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/procedures/2ecd4713/featuresOfInterest")])]),e._v(" "),o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/datastreams/56de11a/observations")])])]),e._v(" "),o("h4",{attrs:{id:"filtering-items"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#filtering-items"}},[e._v("#")]),e._v(" Filtering Items")]),e._v(" "),o("p",[e._v("Collections can be filtered using query parameters:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/procedures?validTime=2019-03-18Z/2020-04-30Z")])]),e._v(" "),o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/procedures?q=temp")])])]),e._v(" "),o("h4",{attrs:{id:"paging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#paging"}},[e._v("#")]),e._v(" Paging")]),e._v(" "),o("p",[e._v("Paging is done by providing a "),o("code",[e._v("pageId")]),e._v(" and "),o("code",[e._v("limit")]),e._v(" parameters. The "),o("code",[e._v("pageId")]),e._v(" is ommitted for the first fetch, and then included when continuing paging through results. The next "),o("code",[e._v("pageId")]),e._v(" is always provided along with the last page fetched:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/procedures?limit=100")])]),e._v(" "),o("li",[o("code",[e._v("http://demo.opensensorhub.org/api/procedures?pageId=44def6589c&limit=100")])])]),e._v(" "),o("p",[e._v("Note that the "),o("code",[e._v("pageId")]),e._v(" is an opaque identifier. For certain data stores, it could be convenient to implement it as the row number at the start of the page (equivalent to the "),o("code",[e._v("skip")]),e._v(" parameter in SQL) but it is not a requirement, and even somewhat discouraged as it is not the most efficient way to implement paging.")])])}),[],!1,null,null,null);t.default=r.exports}}]);