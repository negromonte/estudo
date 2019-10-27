module.exports=function e(t,n,r){function a(i,s){if(!n[i]){var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){var n=t[i][1][e];return a(n||e)},l,l.exports,e,t,n,r)}return n[i].exports}return a(1)}({1:[function(e,n){"use strict";var t=e("./Application.js");n.exports=function(e){return function(){return new t.Application(e)}}},{"./Application.js":2}],2:[function(e,t,n){"use strict";n.Application=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./WrappedObject.js"),o=e("./Document.js"),i=e("./Rectangle.js"),s=e("./Group.js"),u=e("./Text.js"),c=e("./Image.js"),l=e("./Shape.js"),f=e("./Artboard.js"),p=e("./Page.js"),h=e("./Tester.js"),y=e("./Layer.js"),b=e("./Selection.js"),d=e("./Style.js"),v=e("./DataSupplier.js");var g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._metadata=MSApplicationMetadata.metadata(),n._metadata.app.startsWith("com.bohemiancoding.sketch3")&&(n._appController=AppController.sharedInstance()),n.Application=t,n.Rectangle=i.Rectangle,n.Document=o.Document,n.Group=s.Group,n.Text=u.Text,n.Image=c.Image,n.Shape=l.Shape,n.Artboard=f.Artboard,n.Page=p.Page,n.Selection=b.Selection,n.Style=d.Style,n.DataSupplier=v.DataSupplier,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.WrappedObject),r(t,[{key:"settingForKey",value:function(e){return NSUserDefaults.standardUserDefaults().objectForKey_(e)}},{key:"setSettingForKey",value:function(e,t){NSUserDefaults.standardUserDefaults().setObject_forKey_(t,e)}},{key:"resourceNamed",value:function(e){return this._object.plugin.urlForResourceNamed_(e)}},{key:"getStringFromUser",value:function(e,t){return MSModalInputSheet.alloc().init().runPanelWithNibName_ofType_initialString_label_("MSModalInputSheet",0,t,e)}},{key:"getSelectionFromUser",value:function(e,t,n){n=n||0;var r=NSComboBox.alloc().initWithFrame(NSMakeRect(0,0,200,25));r.addItemsWithObjectValues(t),r.selectItemAtIndex(n);var a=NSAlert.alloc().init();return a.setMessageText(e),a.addButtonWithTitle("OK"),a.addButtonWithTitle("Cancel"),a.setAccessoryView(r),[a.runModal(),r.indexOfSelectedItem()]}},{key:"log",value:function(e){print(e)}},{key:"assert",value:function(e){if(!e)throw"Assert failed!"}},{key:"newDocument",value:function(){var e=NSDocumentController.sharedDocumentController();return e.newDocument_(this),new o.Document(e.currentDocument(),this)}},{key:"dataManager",value:function(){return new v.DataSupplier(this.appController.dataSupplierManager(),this)}},{key:"message",value:function(e){this._object.document.showMessage(e)}},{key:"alert",value:function(e,t){NSApplication.sharedApplication().displayDialog_withTitle(t,e)}},{key:"wrapperMappings",value:function(){return{MSLayerGroup:s.Group,MSPage:p.Page,MSArtboardGroup:f.Artboard,MSShapeGroup:l.Shape,MSBitmapLayer:c.Image,MSTextLayer:u.Text}}},{key:"wrapObject",value:function(e,t){var n=this.wrapperMappings()[e.class()];return n||(print("no mapped wrapper for "+e.class()),n=a.WrappedObject),new n(e,t)}},{key:"runUnitTests",value:function(){var e={suites:{Application:t.tests(),Artboard:f.Artboard.tests(),Document:o.Document.tests(),Group:s.Group.tests(),Image:c.Image.tests(),Layer:y.Layer.tests(),Page:p.Page.tests(),Rectangle:i.Rectangle.tests(),Selection:b.Selection.tests(),Shape:l.Shape.tests(),Text:u.Text.tests(),WrappedObject:a.WrappedObject.tests(),Style:d.Style.tests()}};return new h.Tester(this).runUnitTests(e)}},{key:"api_version",get:function(){return"1.1"}},{key:"context",get:function(){return this._object}},{key:"version",get:function(){return this._metadata.appVersion}},{key:"build",get:function(){return this._metadata.build}},{key:"full_version",get:function(){return this.version+" ("+this.build+")"}},{key:"selectedDocument",get:function(){return new o.Document(this._object.document,this)}},{key:"appController",get:function(){return this._appController}}],[{key:"tests",value:function(){return{tests:{testAPIVersion:function(e){e.assertEqual(e.application.api_version,"1.1")},testApplicationVersion:function(e){MSApplicationMetadata.metadata().app.startsWith("com.bohemiancoding.sketch3")||e.assertEqual(e.application.version,"1.0")},testWrapObject:function(e){var t=[MSLayerGroup,MSPage,MSArtboardGroup,MSShapeGroup,MSBitmapLayer,MSTextLayer],n=e.application.wrapperMappings();for(var r in t){var a=t[r],o=NSMakeRect(0,0,100,100),i=a.alloc().initWithFrame(o),s={},u=e.application.wrapObject(i,s);e.assertEqual(u._object,i),e.assertEqual(u._document,s),e.assertEqual(u.class,n[a].class)}}}}}}]),t}();n.Application=g},{"./Artboard.js":3,"./DataSupplier.js":4,"./Document.js":5,"./Group.js":6,"./Image.js":7,"./Layer.js":8,"./Page.js":9,"./Rectangle.js":10,"./Selection.js":11,"./Shape.js":12,"./Style.js":13,"./Tester.js":14,"./Text.js":15,"./WrappedObject.js":16}],3:[function(e,t,n){"use strict";n.Artboard=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./Group.js");n.Artboard=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Group),r(t,[{key:"isArtboard",get:function(){return!0}}],[{key:"tests",value:function(){return{tests:{testIsArtboard:function(e){var t=e.newTestDocument().selectedPage,n=t.newArtboard({name:"Test"});e.assertTrue(n.isArtboard),e.assertFalse(t.isArtboard)}}}}}]),t}()},{"./Group.js":6}],4:[function(e,t,n){"use strict";n.DataSupplier=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./WrappedObject.js");n.DataSupplier=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e||(e=AppController.sharedIntance.dataSupplierManager());var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._application=n,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.WrappedObject),r(t,[{key:"registerStaticSupplier",value:function(e,t,n){var r=this._application.context.plugin.identifier(),a=this._application.context.command.identifier();this._object.registerStaticData_withName_dataType_pluginIdentifier_commandIdentifier_(n,t,e,r,a)}},{key:"registerDynamicSupplier",value:function(e,t,n){var r=this._application.context.plugin.identifier(),a=this._application.context.command.identifier();this._object.registerDynamicSupplier_withName_dataType_pluginIdentifier_commandIdentifier_(n,t,e,r,a)}},{key:"deregisterDataSuppliers",value:function(){var e=this._application.context.plugin.identifier();this._object.deregisterDataSuppliersForPluginWithIdentifier_(e)}},{key:"supplyDataForKey",value:function(e,t){this._object.supplyData_forKey_(e,t)}}]),t}()},{"./WrappedObject.js":16}],5:[function(e,t,n){"use strict";n.Document=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./WrappedObject.js"),o=e("./Layer.js"),i=e("./Page.js"),s=e("./Selection.js");n.Document=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._application=n,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.WrappedObject),r(t,[{key:"wrapObject",value:function(e){return this._application.wrapObject(e,this)}},{key:"layerWithID",value:function(e){var t=this._object.documentData().layerWithID_(e);if(t)return new o.Layer(t,this)}},{key:"layerNamed",value:function(e){var t=this._object.documentData().layerWithID_(e);if(t)return new o.Layer(t,this)}},{key:"iterateWithNativeLayers",value:function(e,t,n){var r=n;"string"==typeof t||t instanceof String?r=function(e){e[t]&&n(e)}:t&&(r=function(e){t(e)&&n(e)});for(var a,o=e.objectEnumerator();a=o.nextObject();){r(this.wrapObject(a))}}},{key:"centerOnLayer",value:function(e){this._object.contentDrawView().centerRect_(e._object.rect())}},{key:"selectedLayers",get:function(){return new s.Selection(this.selectedPage)}},{key:"selectedPage",get:function(){return new i.Page(this._object.currentPage(),this)}},{key:"pages",get:function(){for(var e,t=[],n=this._object.pages().objectEnumerator();e=n.nextObject();)t.push(new i.Page(e,this));return t}}],[{key:"tests",value:function(){return{tests:{testPages:function(e){var t=e.newTestDocument(),n=t.pages;e.assertEqual(n.length,1),e.assertEqual(n[0].sketchObject,t.selectedPage.sketchObject)},testSelectedLayers:function(e){var t=e.newTestDocument(),n=t.selectedLayers;e.assert(n.isEmpty,"should have an empty selection"),t.selectedPage.newGroup({name:"Test"}).select(),e.assert(!n.isEmpty,"should no longer have an empty selection")},testLayerWithID:function(e){var t=e.newTestDocument(),n=t.selectedPage.newGroup({name:"Test"}),r=n.id,a=t.layerWithID(r);e.assertEqual(n.sketchObject,a.sketchObject)}}}}}]),t}()},{"./Layer.js":8,"./Page.js":9,"./Selection.js":11,"./WrappedObject.js":16}],6:[function(e,t,n){"use strict";n.Group=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./Layer.js"),o=e("./Rectangle.js"),i=e("./Style.js");n.Group=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Layer),r(t,[{key:"iterate",value:function(e){var t=this._object.layers();this._document.iterateWithNativeLayers(t,null,e)}},{key:"iterateWithFilter",value:function(e,t){var n=this._object.layers();this._document.iterateWithNativeLayers(n,e,t)}},{key:"pageRectToLocalRect",value:function(e){var t=this._object.convertPoint_fromLayer_(NSMakePoint(e.x,e.y),null);return new o.Rectangle(t.x,t.y,e.width,e.height)}},{key:"adjustToFit",value:function(){this._object.fixGeometryWithOptions_(0)}},{key:"_addWrappedLayerWithProperties",value:function(e,t,n){if(e){this._object.addLayers_(NSArray.arrayWithObject_(e));n=this._document.wrapObject(e);for(var r in t)n[r]=t[r];return n}}},{key:"_frameForLayerWithProperties",value:function(e){var t=e.frame;return t?delete e.frame:t=new o.Rectangle(0,0,100,100),t}},{key:"_styleForLayerWithProperties",value:function(e){var t=e.style;t||(t=new i.Style);var n=e.fills;n&&(delete e.fills,t.fills=n);var r=e.borders;return r&&(delete e.borders,t.borders=r),t}},{key:"newShape",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._frameForLayerWithProperties(e),n=MSShapeGroup.shapeWithRect_(t.asCGRect());return e.style=this._styleForLayerWithProperties(e),this._addWrappedLayerWithProperties(n,e,"Shape")}},{key:"newText",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._frameForLayerWithProperties(e),n=MSTextLayer.alloc().initWithFrame_(t.asCGRect());return n.adjustFrameToFit(),this._addWrappedLayerWithProperties(n,e,"Text")}},{key:"newGroup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._frameForLayerWithProperties(e),n=MSLayerGroup.alloc().initWithFrame_(t.asCGRect());return this._addWrappedLayerWithProperties(n,e,"Group")}},{key:"newImage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._frameForLayerWithProperties(e),n=MSBitmapLayer.alloc().initWithFrame_(t.asCGRect());return this._addWrappedLayerWithProperties(n,e,"Image")}},{key:"isGroup",get:function(){return!0}}],[{key:"tests",value:function(){return{tests:{testIterate:function(e){var t=e.newTestDocument().selectedPage,n=t.newGroup(),r=(t.newText(),0),a=0;t.iterate(function(e){r++,e.sketchObject==n.sketchObject&&a++}),e.assertEqual(r,2),e.assertEqual(a,1)},testIterateWithFilter:function(e){var t=e.newTestDocument().selectedPage,n=t.newGroup(),r=(t.newText(),0),a=0;t.iterateWithFilter("isGroup",function(e){r++,e.sketchObject==n.sketchObject&&a++}),e.assertEqual(r,1),e.assertEqual(a,1)},testPageToLocalRect:function(e){var t=e.newTestDocument().selectedPage.newGroup({frame:new o.Rectangle(100,100,100,100)}).pageRectToLocalRect(new o.Rectangle(125,75,50,200));e.assertEqual(t,new o.Rectangle(25,-25,50,200))},testAdjustToFit:function(e){var t=e.newTestDocument().selectedPage.newGroup({frame:new o.Rectangle(100,100,100,100)});t.newShape({frame:new o.Rectangle(50,50,50,50)});t.adjustToFit();var n=t.frame;e.assertEqual(n,new o.Rectangle(150,150,50,50))},testIsGroup:function(e){var t=e.newTestDocument().selectedPage,n=t.newGroup(),r=t.newText(),a=t.newArtboard();e.assertTrue(n.isGroup),e.assertFalse(r.isGroup),e.assertTrue(t.isGroup),e.assertTrue(a.isGroup)}}}}}]),t}()},{"./Layer.js":8,"./Rectangle.js":10,"./Style.js":13}],7:[function(e,t,n){"use strict";n.Image=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./Layer.js");n.Image=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Layer),r(t,[{key:"isImage",get:function(){return!0}},{key:"imageURL",set:function(e){var t=NSImage.alloc().initWithContentsOfURL_(e),n=MSImageData.alloc().initWithImage(t);this._object.setImage_(n)}}],[{key:"tests",value:function(){return{tests:{testIsImage:function(e){var t=e.newTestDocument().selectedPage,n=t.newImage();e.assertTrue(n.isImage),e.assertFalse(t.isImage)}}}}}]),t}()},{"./Layer.js":8}],8:[function(e,t,n){"use strict";n.Layer=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./WrappedObject.js"),o=e("./Rectangle.js");n.Layer=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._document=n,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.WrappedObject),r(t,[{key:"duplicate",value:function(){var e=this.sketchObject,t=e.copy();return e.parentGroup().insertLayers_afterLayer_([t],e),this._document.wrapObject(t)}},{key:"remove",value:function(){var e=this._object.parentGroup();e&&e.removeLayer_(this._object)}},{key:"select",value:function(){this._object.select_byExtendingSelection(!0,!1)}},{key:"deselect",value:function(){this._object.select_byExtendingSelection(!1,!0)}},{key:"addToSelection",value:function(){this._object.select_byExtendingSelection(!0,!0)}},{key:"moveToFront",value:function(){MSLayerMovement.moveToFront([this._object])}},{key:"moveForward",value:function(){MSLayerMovement.moveForward([this._object])}},{key:"moveToBack",value:function(){MSLayerMovement.moveToBack([this._object])}},{key:"moveBackward",value:function(){MSLayerMovement.moveBackward([this._object])}},{key:"localRectToPageRect",value:function(e){e=this.sketchObject.convertRect_toLayer(e.asCGRect, null);return new o.Rectangle(e.x,e.y,e.width,e.height)}},{key:"localRectToParentRect",value:function(e){var t=this.frame;return new o.Rectangle(e.x+t.x,e.y+t.y,e.width,e.height)}},{key:"exportOptionsMergedWithDefaults",value:function(e){var t={compact:!1,"include-namespaces":!1,compression:1,"group-contents-only":!1,overwriting:!1,progressive:!1,"save-for-web":!1,"use-id-for-name":!1,trimmed:!1,output:"~/Documents/Sketch Exports"};for(var n in e)t[n]=e[n];return t}},{key:"export",value:function(e){var t=this.exportOptionsMergedWithDefaults(e);MSSelfContainedHighLevelExporter.alloc().initWithOptions(t).exportLayers([this.sketchObject])}},{key:"name",get:function(){return this._object.name()},set:function(e){this._object.setName_(e)}},{key:"frame",get:function(){var e=this._object.frame();return new o.Rectangle(e.x(),e.y(),e.width(),e.height())},set:function(e){this._object.frame().setRect_(NSMakeRect(e.x,e.y,e.width,e.height))}},{key:"isPage",get:function(){return!1}},{key:"isArtboard",get:function(){return!1}},{key:"isGroup",get:function(){return!1}},{key:"isText",get:function(){return!1}},{key:"isShape",get:function(){return!1}},{key:"isImage",get:function(){return!1}},{key:"container",get:function(){return this._document.wrapObject(this._object.parentGroup())}},{key:"index",get:function(){var e=this.sketchObject;return e.parentGroup().indexOfLayer_(e)}}],[{key:"tests",value:function(){return{tests:{testName:function(e){var t=e.newTestDocument().selectedPage;t.name="This is a page",e.assertEqual(t.name,"This is a page");var n=t.newGroup({name:"blah"});e.assertEqual(n.name,"blah");var r=t.newGroup();e.assertEqual(r.name,"Group")},testFrame:function(e){var t=e.newTestDocument().selectedPage,n=new o.Rectangle(10,10,20,20),r=t.newGroup({frame:n});e.assertEqual(r.frame,n)},testDuplicate:function(e){var t=e.newTestDocument().selectedPage,n=t.newGroup();e.assertEqual(t.sketchObject.layers().count(),1);n.duplicate();e.assertEqual(t.sketchObject.layers().count(),2)},testRemove:function(e){var t=e.newTestDocument().selectedPage,n=t.newGroup();e.assertEqual(t.sketchObject.layers().count(),1),n.remove(),e.assertEqual(t.sketchObject.layers().count(),0)},testSelection:function(e){var t=e.newTestDocument().selectedPage,n=t.newGroup();e.assertTrue(t.selectedLayers.isEmpty),n.select(),e.assertFalse(t.selectedLayers.isEmpty),n.deselect(),e.assertTrue(t.selectedLayers.isEmpty);var r=t.newGroup();n.select(),r.select(),e.assertEqual(t.selectedLayers.length,1),n.addToSelection(),e.assertEqual(t.selectedLayers.length,2)},testContainer:function(e){var t=e.newTestDocument().selectedPage,n=t.newGroup();e.assertEqual(n.container.sketchObject,t.sketchObject)},testOrdering:function(e){var t=e.newTestDocument().selectedPage,n=t.newGroup(),r=t.newGroup(),a=t.newGroup();e.assertEqual(n.index,0),e.assertEqual(r.index,1),e.assertEqual(a.index,2),n.moveToFront(),e.assertEqual(r.index,0),e.assertEqual(a.index,1),e.assertEqual(n.index,2),a.moveToBack(),e.assertEqual(a.index,0),e.assertEqual(r.index,1),e.assertEqual(n.index,2),r.moveForward(),e.assertEqual(a.index,0),e.assertEqual(n.index,1),e.assertEqual(r.index,2),n.moveBackward(),e.assertEqual(n.index,0),e.assertEqual(a.index,1),e.assertEqual(r.index,2)}}}}}]),t}()},{"./Rectangle.js":10,"./WrappedObject.js":16}],9:[function(e,t,n){"use strict";n.Page=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./Group.js"),o=e("./Selection.js");n.Page=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._document=n,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Group),r(t,[{key:"newArtboard",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._frameForLayerWithProperties(e),n=MSArtboardGroup.alloc().initWithFrame_(t.asCGRect());return this._addWrappedLayerWithProperties(n,e,"Artboard")}},{key:"export",value:function(e){var t=this.exportOptionsMergedWithDefaults(e);MSSelfContainedHighLevelExporter.alloc().initWithOptions(t).exportPage(this.sketchObject)}},{key:"exportArtboards",value:function(e){var t=this.exportOptionsMergedWithDefaults(e);MSSelfContainedHighLevelExporter.alloc().initWithOptions(t).exportLayers(this.sketchObject.artboards())}},{key:"selectedLayers",get:function(){return new o.Selection(this)}},{key:"isPage",get:function(){return!0}}],[{key:"tests",value:function(){return{tests:{testSelectedLayers:function(e){var t=e.newTestDocument(),n=t.selectedLayers;e.assert(n.isEmpty,"should have an empty selection"),t.selectedPage.newGroup({name:"Test"}).select(),e.assert(!n.isEmpty,"should no longer have an empty selection")},testLayerWithID:function(e){var t=e.newTestDocument(),n=t.selectedPage.newGroup({name:"Test"}),r=n.id,a=t.layerWithID(r);e.assertEqual(n.sketchObject,a.sketchObject)},testIsPage:function(e){var t=e.newTestDocument().selectedPage,n=t.newImage();e.assertTrue(t.isPage),e.assertFalse(n.isPage)}}}}}]),t}()},{"./Group.js":6,"./Selection.js":11}],10:[function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n.Rectangle=function(){function e(t,n,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n,this.width=r,this.height=a}return r(e,[{key:"offset",value:function(e,t){this.x+=e,this.y+=t}},{key:"asCGRect",value:function(){return CGRectMake(this.x,this.y,this.width,this.height)}},{key:"toString",value:function(){return"{"+this.x+", "+this.y+", "+this.width+", "+this.height+"}"}}],[{key:"tests",value:function(){return{tests:{testConstructor:function(t){var n=new e(1,2,3,4);t.assertEqual(n.x,1),t.assertEqual(n.y,2),t.assertEqual(n.width,3),t.assertEqual(n.height,4)},testOffset:function(t){var n=new e(1,2,3,4);n.offset(10,10),t.assertEqual(n.x,11),t.assertEqual(n.y,12),t.assertEqual(n.width,3),t.assertEqual(n.height,4)},testCGRect:function(t){var n=new e(1,2,3,4).asCGRect();t.assertEqual(n.origin.x,1),t.assertEqual(n.origin.y,2),t.assertEqual(n.size.width,3),t.assertEqual(n.size.height,4)}}}}}]),e}()},{}],11:[function(e,t,n){"use strict";n.Selection=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./WrappedObject.js");e("./Layer.js");n.Selection=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e._object));return n._page=e,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.WrappedObject),r(t,[{key:"iterateThenClear",value:function(e){var t=this.nativeLayers;this.clear(),this._page._document.iterateWithNativeLayers(t,null,e)}},{key:"iterateWithFilterThenClear",value:function(e,t){var n=this.nativeLayers;this.clear(),this._page._document.iterateWithNativeLayers(n,e,t)}},{key:"iterate",value:function(e){this._page._document.iterateWithNativeLayers(this.nativeLayers,null,e)}},{key:"iterateWithFilter",value:function(e,t){this._page._document.iterateWithNativeLayers(this.nativeLayers,e,t)}},{key:"clear",value:function(){this._page.sketchObject.changeSelectionBySelectingLayers(null)}},{key:"nativeLayers",get:function(){return this._object.selectedLayers().layers()}},{key:"length",get:function(){return this.nativeLayers.count()}},{key:"isEmpty",get:function(){return 0==this.nativeLayers.count()}}],[{key:"tests",value:function(){return{tests:{testEmpty:function(e){var t=e.newTestDocument();e.assert(t.selectedLayers.isEmpty,"selection should be empty")},testClear:function(e){var t=e.newTestDocument();t.selectedPage.newGroup().select();var n=t.selectedLayers;e.assert(!n.isEmpty,"selection should not be empty"),n.clear(),e.assert(n.isEmpty,"selection should be empty")},testIterate:function(e){var t=e.newTestDocument(),n=t.selectedPage.newGroup();t.selectedPage.newText().select(),n.addToSelection();var r=0,a=0;t.selectedLayers.iterate(function(e){r++,e.sketchObject==n.sketchObject&&a++}),e.assertEqual(r,2),e.assertEqual(a,1)},testIterateWithFilter:function(e){var t=e.newTestDocument(),n=t.selectedPage.newGroup();t.selectedPage.newText().select(),n.addToSelection();var r=0,a=0;t.selectedLayers.iterateWithFilter("isGroup",function(e){r++,e.sketchObject==n.sketchObject&&a++}),e.assertEqual(r,1),e.assertEqual(a,1)},testIterateThenClear:function(e){var t=e.newTestDocument();t.selectedPage.newGroup().select();var n=t.selectedLayers,r=0;e.assert(!n.isEmpty,"selection should not be empty"),n.iterateThenClear(function(e){r++}),e.assertEqual(r,1),e.assert(n.isEmpty,"selection should be empty")},testIterateWithFilterThenClear:function(e){var t=e.newTestDocument();t.selectedPage.newGroup().select();var n=t.selectedLayers,r=0;e.assert(!n.isEmpty,"selection should not be empty"),n.iterateWithFilterThenClear("isText",function(e){r++}),e.assertEqual(r,0),e.assert(n.isEmpty,"selection should be empty")}}}}}]),t}()},{"./Layer.js":8,"./WrappedObject.js":16}],12:[function(e,t,n){"use strict";n.Shape=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./Layer.js"),o=e("./Style.js");n.Shape=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Layer),r(t,[{key:"isShape",get:function(){return!0}},{key:"style",get:function(){return new o.Style(this.sketchObject.style())},set:function(e){this.sketchObject.style=e.sketchObject}}],[{key:"tests",value:function(){return{tests:{testIsShape:function(e){var t=e.newTestDocument().selectedPage,n=t.newShape();e.assertTrue(n.isShape),e.assertFalse(t.isShape)}}}}}]),t}()},{"./Layer.js":8,"./Style.js":13}],13:[function(e,t,n){"use strict";n.Style=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./WrappedObject.js");n.Style=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e||(e=MSDefaultStyle.defaultStyle()),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.WrappedObject),r(t,[{key:"colorFromString",value:function(e){var t=MSImmutableColor.colorWithSVGString_(e);return MSColor.alloc().initWithImmutableObject_(t)}},{key:"borders",set:function(e){var t=[];for(var n in e){var r=this.colorFromString(e[n]),a=MSStyleBorder.new();a.setColor_(r),a.setFillType_(0),a.enabled=!0,t.push(a)}this.sketchObject.setBorders_(t)}},{key:"fills",set:function(e){var t=[];for(var n in e){var r=this.colorFromString(e[n]),a=MSStyleFill.new();a.setColor_(r),a.setFillType_(0),a.enabled=!0,t.push(a)}this.sketchObject.setFills_(t)}}],[{key:"tests",value:function(){return{tests:{testBorders:function(e){var n=new t;n.borders=["#11223344","#1234"],e.assertEqual(n.sketchObject.borders().count(),2)},testFills:function(e){var n=new t;n.borders=["#11223344","#1234"],e.assertEqual(n.sketchObject.borders().count(),2)}}}}}]),t}()},{"./WrappedObject.js":16}],14:[function(e,t,n){"use strict";n.Tester=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e("./Document.js");n.Tester=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._testFailures=[],this._application=t,this._ran=0,this._passes=[],this._failures=[]}return a(e,[{key:"assert",value:function(e,t){e||(t||(t=""),this._testFailures.push(t))}},{key:"assertEqual",value:function(e,t){var n=e!=t;n&&"object"===(void 0===e?"undefined":r(e))&&"object"===(void 0===t?"undefined":r(t))&&(n=e.compare?e.compare(t):e.toString()!=t.toString()),n&&this._testFailures.push(e+" != "+t)}},{key:"assertTrue",value:function(e){e||this._testFailures.push("expected true, got: "+e)}},{key:"assertFalse",value:function(e){e&&this._testFailures.push("expected false, got: "+e)}},{key:"newTestDocument",value:function(){return new o.Document(MSDocumentData.new(),this._application)}},{key:"runUnitTests",value:function(e,t){var n=e.suites;for(var r in n)this.runUnitTests(n[r],r);var a=e.tests;for(var o in a){var i=a[o];this._ran++,this._testFailures=[];i(this);var s=t?t+" : "+o:o;this._testFailures.length>0?this._failures.push({name:s,reasons:this._testFailures}):this._passes.push(s)}return{ran:this._ran,crashes:[],failures:this._failures,passes:this._passes}}},{key:"application",get:function(){return this._application}}]),e}()},{"./Document.js":5}],15:[function(e,t,n){"use strict";n.Text=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./Layer.js"),o=e("./Rectangle.js");var i={left:0,right:1,center:2,justified:3,natural:4};n.Text=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Layer),r(t,[{key:"adjustToFit",value:function(){this._object.adjustFrameToFit()}},{key:"isText",get:function(){return!0}},{key:"text",get:function(){return this._object.stringValue()},set:function(e){var t=this.sketchObject;t.stringValue=e,t.nameIsFixed()||(t.name=e)}},{key:"font",set:function(e){this._object.font=e}},{key:"systemFontSize",set:function(e){this._object.font=NSFont.systemFontOfSize_(e)}},{key:"alignment",get:function(){var e=this._object.textAlignment(),t=e;for(var n in i)if(i[n]===e){t=n;break}return t},set:function(e){var t=i[e];this._object.textAlignment=t||e}},{key:"fixedWidth",set:function(e){this._object.textBehaviour=e?1:0}},{key:"fragments",get:function(){var e=this.sketchObject,t=e.immutableModelObject().createTextStorage(),n=t.layoutManagers().firstObject(),r=MOPointer.new(),a=NSMakeRange(0,t.length()),i=e.drawingPointForText();n.glyphRangeForCharacterRange_actualCharacterRange_(a,r);for(var s=r.value(),u=[],c=0;c<NSMaxRange(s);){var l=MOPointer.new(),f=n.lineFragmentRectForGlyphAtIndex_effectiveRange_(c,l),p=new o.Rectangle(f.origin.x+i.x,f.origin.y+i.y,f.size.width,f.size.height),h=l.value(),y=n.typesetter().baselineOffsetInLayoutManager_glyphIndex_(n,c);u.push({rect:p,baselineOffset:y,range:h}),c=NSMaxRange(h)+1}return u}},{key:"useConstantBaselines",set:function(e){var t=e?2:1,n=this.sketchObject,r=n.firstBaselineOffset();n.lineSpacingBehaviour=t;var a=n.firstBaselineOffset(),o=this.frame;o.y-=a-r,this.frame=o}}],[{key:"tests",value:function(){return{tests:{testIsText:function(e){var t=e.newTestDocument().selectedPage,n=t.newText();e.assertTrue(n.isText),e.assertFalse(t.isText)},testText:function(e){var t=e.newTestDocument().selectedPage.newText({text:"blah"});e.assertEqual(t.text,"blah"),t.text="doodah",e.assertEqual(t.text,"doodah")},testAdjustToFit:function(e){var t=e.newTestDocument().selectedPage.newText({text:"blah",frame:new o.Rectangle(10,10,1e3,1e3)});t.adjustToFit(),e.assertEqual(t.frame,new o.Rectangle(10,10,23,14))},testAlignment:function(e){var t=e.newTestDocument().selectedPage.newText({text:"blah",frame:new o.Rectangle(10,10,1e3,1e3)});for(var n in i)t.alignment=n,e.assertEqual(t.alignment,n),t.alignment=i[n],e.assertEqual(t.alignment,n)}}}}}]),t}()},{"./Layer.js":8,"./Rectangle.js":10}],16:[function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n.WrappedObject=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._object=t}return r(e,[{key:"sketchObject",get:function(){return this._object}},{key:"id",get:function(){return this._object.objectID()}}],[{key:"tests",value:function(){return{tests:{testSketchObject:function(t){var n=MSLayer.new(),r=new e(n);t.assertEqual(r.sketchObject,n)},testID:function(t){var n=MSLayer.new(),r=new e(n);t.assertEqual(r.id,n.objectID())}}}}}]),e}()},{}]},{},[1]);