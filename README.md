[![SensioLabsInsight](https://insight.sensiolabs.com/projects/5095cbca-468e-4807-8a4c-3c744dba38a0/mini.png)](https://insight.sensiolabs.com/projects/5095cbca-468e-4807-8a4c-3c744dba38a0)
# Grav Google Maps Plugin

## About

The **Google Maps** plugin provides the Google Maps Javascript API as shortcode.

## Installation

Typically a plugin should be installed via [GPM](http://learn.getgrav.org/advanced/grav-gpm) (Grav Package Manager):

```
$ bin/gpm install google-maps
```

Alternatively it can be installed via the [Admin Plugin](http://learn.getgrav.org/admin-panel/plugins)

## Configuration

There is currently only one main plugin option for **Google Maps** and that is to set a [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key#get-an-api-key).

```
enabled: true
google_api_key:
```

## Quick Example

```
[google-maps width='100%' lat=44.540 lng=-78.546 zoom=13 scrollwheel=true panControl=true iconurl='/absolute/path/to/marker/icon.png']
***My Place***
This is my place
[/google-maps]
```

## Available Parameters

* `width` - map width in px or % | default 600px
* `height` - map height in px or % | default 400px
* `lat` - center of map and marker latitude | default 44.540
* `lng` - center of map and marker longitude | default -78.546
* `zoom` - map zoom | default 8
* `scrollwheel` - if false, disables scrollwheel zooming on the map | default true
* `draggable` - if false, prevents the map from being dragged | default true
* `panControl` - the enabled/disabled state of the pan control. | default true
* `iconurl` - absolute path to a custom marker icon
* `content` - if `content=json`, then the optional content is json | default text

If `content` is not `json`, then the optional wrapped content is the **infowindow** content

If `content=json`, then the wrapped content is interpreted as a json string that defines a series of positions for each marker. The `json` string must be of the form:
```json
[
{"key":"20:53", "lat":  22.42559832, "lng":  114.2123749  },
{"key":"21:09", "lat":  22.41401143, "lng":  114.21253759  },
{"key":"21:20", "lat":  22.42327849, "lng":  114.21259051  },
{"key":"21:42", "lat":  22.44140609, "lng":  114.17303335  }
]
```
* `key` is a string that is placed into the title of the marker (the text appears onMouseOver the marker)
* `lat` is the latitude
* `lng` is the lattitude
