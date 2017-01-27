# Is Touch Device Javascript

**Is Touch Device Javascript** is a fast, micro size (148bytes) and self-initializing touch browser detector. It creates a global boolean variable (``IS_TOUCH_DEVICE``) which detects if browser's touch APIs implemented whether or not the current device has a touchscreen.

## Installing from Bower

```shell
$ bower install is-touch-device --save
```

## Documentation

* Distribution file is in the `dist/` directory.
* Demo: [online touch api detect test][1]

## Usage

```javascript
if ( IS_TOUCH_DEVICE ){
    console.log('Touch APIs have detected...');
}
```

## Running the test

```shell
$ node test/server
```
... and then open a browser and go to `http://localhost:8080`

## How to build

```shell
$ gulp
```

## Building details

* Minified and mangled: `gulp-uglify`
* Rename: `gulp-rename`

## License MIT
Copyright (c) 2017 Hesam Bayat http://pixudio.com

[1]: https://hesambayat.github.io/is-touch-device-javascript "Online demo"
