# Download Add-ons

== OSGi functionality NOT IMPLEMENTED YET ==

Official add-ons are available for download from our [OSGi bundle repository](https://download.opensensorhub.org/addons). These can be installed using the web admin interface or the command line.

### Using the Admin UI



### Using the Command Line

Installing add-ons can be done using the CLI tools provided by the OSGi bundle manager:


```
# First install the bundle
g! install file:/path/to/bundle/bundle.jar
g! lb
START LEVEL 1
   ID|State      |Level|Name
    0|Active     |    0|System Bundle (3.0.0)
    1|Active     |    1|Apache Felix Bundle Repository (1.6.2)
    2|Active     |    1|Apache Felix Gogo Command (0.6.0)
    3|Active     |    1|Apache Felix Gogo Runtime (0.6.0)
    4|Active     |    1|Apache Felix Gogo Shell (0.6.0)
    5|Installed  |    1|Example Bundle (1.0.0)


# And then start it
g! start 5

```

### Third Party Add-ons

Other add-ons are available from third parties. Below is a list of some of the ones we know:
