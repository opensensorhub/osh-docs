# Migrating Sensor Drivers from v1

This is a tutorial to help you migrate an existing sensor driver, developed for osh-core 1.x, to osh-core 2.x. There are a few breaking changes in OSH v2 but you will see that the migration process is really easy.

Below are the main steps to migrate sensor drivers (for more details, you can also refer to our new tutorials on creating new sensor drivers):


#### For all sensor drivers:

- Replace references to `SensorDataEvent` by `DataEvent`
- Replace calls to `SensorDataEvent.getSensorID()` by `DataEvent.getProcedureID()`
- Replace calls to `IEventHandler.publishEvent(e)` by `IEventHandler.publish(e)`
- Replace calls to `getParentModule()` by `getParentProducer()` 
- Replace calls to `SensorHub.getInstance()` by `getParentHub()`
- Replace references to `ISensorDataInterface` by `IStreamingDataInterface`
- Replace references to `ISensorControlInterface` by `IStreamingControlInterface`
- Replace calls to `addIdentifier2(term)` by `addIdentifier(term)`
- Pass the name of each output as a constructor argument instead of overriding `getName()`


#### For drivers implementing the `IMultiSourceDataProducer` interface:

As a general introduction, this type of driver does not need to maintain its own Map of entityID to records anymore since accessing latest records by FOI is now handled by the framework. Driver can focus on pushing events out with the proper FOI tagging instead.

- Outputs should not extend `IMultiSourceDataInterface` anymore. Methods `getEntityIDs()`, `getLatestRecords()` and `getLatestRecord(String entityId)` can be safely removed
- The FOI UID now has to be included with any outgoing `DataEvent` by using the appropriate constructor.
- 

