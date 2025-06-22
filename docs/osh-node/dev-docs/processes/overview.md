---
title:    Overview
sidebar_position: 0
---

## What is a SensorML Process?

:::info
Learn more about the history of SensorML, examples, and the OGC specification at the [SensorML website](http://sensorml.com/index.html).
:::

**SensorML Processes** can take on two forms: **atomic** or **aggregate**.
The corresponding **SensorML** classes for these are `SimpleProcess`es and `AggregateProcess`es.

Within **OpenSensorHub**, atomic processes can be implemented as **executable processes**, whereas aggregate processes are known colloquially as **SensorML Process Chains**.
**SensorML Process Chains** are **aggregate processes**, that are composed of **atomic processes** which are linked together in a **SensorML process description**.

Therefore, **aggregate processes** don't necessarily require a Java implementation, but require an **aggregate process** description using SensorML.

In **OpenSensorHub** nodes, there is a pre-packaged **SensorML Stream Process** module that can be used to execute **aggregate processes**, based on a SensorML description provided in JSON or XML. 

Similar to **Sensor Drivers**, **processing modules** publish their outputs to the OSH **event bus**, which allows data from processes to be persisted in databases, 
served via service modules, pushed to other nodes/services via client modules, or even processed in other **processing modules**.

## Development Thought Process

Before developing a **SensorML Process** or process chain, it's important to keep in mind what you actually want to accomplish.
Processes can be used for a wide variety of applications:
- CV process detecting an object in a video, then sending a command to another sensor/actuator
- simple process using an input and parameters to perform some computation
- complex process composed of many data conversions, computations, and connections

You must think about both the atomic process implementation, and what you want from aggregate processes which use the atomic process.

### Atomic Processes
Inputs, Outputs, and Parameters are the core components of an atomic process. 
When designing a process, think of how these data components will interact with each other and what you want from the process.

- **Inputs** - Data linked to the process from a source module. This source module can be either a sensor driver or another process

- **Outputs** - Outputs from the process itself. These outputs can be linked to the inputs of other processes or even a control stream of a sensor driver.

- **Parameters** - Configuration settings that are defined in the process description. These will be set in the SensorML description itself and used to configure the process module.

### Aggregate Processes
The `AggregateProcess` is an extension of the `SimpleProcess` (atomic process) model.
As noted previously, atomic processes include **inputs**, **outputs**, and **parameters**.

**Aggregate processes** include 