# Requests Examples

## Individual Resources

Individual resources can be retrieved by including their ID directly in the URL path, after the URL of the collection they belong to. This is shown in the examples below:

Top level collections:

  - `http://demo.opensensorhub.org/api/systems/2ecd4713`
  - `http://demo.opensensorhub.org/api/datastreams/56de11a`

One or more JSON properties can be included or excluded specifically with the `select` query parameter. The `!` character is used to exclude fields:

  - `http://demo.opensensorhub.org/api/systems/2ecd4713?select=id,name`
  - `http://demo.opensensorhub.org/api/systems/2ecd4713?select=!validTime`


## Resource Collections

Resource collections are accessed using plural in the URL path.

For example, to retrieve the entire collection of systems, datastreams, observations and features, you would use respectively:

  - `http://demo.opensensorhub.org/api/systems`
  - `http://demo.opensensorhub.org/api/datastreams`
  - `http://demo.opensensorhub.org/api/observations`
  - `http://demo.opensensorhub.org/api/features`


#### Nested Collections

Nested collections can be accessed in the same way, provided the parent resource is identified:

  - `http://demo.opensensorhub.org/api/systems/2ecd4713/members`
  - `http://demo.opensensorhub.org/api/systems/2ecd4713/featuresOfInterest`
  - `http://demo.opensensorhub.org/api/datastreams/56de11a/observations`


#### Filtering Items

Collections can be filtered using query parameters:

  - `http://demo.opensensorhub.org/api/systems?validTime=2019-03-18Z/2020-04-30Z`
  - `http://demo.opensensorhub.org/api/systems?q=temp`


#### Paging

Paging is done by providing a `offset` and `limit` parameters. The `offset` is ommitted for the first fetch, and then included when continuing paging through results. The next `offset` is always provided along with the last page fetched:

  - `http://demo.opensensorhub.org/api/systems?limit=100`
  - `http://demo.opensensorhub.org/api/systems?offset=44def6589c&limit=100`

Note that the `offset` parameter should be considered an opaque identifier, not necessarily the sequential index of the next item. For certain data stores, it could be convenient to implement it as the row number at the start of the page (equivalent to the `skip` parameter in SQL) but it is not a requirement, and is not the most efficient way to implement paging in large datastores.

