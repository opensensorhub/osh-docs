How To Download
===


### Releases

Binary and Source distributions archives can be downloaded directly from the [Releases Section](https://github.com/opensensorhub/osh-core/releases) of our GitHub account.

You'll soon find there pre-configured distributions for the most common devices such as:

- Android
- Raspberry Pi
- Desktop Linux
- Windows

See the [Install Section](install.md) for instructions on how to set it up on your device.

You can also find individual package from our [Bintray Maven repository](https://bintray.com/sensiasoft/osh).


### Maven

You can also use Maven to include OSH in your own project. 
For instance, if you want to develop a new sensor driver, you can simply add a dependency to the OpenSensorHub Core module in your POM:

```xml
<dependency>
   <groupId>org.sensorhub</groupId>
   <artifactId>sensorhub-core</artifactId>
   <version>1.3.2</version>
   <type>pom</type>
</dependency> 
```

However, OpenSensorHub is not available from Maven Central yet, so you'll also have to include the following repository in your POM:

```xml
<repositories>
   <repository>
      <id>sensiasoft</id>
      <url>https://dl.bintray.com/sensiasoft/osh/</url>
   </repository>
</repositories>
```

