Adding New Modules
===

So that it can be more easily integrated to OpenSensorHub build process, we advise you to package each OSH module (or set of related modules) as a separate Gradle Project. 

This guide assumes the following prerequisites:

  * You are using Eclipse Neon (or later) with the BuildShip plugin (version 2 or later)
  * You have cloned at least the osh-core and osh-sensors repositories and correctly imported them into Eclipse.

If you haven't done this initial setup, first follow the [Developer's Guide](../dev/dev-guide.md) before you create the new module project with the steps below:


### Get the module template project

  * Download the [Template Project](https://raw.githubusercontent.com/opensensorhub/project-template/master/osh-node-package-with-source/release/sensorhub-template-module.zip)
  * Unzip it inside one of the repository of your choice (e.g. osh-sensors)
  * Change the folder name. By convention we use names such as _sensorhub-{moduletype}-{modulename}_ (e.g. _sensorhub-driver-axis_ for the Axis camera driver)

_Note that this template can only be used within an existing repository because it relies on the parent Gradle project residing at the root of the repository_


### Import into Eclipse

  * Right-click on the repository folder in Eclipse (e.g. osh-sensors) or one of its subfolder or subproject
  * Select _Gradle > Refresh Gradle Project_. This will import the new module into your workspace  

_Note that if you use Eclipse "Working Sets", the project is usually added to the default working set called "Other Projects" so you'll have to move it to the desired working set manually._


### Modify the Gradle Build File

  * Set the _description_ and _details_ fields to something meaningful for your module
  * Also set the OSGi manifest and Maven POM entries so that your package is properly documented
  * Add other dependencies if needed by your module (see [Gradle documentation](https://docs.gradle.org/3.4/userguide/artifact_dependencies_tutorial.html) to learn how to do this)
  * If you added new dependencies, select _Gradle > Refresh Gradle Project_ from the project context menu to update Eclipse configuration with the new depended-on libraries.


You're all set!! You can now start writing the code for your module by building to one of [OSH Core APIs](../dev/core-apis).


