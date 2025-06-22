---
title: Building OSGi Node
sidebar_position: 1
---

As noted previously, OSGi-enabled OSH nodes enable dynamic module installation. 
When an OSGi-enabled OSH node is built, it can be configured with several **bundle repositories** from which additional modules can be installed.

## OSH Core OSGi Build
Within `osh-core`, the included Gradle build script will build an OSGi-enabled OSH node, 
that links to an example/test GeoRobotix bundle repository.

In order to build this node, we can move to a local `osh-core` repository and run the build script.

:::info
`osh-node-dev-template` includes `osh-core` as a submodule under `/include/osh-core`.
Or, you may directly clone `osh-core` somewhere else using:

```git
git clone https://github.com/opensensorhub/osh-core.git
```
:::

Building `osh-core`:

```shell title="/osh-core"
./gradlew build -x test
```

This results in the build of a normal OSH node, and an OSGi-enabled OSH node.

We can navigate to the `osh-core/build/distributions` directory to see these two nodes.

```shell title="/osh-core"
cd build/distributions/
ls
```

This will show us `osh-core-2.0-beta2.zip` and `osh-core-osgi-2.0-beta2.zip`.

We can unzip `osh-core-osgi-2.0-beta2.zip` and inspect the `config.json` and launch scripts.

```shell title="/osh-core/build/distributions"
unzip osh-core-osgi-2.0-beta2.zip
cd osh-core-osgi-2.0-beta2/
```

We can see from the OSGi node's `config.json`, that it comes with an example/test bundle repository.

```json title="/osh-core/build/distributions/osh-core-osgi-2.0-beta2/config.json"
[
  {
    "objClass": "org.sensorhub.impl.service.HttpServerConfig",
    "id": "6ca9c8a8-9768-4b60-9554-a8d277bf6b3f",
    "name": "HTTP Server",
    "moduleClass": "org.sensorhub.impl.service.HttpServer",
    "httpPort": 8181,
    "servletsRootUrl": "/sensorhub",
    "staticDocsRootDir": "web",
    "autoStart": true
  },
  {
    "objClass": "org.sensorhub.ui.AdminUIConfig",
    "id": "7219eb9f-b591-4c2c-9ad9-4b63a29a1c4a",
    "moduleClass": "org.sensorhub.ui.AdminUIModule",
    // highlight-start
    "bundleRepoUrls": [
      "https://cloud.georobotix.io/addons/index.xml"
    ],
    // highlight-end
    "autoStart": true
  }
]
```

We can also see that the launch scripts are different from normal OSH nodes' launch scripts, 
as they use `SensorHubOsgi` as an entrypoint, instead of `SensorHub`.

```shell title="/osh-core/build/distributions/osh-core-osgi-2.0-beta2/launch.sh"
#!/bin/bash
java 
-Xmx256m 
-Dlogback.configurationFile=./logback.xml 
-cp "lib/*" 
// highlight-next-line
org.sensorhub.impl.osgi.SensorHubOsgi config.json
```