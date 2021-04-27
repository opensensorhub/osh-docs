# Migrating Sensor Drivers from v1

This is a tutorial to help you migrate an existing sensor driver, developed for **osh-core 1.x** to **osh-core 2.x**. There are a few breaking changes in OSH v2 but you will see that the migration process is really easy.

Below are the main steps to migrate sensor drivers (for more details, you can also refer to our new tutorials on creating new sensor drivers):


### For all sensor drivers:

**General**
- Replace calls to `getParentModule()` by `getParentProducer()` 
- Replace calls to `SensorHub.getInstance()` by `getParentHub()`
- Replace calls to `SensorDataEvent.getSensorID()` by `DataEvent.getProcedureID()`
- Implement the protected `doInit() / doStart() / doStop()` methods instead of the public `init() / start() / stop()` methods

**Outputs**
- Replace references to `ISensorDataInterface` by `IStreamingDataInterface`
- Pass the name of each output as a constructor argument instead of overriding `getName()`
- Replace references to `SensorDataEvent` by `DataEvent`
- Replace calls to `IEventHandler.publishEvent(e)` by `IEventHandler.publish(e)`
- Replace calls to `getParentModule()` by `getParentProducer()`
- Create output structure using new SWE builders instead of deprecated factory methods

**Control Inputs**
- Replace references to `ISensorControlInterface` by `IStreamingControlInterface`
- Pass the name of each cotnrol input as a constructor argument instead of overriding `getName()`
- Create command structure using new SWE builders instead of deprecated factory methods

**Generation of SensorML description**
- Replace calls to `addIdentifier2(term)` by `addIdentifier(term)`

**OSGi Metadata**
- Make sure an `Activator` class exists and it is properly referenced from the `build.gradle` file with a `attributes('Bundle-Activator': 'org.sensorhub.impl.sensor.YOUR_PACKAGE')` instruction in the `osgi` section



### For drivers implementing the `IMultiSourceDataProducer` interface:

This type of driver does not need to maintain its own Map of entity IDs anymore since accessing latest records or other information by FOI is now handled by the framework. Driver can focus on pushing events out with the proper FOI tagging instead.

**General**

- Remove all uses of `IMultiSourceDataProducer`.
- Remove all methods from old `IMultiSourceDataProducer` interface:
  - `getCurrentFeatureOfInterest()`
  - `getCurrentDescription(String entityID)`
  - `getLastDescriptionUpdate(String entityID)`
  - `getCurrentFeatureOfInterest(String entityID)`
  - `getFeaturesOfInterest()`
  - `getFeaturesOfInterestIDs()`
  - `getEntitiesWithFoi(String foiID)`
- Ensure that the `foiMap` provided by the super class `AbstractSensorModule` is properly populated (also see guidelines regarding driver lifecycle below)

**Outputs**
- Remove methods `getLatestRecord(entityID)`, `getLatestRecords()` from all outputs implementing `IMultiSourceDataInterface` (no need to maintain the `latestRecords` map anymore)
- For observations to be properly attached to a feature of interest, the FOI UID must now be included with any outgoing `DataEvent` by using the appropriate constructor.



### Sensor Driver Lifecycle

It is also important that the following rules are followed so that drivers can be initialized and registered/unregistered properly with the new OSH procedure registry:

- Generate output/command structure in `doInit()` (may require an initial connection to sensor)
- Don't start any thread or timer to push measurements until `doStart()` is called
- Close all connections and stop all threads/timers in `doStop()`
- Always register FOIs or procedure group members before any data related to them is pushed out. There are two main cases:
  - If FOIs and procedure members are known ahead of time, just create them in `doInit()` and make sure they are returned by `getCurrentFeaturesOfInterest()` and `getMembers()` respectively and they will be registered with the framework on startup
  - If FOIs and procedure members are not known in advance or can be added/removed/updated dynamically after startup, proper events must be generated for the framework to take changes into account and reflect them in the federated database (e.g. `FoiEvent`, `ProcedureAddedEvent`, `ProcedureRemovedEvent`, etc.).

