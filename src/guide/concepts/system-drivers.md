# Real-time System Drivers

OSH simplifies the development of **sensor and actuator drivers** (referred collectively as _real-time system drivers_) by exposing a clean API for pushing **observation data** and **procedure metadata** (via SensorML) to an OSH management layer called the **Procedure Registry**.


## What is a System Driver?

A **real-time system driver** in OSH is similar to a **device driver** for an operating system. Its purpose is to convert from heterogeneous data feeds or data formats (that can be proprietary, standards, or de-facto standards) to OSH internal data model based on OGC standards.

Thus, system drivers communicate with the rest of OSH components by providing **procedure metadata** as SensorML, **datastream** and **command stream** descriptions as SWE Common, **features of interest** following OGC feature model, and **observation results** as SWE Common encoded records or full-fledge **Observation** events.

They also describe accepted commands using the SWE Common format.






## Procedure Registry

Newly installed sensor and actuator drivers can be configured via the web admin interface.

Once properly configured, the driver can be started, which will trigger its registration with the hub's **Procedure Registry**. At this point, OSH will connect the driver with the rest of the hub's components via the event-bus and persistent storage, and the driver will start producing data (and potentially accepting commands).

If a persistence module was previously configured to manage the new sensor, it will immediately start archiving all data produced by the driver, including observation data, tasking data and all provided procedure (i.e. sensor procedure) and features of interest metadata.

Likewise, if a service module was previously configured to expose data from the new sensor, such data will immediately become available through the service interface.



