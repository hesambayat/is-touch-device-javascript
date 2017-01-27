;(function (root, factory) {

  root.IS_TOUCH_DEVICE = factory();

}(this, function () {

  'use strict';

  /**
  * Detect if touch APIs implemented whether or not the current device has a touchscreen.
  * @const IS_TOUCH_DEVICE
  * @url https://hesambayat.github.io/is-touch-device-javascript
  * @git https://github.com/hesambayat/is-touch-device-javascript
  */
  try{
    // works on most browsers
    return 'ontouchstart' in window
    // works on IE10/11 and Surface
    || navigator.maxTouchPoints;
  } catch(e){
    return false;
  }
}));
