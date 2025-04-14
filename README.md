# sample-senchacmd

A sample ExtJS 7.8 Application using ES8+ and Sencha CMD 7.9

## Requirements

* Sencha CMD 7.9.0.35 via nightlies on https://support.sencha.com/#download

## Background

This application was built via `sencha generate app --ext sample-senchacmd .` and its `app.json` was updated to include a configuration to ensure that the prod output does not use the transpiler according to https://docs.sencha.com/cmd/7.8.0/guides/microloader.html#microloader_-_disable_transpiler

```json
"production": {
    "output": {
        "appCache": {
            "enable": true,
            "path": "cache.appcache"
        }
    },
    "loader": {
        "cache": "${build.timestamp}"
    },
    "cache": {
        "enable": true
    },
    "compressor": {
        "type": "closure",
        "polyfills": "all"
    },
    "language": {
        "js": {
            "output": "ANY"
        }
    }
},
```

## How I am testing

In `app/view/main/MainController.js`, I have some code that uses optional chaining and the null coalescing operator (ES11) as well as some code that uses the new Array method `toSorted()` (ES14).

In the User's page, click on a line in the "Personnel" grid. Choose "Yes" to use an ES11 feature or "No" to use an ES14 feature.

When I run `sencha app build --production --clean --build=classic`, I get a lot of output as it builds the produciton artifact and includes two lines which makes me think transpiling is not completely disabled.

* `[INF] JavaScript input level is NEXT and output level is ANY`
* `[INF] JavaScript input level is NEXT and output level is ES5`
