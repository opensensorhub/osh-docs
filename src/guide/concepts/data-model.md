# Data Model

OpenSensorHub (OSH) internals are modeled on a few key concepts defined by the [SensorML](http://www.opengeospatial.org/standards/sensorml), [O&M](http://www.opengeospatial.org/standards/om) and [SWE Common](https://www.ogc.org/standards/swecommon) standards. Below are detailed descriptions of these concepts and a few facts regarding their implementation in OSH.

Below is a diagram showing the main data model components and discussion about each class. We feel that it's important to read through these definitions so you can better understand how data is organized by OSH, and find your way around OSH admin console components.

![Data Model Diagram](./data-model.svg)



## Procedure

**Procedures** are entities that can produce and/or receive data. They can be **physical entities** (e.g. sensors, actuators, devices...) or **logical entities** (e.g. processing components, forecast models...), but in both cases detailed information about procedures (the specsheet) is provided using **SensorML** in OSH.

A procedure's SensorML specsheet provides a thorough description of its **inputs, outputs and parameters**, but also information regarding its identification, classification, contacts, physical and measurement characteristics, etc. Each description also has a certain **validity period** (valid time) which allows for **full historization** of the procedure metadata (e.g. allows to capture and historize information about maintenance events like software updates or recalibrations, physical device deployments and relocations, etc.).

Procedures can also be **parameterized**, either statically (via configuration) or dynamically (via tasking). Both types of parameterization can be self-described in the **SensorML** description.

A procedure can be a **data producer**, in which case it has one or more **outputs** that represent data flows generated by the procedure. These data flows can include **observation results**, but also other things such as **status information**. Each **output** has a unique name (within the procedure) and is associated to a **structure** (a.k.a. schema) and **encoding**. Data records generated by an output are collected into a **datastream** (see below). Since version 2.0, OSH also supports output schema changes over time.

A procedure can also be a **command receiver**, in which case it has one or more **taskable parameters** that represent commands or messages that can be received by the procedure. Similarly to outputs, each taskable parameter (or group of parameters) has a unique name (within the procedure) and is associated to a schema. Commands sent to the procedure and targeted at a specific taskable parameter must abide by its schema or the command is rejected. Commands sent to a procedure are collected into **command streams** (see below).

Procedures can also be grouped into **Procedure Groups**. This concept is used to model sensor networks or geographically distributed sensor arrays.


## Datastream

**Datastreams** are time series of **observations** of the same kind that are generated by a given procedure. By "same kind" we mean that the **result** of all **observations** in a given datastream share the same **structure** (i.e. abide to the same schema) and **encoding**.

In OSH, datastreams are always associated to a **procedure output**. If the schema of an **output** changes, a new **datastream** is created, and in this case, there will be several datastreams associated to the same output, each one with a different validity period.

Datastreams can be seen as the **real-time channel** through which data flows, or as a **collection of historical observations** over time. In fact, in OSH, a datastream represents both and allows for both methods of data consumption: real-time streaming or retrieval of historical data. Depending on how the acquisition pipeline for a particular procedure is configured, data records collected by a datastream can be discarded as soon as dispatched by the **event bus** (real-time datastream) or they can be persisted in a **data store** (historical datastream), or both.


## Command Stream

**Command streams** are the counterparts of datastreams that are used to model procedures' **command & control channels**. They are thus used to augment **procedures** with **tasking capabilities**.

A command stream is essentially a time series of commands associated to a given **procedure taskable parameter**. If the schema of a **taskable parameter** changes, a new **command stream** is created, and in this case, there will be several command streams associated to the same taskable parameter, each one with a different validity period.

Like datastreams, command streams represent both the **real-time channel** through which commands are delivered and the **collection of historical commands** that a procedure has received until the present time (but whose execution can actually be scheduled for a future time).


## Observation

Observations are a specific type of event, where a **procedure** observes, estimates or forecasts the value of one or more properties of a **feature of interest**. Each observation is associated to a **datastream**, that in turn is associated to a specific **output** of the **procedure** that made the observation. Observations also have the following properties:

**Phenomenon Time**

Observations have a phenomenon time that indicates **when the phenomenon being observed (or forecasted) took place**. Note that the phenomenon time is not necessarily in the present: it can be in the past if the procedure observes something that happened long ago (e.g. a geological or astronomical event), or in the future when the procedure produces a forecast (e.g. forecast model).

**Result Time**

Observations also have a result time that indicates the **time at which the procedure generated the observation result**. It can be different from the phenomenon time.

**Result**

In OSH, observation results are always defined by a SWE Common data structure and encoding, both of which are self descriptive and can be retrieved by data consumers before they start consuming data from an OSH node. 

::: tip NOTE
For most types of automated/digital sensors, **phenomenon time and result time can be considered identical** because they are typically very close to each other. In this case, the only difference is due to the sensor latency, often of the order of a few milliseconds, sometimes a few seconds, and is neglected in most applications. Note that the latency can still be documented in the SensorML description of the procedure in case it is needed for more advanced processing.
:::


## Feature of Interest




## Lineage





## Change Management

All types of resources defined above can change in time and one strength of OSH is its ability to maintain a full history of changes