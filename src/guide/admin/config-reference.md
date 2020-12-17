# Configuration File

An OSH hub is configured with a single JSON file that includes parameters for all modules loaded on the hub.


### Common Config Parameters

Each module configuration contains a common set of parameters that are described below:

  - **id**: Local ID of the module instance
  - **name**: Name of the module instance
  - **description**: Description of the module instance
  - **objClass**: The class of the configuration object itself (needed for deserialization)
  - **moduleClass**: The class of the module to instantiate
  - **autoStart**: Boolean flag indicating if the module should be automatically started when the hub starts
  
Any other parameter is specific to the module and should be described in the module documentation.
  

### Datastore View Filters

Many modules make use of filtered views to select the data that they are using from the hub. The syntax of the filter configuration is based on the corresponding Java builders as shiwn below:

Example filters:

```
includeFilter": {
  "objClass": "org.sensorhub.api.datastore.procedure.ProcedureFilter",
  "uniqueIDs": [
    "urn:osh:sensor:simgps:d136b6ea",
    "urn:osh:sensor:simweather:0123456879",
    "urn:osh:sensor:v4l-cam:*"
  ]
}
```



