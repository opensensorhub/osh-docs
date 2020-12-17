# Sensor Observation Service (SOS)

## Introduction

The Sensor Observation Service (SOS) is a standard OGC web service allowing retrieval of observations from OSH data stores and/or real-time event bus. OSH SOS implementation supports XML and JSON response formats.

The following operations are supported:

  - **GetCapabilities** (XML only)
  - **DescribeSensor** (SensorML encoded in XML or JSON)
  - **GetFeatureOfInterest** (XML or GeoJSON)
  - **GetObservation** (O&M encoded in XML or JSON)
  - **GetResult** (XML, CSV, JSON or binary)
  
The following transactional operations are also supported:

  - **InsertSensor** (SensorML as XML only)
  - **InsertResultTemplate** (XML only)
  - **InsertResult** (XML, CSV, JSON or binary)
  
Websocket requests are also supported for observation data retrieval with **GetResult** and insertion with **InsertResult**.


## Request Examples
