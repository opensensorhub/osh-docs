---
title: Style Guide
sidebar_position: 0
---
# OSH Driver Style Guide

> **Audience:** Developers implementing and reviewing OpenSensorHub (OSH) sensor and actuator drivers.
>
> **Status:** Recommended conventions. Verify API signatures against the version of `osh-core` used by your project.

## 1. Purpose and scope

This guide establishes consistent conventions for driver structure, configuration, sensor identity, SWE Common outputs, lifecycle management, connectivity, controls, SensorML, testing, and documentation. It expands the original team style guide with guidance from OSH Core and the published OSH driver-development materials.

An OSH driver should be maintainable, resilient to communication failures, lifecycle-safe, and interoperable through OGC Sensor Web Enablement (SWE) standards. OSH supports sensors and actuators over a range of interfaces, including serial, USB, Ethernet, Wi-Fi, Bluetooth, and HTTP; the driver should separate transport-specific logic from the data and control interfaces exposed to OSH.

**Terminology:** In this document, **must** describes a correctness or safety requirement; **should** describes a recommended project convention; **may** describes an optional approach.

## 2. Standard driver structure

A typical Java driver module is organized as follows:

```text
src/
├── main/
│   ├── java/org/sensorhub/impl/sensor/<name>/
│   │   ├── <Name>Sensor.java
│   │   ├── <Name>Config.java
│   │   ├── <Name>Output.java
│   │   ├── <Name>Control.java
│   │   ├── <Name>Descriptor.java
│   │   └── ...
│   └── resources/META-INF/services/
│       └── org.sensorhub.api.module.IModuleProvider
└── test/java/org/sensorhub/impl/sensor/<name>/
    ├── Test<Name>Sensor.java
    └── Test<Name>Parser.java
```

Not all drivers require all classes: read-only sensors may have no control, and simple drivers may not need separate parsers. Keep hardware communication, binary parsing, SWE schema construction, and module lifecycle responsibilities logically separate.

### Class naming

| Responsibility | Convention | Example |
| --- | --- | --- |
| Sensor module | `<Name>Sensor` | `WeatherSensor` |
| Configuration | `<Name>Config` | `WeatherConfig` |
| Data output | `<Name>Output` or `<Purpose>Output` | `WeatherOutput` |
| Command input | `<Name>Control` or `<Action>Control` | `PTZControl` |
| Module descriptor | `<Name>Descriptor` | `WeatherDescriptor` |
| OSGi activator, if used | `Activator` | `Activator` |

Prefer `Sensor` to `Driver` for new classes when consistent with nearby modules; existing `Driver` classes do not need renaming solely for style.

### Package, field, and stream names

- Open-source driver package: `org.sensorhub.impl.sensor.<name>`.
- Organization-specific packages may use their established namespace (for example, `com.georobotix.impl.sensor.<name>`).
- Package names are lowercase; Java fields and methods use `camelCase`.
- Output names and SWE field names should be descriptive and stable, for example `weatherObservation`, `windSpeed`, and `platformAltitude`, rather than `data`, `output`, or `plat_alt`.

```java
private long lastMessageTime;
private int reconnectAttempts;

public void publishWeatherData() {
    // ...
}
```

## 3. Sensor identity

A physical sensor should have a stable, unique identifier across restarts. When a reliable hardware serial number exists, derive the UID from it and a namespace:

```java
generateUniqueID("urn:osh:sensor:example:weather:", config.serialNumber);
generateXmlID("WEATHER", config.serialNumber);
```

The namespace above is illustrative; use your project's registered or agreed namespace. Do not regenerate an unrelated random UID on every initialization. **Important OSH Core detail:** `AbstractSensorModule` can generate a default UUID-based unique ID and preserve it between restarts through module state; this is a valid fallback when a hardware-derived identity is unavailable. Do not imply that the base class generates a new ID on each initialization.

Do not conflate the physical sensor UID, the OSH module ID, and the SensorML XML ID; they serve different purposes.

## 4. Configuration classes and UI metadata

Use the appropriate OSH configuration base class, commonly `SensorConfig`. Configuration contains user-editable settings, not live sockets, threads, parser instances, or connection state. OSH uses configuration metadata to build its administration UI, so user-facing settings should have clear labels and descriptions.

```java
@DisplayInfo(
    label = "Reconnect Period",
    desc = "Delay in milliseconds between connection attempts"
)
public long reconnectPeriod = 5000;
```

### Common field patterns

**Required text** (use the annotation supported by your OSH version):

```java
@DisplayInfo.Required
@DisplayInfo(label = "Serial Number", desc = "Device serial number")
public String serialNumber;
```

**Remote network address:**

```java
@DisplayInfo(label = "IP Address", desc = "Address of the remote device")
@DisplayInfo.FieldType(DisplayInfo.FieldType.Type.REMOTE_ADDRESS)
@AddressType(NetworkType.IP)
public String remoteAddress;
```

**Password:**

```java
@DisplayInfo(label = "Password", desc = "Authentication password")
@DisplayInfo.FieldType(DisplayInfo.FieldType.Type.PASSWORD)
public String password;
```

**Port range:**

```java
@DisplayInfo(label = "UDP Listen Port", desc = "Local UDP port")
@DisplayInfo.ValueRange(min = 0, max = 65535)
public int udpListenPort = 14550;
```

Other OSH metadata field types include local addresses, module IDs, system UIDs, and tables. Apply them only when appropriate for the value. Prefer descriptive defaults for optional settings and validate any security-sensitive or network-sensitive values before use. **API note:** Some OSH examples use `@Required` while others use `@DisplayInfo.Required`; check the annotations in the project's actual dependency version rather than combining them blindly.

## 5. Configuration validation

Validate required fields and basic constraints during `doInit()` before opening network or hardware resources. Errors should name the invalid field and explain what is expected.

```java
@Override
protected void doInit() throws SensorHubException {
    super.doInit();

    if (config.commSettings == null) {
        throw new SensorHubException("Communication settings must be specified");
    }
    if (config.serialNumber == null || config.serialNumber.isBlank()) {
        throw new SensorHubException("Serial number must be specified");
    }

    // Construct and register outputs and controls here.
}
```

For ports, ranges, paths, timeouts, and credentials, check both syntactic validity and semantic constraints. Avoid logging passwords or access tokens in validation errors.

## 6. SWE Common output schemas

Outputs should extend the appropriate OSH output implementation, often `AbstractSensorOutput<SensorType>`. Every output exposes a SWE Common `DataComponent` describing the structure of its observations. The published OSH driver-development material emphasizes descriptive names, definition URIs, labels, descriptions, and units where applicable.

Illustrative schema construction:

```java
dataRecord = fac.createRecord()
    .name("windObservation")
    .definition(SWEHelper.getPropertyUri("WindObservation"))
    .addField("time", fac.createTime().asSamplingTimeIsoUTC().build())
    .addField("windSpeed", fac.createQuantity()
        .definition(SWEHelper.getPropertyUri("WindSpeed"))
        .label("Wind Speed")
        .description("Measured wind speed at sensor height")
        .uom("m/s")
        .build())
    .build();
```

| Metadata | Guidance |
| --- | --- |
| Name | Required for identifiable record/field structure |
| Definition URI | Use a meaningful, stable semantic definition |
| Label | Provide a human-readable name |
| Description | Explain what is measured or represented |
| Unit of measure | Include for quantities; use appropriate unit syntax |
| Allowed values | Specify when relevant for categorical values |

Do not reuse an ontology definition that misrepresents the data. If a field is unavailable, represent it consistently with the schema and encoding rather than publishing fabricated zero values.

### SWE Common type selection

| Type | Use for | Example |
| --- | --- | --- |
| `Quantity` | Continuous measurement with units | Temperature, wind speed |
| `Count` | Discrete integer | Packet count |
| `Category` | Value from a defined vocabulary | Alarm level |
| `Boolean` | True/false state | Tamper detected |
| `Text` | Free-form text | Status message |
| `Time` | Timestamp | Sampling time |

Use available helpers such as `SWEHelper`, `GeoPosHelper`, or domain-specific helpers before manually recreating standard structures. For example, a geodetic location should generally use the location-vector helper rather than ad hoc latitude, longitude, and altitude fields. Confirm coordinate reference system, axis order, and units.

## 7. Output and control registration

Create and register data outputs and control inputs during initialization so OSH can discover their interfaces before the module starts streaming.

```java
weatherOutput = new WeatherOutput(this);
addOutput(weatherOutput, false);
weatherOutput.doInit();

ptzControl = new PTZControl(this);
addControlInput(ptzControl, false);
```

The `addOutput(output, boolean)` flag distinguishes status outputs from observation outputs in OSH Core; use `true` for status and `false` for regular observations when supported by the target version.

```java
addOutput(weatherOutput, false);
addOutput(deviceStatusOutput, true);
```

Avoid dynamically changing stream names or field definitions after clients have subscribed unless the OSH API and consumers explicitly support the change.

## 8. Module lifecycle

OSH modules have separate initialization, start, and stop phases. Keep their responsibilities distinct.

| Phase | Expected responsibilities |
| --- | --- |
| `doInit()` | Validate config, establish identity, create SensorML metadata, register outputs and controls; avoid beginning data publication |
| `doStart()` | Establish required connections, start reading/subscribing, and begin publishing when ready |
| `doStop()` | Stop polling and subscriptions, release device and network resources, cancel tasks, and leave the driver safe to restart |

**Connection policy:** For a driver that requires a live device to operate, do not report a successful operational start when the device is unreachable. Whether `doStart()` blocks, throws a `SensorHubException`, or transitions through a reconnecting state depends on the intended module behavior and OSH version. Document the policy and ensure module state matches actual readiness.

**Startup observations:** Do not publish device measurements during `doInit()` merely because the SDK emits an initial callback. Register listeners and start accepting data in the appropriate start phase, or gate callbacks until the driver is started.

**Restartability:** A driver should tolerate `init → start → stop → start` without duplicate listeners, orphaned threads, or stale connections.

### Connectivity and `isConnected()`

`isConnected()` should reflect the actual connection or readiness state for the driver, not return `true` unconditionally.

```java
@Override
public boolean isConnected() {
    return deviceConnection != null && deviceConnection.isOpen();
}
```

The example is pseudocode: replace `isOpen()` with the transport's real health check. A socket existing in memory is not necessarily evidence that the remote sensor is responsive. For push-only or connectionless transports, document the chosen readiness signal (for example, recent heartbeat or last valid packet).

## 9. Connection management and recovery

- Use bounded connection attempts or a clearly documented retry policy.
- Respect configured connection timeouts and reconnect intervals.
- Avoid tight retry loops; use backoff where appropriate.
- Report failures through OSH's status/error facilities.
- After a recoverable disconnect, stop stale reads and close failed resources before reconnecting.
- Never run simultaneous reconnect attempts against the same device unless explicitly designed for it.
- Stop all retry activity promptly when the module is stopped.

`AbstractSensorModule` provides helper methods for automatic reconnection; prefer those where suitable instead of creating an unrelated retry framework. See the [AbstractSensorModule source](https://github.com/opensensorhub/osh-core/blob/master/sensorhub-core/src/main/java/org/sensorhub/impl/sensor/AbstractSensorModule.java).

## 10. Thread and callback management

- Give background tasks clear ownership and lifecycle boundaries.
- Use an executor, scheduler, or SDK callback model appropriate to the driver rather than spawning unmanaged threads.
- Make shared running/connected state thread-safe when callbacks can occur concurrently.
- Do not block the module's control thread indefinitely on reads, sleeps, or network operations.
- Unregister listeners and close streams during stop, even after partial startup failure.
- Prevent callbacks from publishing data after stop or after outputs have been disposed.
- Avoid busy waiting; use blocking I/O, callbacks, or scheduled polling.

Where an SDK owns callback threads, do not assume callbacks arrive serially. Ensure parsers and output buffers are safe for the actual concurrency model.

## 11. Logging, status, and errors

Use the appropriate mechanism for the intended audience:

| Mechanism | Purpose |
| --- | --- |
| `getLogger().debug(...)` | Detailed developer diagnostics |
| `getLogger().info(...)` | Significant normal lifecycle events |
| `reportStatus(...)` | Current user-visible module status |
| `reportError(...)` | Module-level failure requiring attention |
| `clearError()` | Clear a previously reported error after verified recovery |

```java
getLogger().debug("Received packet of {} bytes", packetLength);
getLogger().info("Connected to sensor at {}:{}", host, port);
reportStatus("Connecting to sensor...");
reportError("Cannot reach sensor", exception, true);
```

Use parameterized logging, include actionable context, and avoid excessive per-packet `info` logs. Never log secrets, raw authentication headers, or sensitive device payloads without an explicit operational reason. Do not clear an error until the underlying condition has actually recovered.

## 12. Publishing observations

Publish observations only after the module has started and the relevant output is initialized. The published data must match the output's SWE schema and encoding.

- Parse and validate the complete device message before publishing.
- Preserve measurement timestamps supplied by the sensor when trustworthy; otherwise use a clearly defined reception time policy.
- Convert units to match the schema (for example, millimetres to metres) before publication.
- Handle sentinel values, malformed packets, missing measurements, and signed integer fields explicitly.
- Do not publish partially filled records unless optional/missing values are supported by the schema.
- Update the output's latest observation and notify listeners using the API provided by the target OSH version.
- Avoid sharing mutable data blocks between asynchronous publications unless safely copied or synchronized.

**Implementation note:** Exact record-allocation and `publish`/event method names vary across driver implementations; use an existing driver in the same `osh-core` version as the reference rather than copying a generic snippet.

## 13. Control inputs

For sensors with commands or actuators, create a dedicated control interface with a defined SWE command schema.

- Validate command parameters, units, bounds, and enumerated values.
- Reject unsupported commands with meaningful errors.
- Distinguish command acceptance from successful device execution.
- Handle timeouts, acknowledgements, and device-reported failures.
- Serialize mutually exclusive commands when the hardware requires it.
- Avoid allowing command execution after module shutdown.
- Do not silently retry non-idempotent commands without considering duplicate actuation.

For a PTZ camera, for example, a preset command should validate the requested preset and report whether the device accepted or executed the request according to its protocol.

## 14. Module descriptor and discovery

Provide a descriptor implementing the module-provider contract expected by your OSH version and register it using Java's service-provider mechanism:

```text
src/main/resources/META-INF/services/org.sensorhub.api.module.IModuleProvider
```

The service file should contain the fully qualified provider class name, one per line. Ensure the module can be discovered by the OSH runtime after packaging; a correct Java class without the service registration may not appear in the module selection UI.

## 15. SensorML description

`updateSensorDescription()` should describe the physical sensor or system rather than merely repeat application configuration. Include verified information when available:

- Manufacturer, model, and serial number.
- Hardware and firmware versions.
- Stable identifiers and meaningful classifiers.
- Physical characteristics and capabilities.
- Position, orientation, and other relevant metadata.
- Input/output and command interfaces represented consistently with the driver.

OSH Core's `AbstractSensorModule` provides a default SensorML description and can include configured static position and orientation, as well as a feature of interest for static location. Override or extend it only when needed. Call `notifyNewDescription()` when the description changes at runtime and the API requires notifying consumers.

Do not invent metadata values that the device or configuration cannot substantiate.

## 16. Security and input validation

- Treat network payloads, serial frames, and configuration strings as untrusted input.
- Validate message length, framing, checksums where applicable, numeric ranges, and encoding before parsing fields.
- Bound buffers, queue sizes, retries, and payload allocations.
- Use TLS and credential-handling facilities supported by the transport and OSH environment.
- Avoid hard-coded passwords and secrets in source code or sample configurations.
- Minimize privileges and requested Android permissions to those the driver requires.
- Protect against malformed device data crashing the reader thread or entire hub.

## 17. Testing requirements

At minimum, test the following behaviors where applicable:

| Area | Expected tests |
| --- | --- |
| Configuration | Missing required values, invalid ranges, sensible defaults |
| Parsing | Valid frames, truncated frames, corrupt frames, endianness, signed values, sentinel values |
| SWE schema | Field names, definitions, units, encoding and data compatibility |
| Lifecycle | Initialize, start, stop, restart, repeated stop, failed startup |
| Connectivity | Device unavailable at start, disconnect during streaming, reconnect, timeout |
| Publishing | No observations before start or after stop; correct timestamps and units |
| Controls | Valid command, invalid command, timeout, device rejection |
| Cleanup | No duplicate listeners, leaked sockets, lingering tasks or threads |

Prefer deterministic parser and lifecycle unit tests without hardware. Supplement them with integration tests against real supported devices and firmware. Record the hardware and firmware combinations actually verified.

## 18. Driver README requirements

Each driver should include a README that allows another developer or operator to configure and run it without relying on the original author. Include:

1. Purpose and supported device capabilities.
2. **Tested and verified** hardware models and firmware versions.
3. Required OSH version and dependencies.
4. Hardware wiring, pairing, network, or authentication prerequisites.
5. Installation and module discovery instructions.
6. Configuration example with safe placeholder credentials.
7. Outputs, units, and supported commands.
8. Startup and reconnect behavior.
9. Known limitations and troubleshooting steps.
10. How to run tests and reproduce sample data.

## 19. Pull request review checklist

- [ ] Names, packages, and class responsibilities follow established conventions.
- [ ] Module descriptor and service registration are present.
- [ ] Sensor identity is stable and meaningful.
- [ ] User-facing configuration fields have appropriate UI metadata.
- [ ] Invalid configuration fails with actionable messages.
- [ ] Outputs and controls are registered during initialization.
- [ ] SWE definitions, units, and timestamps are correct.
- [ ] No data is published before start or after stop.
- [ ] `isConnected()` reflects actual readiness.
- [ ] Failed connections, reconnection, and cleanup are handled safely.
- [ ] Logging and error reporting are informative without leaking secrets.
- [ ] SensorML metadata accurately represents the sensor.
- [ ] Parser, lifecycle, and failure-path tests are included.
- [ ] README lists verified hardware/firmware and setup instructions.

> **Compatibility caution:** API names and annotation forms may differ between OSH branches. Validate examples against the project's actual dependency versions before treating them as copy-and-paste implementations.
