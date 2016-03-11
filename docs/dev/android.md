OpenSensorHub on Android
===

The core modules of OpenSensorHub (OSH) can run natively on Android 5.0 (Lollipop) and later versions. We are also working on a working version for Android 4.4 (KitKat).

Android support is still experimental at this stage although it is already functional to send phone sensor data to a remote OSH node.

The Android specific part is composed of a Service component that wraps the OSH engine and an demo application that can be configured to send data from one or more phone sensors to the SOS server of a remote OSH node. 
 


### Android Build

Android code is not built with Maven for now, but using the Eclipse ADT plugin. In order to build it yourself, follow these instructions:

- First follow the main [Developer's Guide](dev-guide.md) to clone and build projects in [osh-core](https://github.com/opensensorhub/osh-core) and [osh-sensors](https://github.com/opensensorhub/osh-sensors) repositories

- Install the ADT plugin for Eclipse if you haven't already

- Clone the [osh-android](https://github.com/opensensorhub/osh-android) repo and import all projects into your Eclipse Workspace.


From there on you should be able to build and run the android app on your phone using the "Run As > Android Application" context menu on the "sensorhub-android-app" project.

 


