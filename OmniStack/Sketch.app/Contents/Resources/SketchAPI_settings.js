module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("util")},function(e,t,n){var r=n(2);e.exports=r,e.exports.default=r,e.exports.version={sketch:MSApplicationMetadata.metadata().appVersion,api:"2.0.0"}},function(e,t,n){"use strict";n.r(t);var r=n(0);function o(e){var t=e;if(e&&e.sketchObject){if("Document"!==e.type)throw new Error("Expected a Document, got a ".concat(e.type));t=e._getMSDocumentData()}else e&&e.documentData&&(t=e.documentData());return t}function u(){return __command.pluginBundle()?__command.pluginBundle().identifier():"com.sketchapp.temporary-script"}function i(e){var t=NSUserDefaults.standardUserDefaults().objectForKey_(e);if(void 0!==t&&"undefined"!==t&&null!==t)return JSON.parse(t)}function c(e,t){var n=NSUserDefaults.standardUserDefaults(),o=JSON.stringify(t,function(e,t){return r.toJSObject(t)});o?n.setObject_forKey_(o,e):n.removeObjectForKey(e)}n.d(t,"globalSettingForKey",function(){return i}),n.d(t,"setGlobalSettingForKey",function(){return c}),n.d(t,"settingForKey",function(){return f}),n.d(t,"setSettingForKey",function(){return d}),n.d(t,"layerSettingForKey",function(){return s}),n.d(t,"setLayerSettingForKey",function(){return y}),n.d(t,"documentSettingForKey",function(){return p}),n.d(t,"setDocumentSettingForKey",function(){return v}),n.d(t,"sessionVariable",function(){return m}),n.d(t,"setSessionVariable",function(){return S});var a="plugin.sketch.";function f(e){var t=NSUserDefaults.alloc().initWithSuiteName("".concat(a).concat(u())).objectForKey(e);if(void 0!==t&&"undefined"!=t&&null!==t)return JSON.parse(t)}function d(e,t){var n=NSUserDefaults.alloc().initWithSuiteName("".concat(a).concat(u())),o=JSON.stringify(t,function(e,t){return r.toJSObject(t)});o?n.setObject_forKey_(o,e):n.removeObjectForKey(e)}function l(e){return e._isWrappedObject?"DataOverride"===e.type?e.sketchObject.availableOverride().overrideValue():"Override"===e.type?e.sketchObject.overrideValue():e.sketchObject:e}function s(e,t){var n=__command.valueForKey_onLayer(t,l(e));if(void 0!==n&&"undefined"!=n&&null!==n)return JSON.parse(n)}function y(e,t,n){var o=JSON.stringify(n,function(e,t){return r.toJSObject(t)});o||(o=null),__command.setValue_forKey_onLayer(o,t,l(e))}function p(e,t){var n=o(e),r=__command.valueForKey_onDocument(t,n);if(void 0!==r&&"undefined"!=r&&null!==r)return JSON.parse(r)}function v(e,t,n){var u=o(e),i=JSON.stringify(n,function(e,t){return r.toJSObject(t)});i||(i=null),__command.setValue_forKey_onDocument(i,t,u)}function m(e){var t=NSThread.mainThread().threadDictionary().objectForKey("".concat(a).concat(u(),".").concat(e));if(void 0!==t&&"undefined"!=t&&null!==t)return JSON.parse(t)}function S(e,t){var n=NSThread.mainThread().threadDictionary(),o=JSON.stringify(t,function(e,t){return r.toJSObject(t)});o?n.setObject_forKey_(o,"".concat(a).concat(u(),".").concat(e)):n.removeObjectForKey("".concat(a).concat(u(),".").concat(e))}}]);