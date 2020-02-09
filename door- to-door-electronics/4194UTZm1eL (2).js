(function(h){var p=window.AmazonUIPageJS||window.P,l=p._namespace||p.attributeErrors,b=l?l("AmazonRushFramework","AmazonRush"):p;b.guardFatal?b.guardFatal(h)(b,window):b.execute(function(){h(b,window)})})(function(h,p,l){"use strict";h.when("A","3p-promise","rush-dispatcher","rush-asset-loader","rush-metrics-adapter").register("rush-ajax-controller",function(b,f,e,a,d){function k(){document.location.reload()}function c(c,g){var r=c.slice(1),q=2<=r.length?r[1]:{},h=b.map(q&&q.assets?q.assets:[],function(c){return new f(function(g,
f){function k(){w++;1<w&&g(w)}var w=0;a.loadAsset(c,k,k);b.delay(function(){d.incrementCount("rush-ajax-errors","asset-load-timeout");f(Error("Failed to load "+c))},1E4)})});return new f(function(a){f.all(h).then(function(){e.trigger(c[1],{data:q,memo:g});a()})["catch"](k)})}function g(g,b,e){var q,h=g[0];"title"===h?document.title=g[1]:"dispatch"===h?q=c(g,e):"manifest"===h?q=(new f(function(c){a.addManifest(g[1]);c()}))["catch"](function(){d.incrementCount("rush-ajax-errors","add-manifest-error");
k()}):r(b)&&b.call({},g);return q||f.resolve()}var r=b.$.isFunction;return function(c,d){var k=[],e,h;d=d||{};e=d.success;h=d.chunk;d.success=function(c,g,a){f.all(k).then(function(){r(e)&&e.call({},c,g,a)})["catch"](function(c){r(d.error)&&d.error.call({},a,g,c)})};d.chunk=function(c){k.push(g(c,h,d.memo))};d.headers=b.$.extend(d.headers||{},{"x-amazon-rush-fingerprints":a.fingerprints()});return b.ajax(c,d)}});"use strict";h.when("A","R","rush-util","rush-controller-api","rush-dom","rush-page-state-dispatcher").register("rush-application-api",
function(b,f,e,a,d,k){return function(c,g){var f=document.body,m=null;if(!e.isNotBlank(g)||!c)throw Error("[invalid arguments] valid signature is (application:R.ApplicationBase, applicationAttribution:String)");g=b.trim(g);m=a(g);return b.extend(m,{setupComponents:function(c){d.scan(c||f)},teardownComponents:function(c){d.unscan(c||f)},addRoute:function(g,a){c.addRoute(c,g,function(){try{return a.apply(null,arguments)}catch(c){m.log.fatal(c,"[pattern\x3d"+g+"]: "+m.log.getErrorMessage(c))}})},startPageStateDispatcher:k.start})}});
"use strict";h.when("rush-controller-api","rush-logger","rush-util").register("rush-application-public-api",function(b,f,e){return function(a,d){if(!e.isNotBlank(a)||!e.isNotBlank(d))throw Error("[invalid arguments] valid signature is (appName:String, attribution:String)");return{getAttribution:function(){return d},getName:function(){return a},onStart:function(){},onStop:function(){},attachController:function(a,c){try{return c(b(a))}catch(g){f.logError(a,"error in the controller handler",g)}}}}});
"use strict";h.when("A","rush-ajax-controller","rush-dispatcher","rush-attributed-error-logger","rush-util").register("rush-controller-api",function(b,f,e,a,d){return function(b){var c=a.create(b);return{ajax:f,on:function(a,d){return e.on(a,function(){try{return d.apply(null,arguments)}catch(b){c.fatal(b,"[event\x3d"+a+"]: "+c.getErrorMessage(b))}})},onPrefix:function(a,d){return e.onPrefix(a,function(b){try{return d.apply(null,arguments)}catch(f){c.fatal(f,"[event\x3d"+b+"][prefix\x3d"+a+"]: "+
c.getErrorMessage(f))}})},trigger:e.trigger,log:c,util:d,logError:function(a,b){d.isNullOrUndefined(b)&&a instanceof Error&&(b=a,a=c.getErrorMessage(b));c.fatal(b,a)}}}});"use strict";h.when("A","rush-dom","rush-dispatcher","rush-attributed-error-logger","rush-metadata","rush-util").register("rush-component-api",function(b,f,e,a,d,k){return function(c,g){var b=a.create(g);return{on:function(a,g){return e.on(a,function(){try{return g.apply(null,arguments)}catch(d){b.fatal(d,"[component\x3d"+c+"][event\x3d"+
a+"]: "+b.getErrorMessage(d))}})},onPrefix:function(a,g){return e.onPrefix(a,function(a){try{return g.apply(null,arguments)}catch(d){b.fatal(d,"[component\x3d"+c+"][event\x3d"+a+"]: "+b.getErrorMessage(d))}})},trigger:e.trigger,teardown:function(){},remove:f.remove,append:f.append,insertBefore:f.insertBefore,insertAfter:f.insertAfter,replace:f.replace,removeChildren:f.removeChildren,replaceInnerHTML:f.replaceInnerHTML,getMetadataForElem:d.getMetadataForElem,util:k,log:b,logError:function(a,d){k.isNullOrUndefined(d)&&
a instanceof Error&&(d=a,a=b.getErrorMessage(d));b.fatal(d,"[component\x3d"+c+"]: "+a)}}}});"use strict";h.when("A").register("rush-component-properties",function(b){return function(f){function e(){k=(k=f.getAttribute("data-component-props"))?b.parseJSON(k):{}}function a(a){throw Error("Component properties ."+a+"() is DEPRECATED.");}var d=f.getAttribute?l:null,k=f.getAttribute?l:{};return{elem:function(){return f},type:function(){d===l&&(d=f.getAttribute("data-component-type"));return d},prop:function(a){k===
l&&e();return k[a]},propKeys:function(){k===l&&e();return b.keys(k)},id:function(){a("id")},key:function(){a("key")},parent:function(){a("parent")},children:function(){a("children")}}}});"use strict";h.when("A").register("rush-component",function(b){return b.createClass({init:function(f){var e=this;b.each(f,function(a,d){b.$.isFunction(a)&&(e[d]=a)});e._teardownCallbacks=[]},teardown:function(){b.each(this._teardownCallbacks,function(f){b.$.isFunction(f)&&f()})},onTeardown:function(b){this._teardownCallbacks.push(b)}})});
"use strict";h.when("A","rush-component-properties","rush-util").register("rush-dom",function(b,f,e){function a(a){return!(!a.hasAttribute||!a.hasAttribute("data-component-id"))}function d(a){return!(!a||1!==a.nodeType)}function k(a){for(var c=a.length;c--;){var b=a[c];if(!b||!b.nodeType)return!1}return!0}function c(a){return"string"===typeof a}function g(a,c){var b=null;h.now(c).execute(function(c){c&&(b=new c(f(a)))});return b}function r(a,c){var b=v[c];if(c=b&&b(f(a))||g(a,c))return b=x++,a.setAttribute&&
a.setAttribute("data-component-id",b),u[b]=c}function m(c){var g=[],f,e,m;c=b.isArray(c)?c:[c];if(!k(c))throw Error("[invalid arguments] valid signature is scan(elements:Node|Array\x3cNode\x3e)");c=b.filter(c,function(c){return d(c)});b.each(c,function(c){c.hasAttribute&&c.hasAttribute("data-component-type")&&!a(c)&&g.push(c);g=g.concat(n(c).find("[data-component-type]").filter(":not([data-component-id])").get())});e=0;for(m=g.length;e<m;e++)c=g[e],f=c.getAttribute&&c.getAttribute("data-component-type"),
a(c)||r(c,f)}function l(c){b.isArray(c)||(c=[c]);if(!k(c))throw Error("[invalid arguments] valid signature is unscan(elements:Node|Array\x3cNode\x3e)");c=b.filter(c,function(c){return d(c)});b.each(c,function(c){var b=n(c),g=[],d;a(c)&&g.push(c);g=g.concat(b.find("[data-component-id]").get());for(c=g.length;c--;){b=g[c];d=b.getAttribute("data-component-id");var f=u[d];delete u[d];(d=f)&&t(d.teardown)&&d.teardown();b.removeAttribute&&b.removeAttribute("data-component-id")}})}function p(a,b){if(!d(a)||
!c(b))throw Error("[invalid arguments] valid signature is append(parentElem:Node.ELEMENT_NODE, appendingContent:String)");e.isBlank(b)||(a=n(a),b=n(b),a.append(b),m(b.get()))}function q(c){if(!d(c))throw Error("[invalid arguments] valid signature is removeChildren(parentElem:Node.ELEMENT_NODE)");c=n(c);l(c.children().get());c.empty()}var n=b.$,t=n.isFunction,x=1,u={},v={};return{scan:m,scanFor:function(c,g){var f='[data-component-type\x3d"'+g+'"]',m=[],h,t;c=b.isArray(c)?c:[c];if(!k(c))throw Error("`elements` must be either an element or a list of elements.");
if(e.isBlank(g))throw Error("`componentName` must be a non-empty string.");c=b.filter(c,function(c){return d(c)});b.each(c,function(c){(c.getAttribute&&c.getAttribute("data-component-type"))!==g||a(c)||m.push(c);m=m.concat(n(c).find(f).filter(":not([data-component-id])").get())});h=0;for(t=m.length;h<t;h++)c=m[h],a(c)||r(c,g)},unscan:l,remove:function(c){if(!d(c))throw Error("[invalid arguments] valid signature is remove(elem:Node.ELEMENT_NODE)");c.parentNode&&(l(c),c.parentNode.removeChild(c))},
append:p,insertBefore:function(a,b){if(!d(a)||!c(b))throw Error("[invalid arguments] valid signature is insertBefore(target:Node.ELEMENT_NODE, newContent:String)");e.isBlank(b)||(b=n(b),n(a).before(b),m(b.get()))},insertAfter:function(a,b){if(!d(a)||!c(b))throw Error("[invalid arguments] valid signature is insertBefore(target:Node.ELEMENT_NODE, newContent:String)");e.isBlank(b)||(b=n(b),n(a).after(b),m(b.get()))},replace:function(a,b){var g;if(!d(a)||!c(b))throw Error("[invalid arguments] valid signature is replace(oldElem:Node.ELEMENT_NODE, newContent:String)");
g=n(a);e.isNotBlank(b)&&(b=n(b),g.after(b),m(b.get()));l(a);g.remove()},removeChildren:q,replaceInnerHTML:function(a,b){if(!d(a)||!c(b))throw Error("[invalid arguments] valid signature is replaceInnerHTML(parentElem:Node.ELEMENT_NODE, newInnerContent:String)");q(a);p(a,b)},registerComponent:function(c,a){if(e.isBlank(c))throw Error("A non-empty component name is required for registerComponent(name:String, callback:function)");if(!t(a))throw Error("A component callback function is required for registerComponent(name:String, callback:function)");
c=b.trim(c);if(v[c])throw Error("Component has already been registered: "+c);v[c]=a}}});"use strict";h.when("A","rush-util").register("rush-metadata",function(b,f){function e(a){var e=a&&a.getAttribute&&a.getAttribute("data-metadata-key"),e=e&&b.state(e)||{};e.html=a?f.outerHTML(a):"";return e}var a=b.$;return{getMetadataForElem:function(b){b=a(b)[0];return e(b)},getMetadata:function(b){var f=[];b=a(b||document).find("[data-metadata-key]");var c,g=b.length||0;for(c=0;c<g;c++)f.push(e(b[c]));return f}}});
"use strict";h.when("A","rush-util").register("rush-dispatcher",function(b,f){function e(c,a){return function(b,d){b===c&&a(d)}}function a(c,a){return function(b,d){c===b.substr(0,c.length)&&a(b,d)}}function d(c,a,d){var e;if(!f.isNotBlank(c))throw Error("must provide an event name when binding an event callback");if(!k.isFunction(a))throw Error("must provide a event callback function when binding to the event bus");c=b.trim(c);e=d(c,a);b.on("amazon-rush-dispatcher-events",e);return function(){b.off("amazon-rush-dispatcher-events",
e)}}var k=b.$;return{trigger:function(c,a){if(!f.isNotBlank(c))throw Error("must provide the name of the event that is being triggered");c=b.trim(c);b.trigger("amazon-rush-dispatcher-events",c,a)},on:function(c,a){return d(c,a,e)},onPrefix:function(c,b){return d(c,b,a)}}});"use strict";h.when("A","rush-dispatcher","rush-util").register("rush-page-state-dispatcher",function(b,f,e){function a(a,d){a=a||{};d=d||{};b.each(a,function(a,b){if(!0===d||!0===d[b]){a=[].concat(a);for(var g=0,e=a.length;g<e;g++)f.trigger(b,
{data:[a[g]],memo:c})}})}var d=e.isObject,k=!1,c;return{start:function(g){k||(k=!0,g=g||{},d(g)&&(g.dispatchedByRushPageStateDispatcher=!0),c=g,g=b.state("rush-dispatch"),a(g,!0),b.state.bind("rush-dispatch",a))},isDispatchedByPageState:function(a){return a&&a.memo===c}}});h.when("rush-error-logger").register("rush-attributed-error-logger",function(b){return{create:function(f){return{getErrorMessage:b.getErrorMessage,fatal:function(e,a){b.fatal(e,a,f)},error:function(e,a){b.error(e,a,f)},warn:function(e,
a){b.warn(e,a,f)},logErrorWrapper:function(e,a,d){return b.logErrorWrapper(e,a,f,d)}}}}});h.register("rush-console-logger",function(){function b(b){return function(){}}function f(){console&&console.log&&console.log.apply(console,arguments)}return{log:b(f),warn:b(function(){console&&console.warn?console.warn.apply(console,arguments):f.apply(null,arguments)}),error:b(function(){console&&console.error?console.error.apply(console,arguments):f.apply(null,arguments)})}});h.when("rush-console-logger").register("rush-error-logger",
function(b){function f(a,d,f,c){d={message:d,logLevel:f,attribution:c};b.log(d);if(a)switch(f){case "FATAL":case "ERROR":b.error(a);break;case "WARN":b.warn(a);break;default:b.log(a)}p.ueLogError&&p.ueLogError(a,d)}var e={fatal:function(a,b,e){f(a,b,"FATAL",e)},error:function(a,b,e){f(a,b,"ERROR",e)},warn:function(a,b,e){f(a,b,"WARN",e)},logError:function(a,b,f){e.fatal(f,b,a)},getErrorMessage:function(a){try{return a instanceof Error?a.message:JSON.stringify(a)}catch(b){return"could not get the error message"}},
logErrorWrapper:function(a,b,f,c){return function(){try{return a.apply(b,arguments)}catch(g){c||(c=e.getErrorMessage(g)),e.fatal(g,c,f)}}}};return e});h.when("rush-error-logger").register("rush-logger",function(b){return b});"use strict";h.when("A","R","rush-dom","rush-util","rush-logger","rush-component-api","rush-application-api","rush-application-public-api").register("rush-framework",function(b,f,e,a,d,k,c,g){var h=b.$.isFunction,m=b.$.proxy,l=[],p=[],q=!1,n=function(){var c;c=b.throttle(function(){var c=
0,a;a=l.length;if(3<=a)e.scan(document.body);else for(;c<a;c++)e.scanFor(document.body,l[c]);l=[]},25);return function(){l.length&&c()}}();return{attachApp:function(d,e,k){var l=!1,p=[],q,n;if(!a.isNotBlank(d)||!a.isNotBlank(e)||!h(k))throw Error("[invalid arguments] valid signature is attachApp(appName:String, attribution:String, handler:function(api:RushApplicationAPI))");d=b.trim(d);e=b.trim(e);n=new f.ApplicationBase(d);n.addRoute=function(){var c=Array.prototype.slice.call(arguments);l?f.addRoute.apply(f,
c):p.push(c)};q=c(n,e);d=g(d,e);d=b.extend(d,k(q));n.load=m(d.onStart,d);n.unload=m(d.onStop,d);l=!0;b.each(p,function(c){f.addRoute.apply(f,c)});f.start();return d},registerComponent:function(c,d,g){if(a.isBlank(c))throw Error("A non-empty component name is required for registerComponent(componentName:String, componentAttribution:String, componentSetup:function).");if(a.isBlank(d))throw Error("A non-empty component attribution is required for registerComponent(componentName:String, componentAttribution:String, componentSetup:function).");
if(!h(g))throw Error("A component setup function is required for registerComponent(componentName:String, componentAttribution:String, componentSetup:function).");e.registerComponent(c,function(a){var e=b.extend(k(c,d),a),f=[],m=[],l=e.on,n=e.onPrefix;e.on=function(c){var a=l.apply(null,arguments);f.push([c,a]);return a};e.onPrefix=function(c){var a=n.apply(null,arguments);m.push([c,a]);return a};try{g(e)}catch(p){e.log.fatal(p,'Component setup failure in component "'+c+'".')}return{teardown:function(){b.each(f,
function(a){var b=a[0];a=a[1];if(h(a))try{a()}catch(d){e.log.fatal(d,'Component teardown failure in component "'+c+'" during on("'+b+'") teardown.')}});b.each(m,function(a){var b=a[0];a=a[1];if(h(a))try{a()}catch(d){e.log.fatal(d,'Component teardown failure in component "'+c+'" during onPrefix("'+b+'") teardown.')}});if(h(e.teardown))try{e.teardown()}catch(a){e.log.fatal(a,'Component teardown failure in component "'+c+'" during the custom component teardown.')}}}});!0===q?(l.push(c),setTimeout(n,
0)):p.push(c)},turnOnAutoScanner:function(){!1===q&&(q=!0,l=l.concat(p),p=[],n())},turnOffAutoScanner:function(){q=!1}}});"use strict";h.register("rush-metrics-adapter",function(){function b(){}var f,e,a,d;f=p.uet||b;e=p.ues||b;a=p.ue&&p.ue.count||b;d=p.uex||b;return{setTimer:function(a,c,b,d){f(a,c,b,d)},setValue:function(a,c,b){e(a,c,b)},setCount:function(b,c,d,e){e=e?e:{};c&&(e.scope=c);a(b,d,e)},incrementCount:function(b,c,d){d=d?d:{};c&&(d.scope=c);c=(a(b,l,d)||0)+1;a(b,c,d)},publish:function(a,
c,b){d(a,c,b)}}});"use strict";h.when("rush-metrics-adapter","A").register("rush-metrics",function(b,f){var e={wb:1},a=0,d,k;f=f.createClass({_metricsAdapter:l,_isPublished:!1,_scope:l,init:function(c,d){this._scope=(c||"amazonRush").substring(0,26)+a++;this._metricsAdapter=d||b},getMetricsAdapter:function(){return this._metricsAdapter},isPublished:function(){return this._isPublished},validateIsNotPublished:function(){return this.isPublished()?!1:!0},setTimer:function(c,a,b){this.validateIsNotPublished()?
this.getMetricsAdapter().setTimer(c,this._scope,a,b):this.getMetricsAdapter().incrementCount("s-metrics-published-"+c);return this},setValue:function(c,a){this.validateIsNotPublished()&&this.getMetricsAdapter().setValue(c,this._scope,a);return this},setCount:function(c,a){this.validateIsNotPublished()&&this.getMetricsAdapter().setCount(c,this._scope,a);return this},loadComplete:function(c){this.validateIsNotPublished()&&(this.getMetricsAdapter().publish("ld",this._scope,c),this._isPublished=!0)}});
d=f.extend({_hasRequestId:!1,_isLoadWaiting:!1,_loadWaitingOptions:l,init:function(c,a){this._super(c,a);this.clientTimeBased();this.beginRequest()},clientTimeBased:function(){return this.setValue("ctb","1")},beginRequest:function(){return this.setTimer("tc")},beginResponse:function(){return this.setValue("t0",+new Date)},responseComplete:function(){return this.setTimer("be")},setRequestId:function(a){if(!0!==this._hasRequestId)return a&&this.validateIsNotPublished()&&(this._hasRequestId=!0,this.setValue("id",
a),!0===this._isLoadWaiting&&this.loadComplete(this._loadWaitingOptions)),this},criticalFeatureComplete:function(a){return this.setTimer("cf",l,a)},aboveTheFoldComplete:function(a){return this.setTimer("af",l,a)},counterReady:function(a,b){return this.setCount(a,b)},loadComplete:function(a){!0!==this._hasRequestId?(this._isLoadWaiting=!0,this._loadWaitingOptions=a):this._super(a)}});k=f.extend({init:function(a,b){this._super(a,b);this.bodyBegin()},setTimer:function(a,b,d){b=b||e;return this._super(a,
b,d)},bodyBegin:function(){return this.setTimer("bb")},criticalFeatureComplete:function(a){return this.setTimer("cf",l,a)},loadComplete:function(a){a=a||e;this._super(a)}});return{newPageTransitionScope:function(a,b){return new d(a,b)},newWidgetScope:function(a,b){return new k(a,b)}}});"use strict";h.when("A","rush-metrics","rush-dispatcher").register("rush-page-transition-metrics",function(b,f,e){function a(a){k=f.newPageTransitionScope(null,a)}function d(){k||a();return k}var k,c=b.$.isFunction,
g={RECEIVED_METRICS_INFO:"rushMetricsEvents:metricsInfo",BEGIN_REQUEST:"rushMetricsEvents:beginRequest",BEGIN_RESPONSE:"rushMetricsEvents:beginResponse",RESPONSE_COMPLETE:"rushMetricsEvents:responseComplete",CRITICAL_FEATURE_COMPLETE:"rushMetricsEvents:criticalFeatureComplete",ABOVE_THE_FOLD_COMPLETE:"rushMetricsEvents:aboveTheFoldComplete",COUNTER_READY:"rushMetricsEvents:counterReady",LOAD_COMPLETE:"rushMetricsEvents:loadComplete"},h={};h[g.RECEIVED_METRICS_INFO]=function(a){(a=b.$.isArray(a)?a[0].requestId:
a.requestId)&&d().setRequestId(a)};h[g.BEGIN_REQUEST]=function(){a();d().beginRequest()};h[g.BEGIN_RESPONSE]=function(){d().beginResponse()};h[g.RESPONSE_COMPLETE]=function(){d().responseComplete()};h[g.CRITICAL_FEATURE_COMPLETE]=function(a){d().criticalFeatureComplete(a.timeOverride)};h[g.ABOVE_THE_FOLD_COMPLETE]=function(a){d().aboveTheFoldComplete(a.timeOverride)};h[g.COUNTER_READY]=function(a){d().counterReady(a.counter,a.value)};h[g.LOAD_COMPLETE]=function(){d().loadComplete()};e.onPrefix("rushMetricsEvents",
function(a,b){a=h[a];c(a)&&a(b||{})});return{EVENTS:g,createNewPageTransitionScope:a}});"use strict";h.when("rush-ajax-controller","rush-component","rush-dispatcher","rush-dom","rush-metadata","rush-page-transition-metrics","rush-page-state-dispatcher","rush-util").register("Rush",function(b,f,e,a,d,h,c,g){return{ajax:b,Component:f,trigger:e.trigger,on:e.on,onPrefix:e.onPrefix,startPageStateDispatcher:c.start,isDispatchedByPageState:c.isDispatchedByPageState,scan:a.scan,unscan:a.unscan,remove:a.remove,
removeChildren:a.removeChildren,append:a.append,replace:a.replace,replaceInnerHTML:a.replaceInnerHTML,getMetadataForElem:d.getMetadataForElem,getMetadata:d.getMetadata,metrics:{EVENTS:h.EVENTS},util:g}});"use strict";h.when("A").register("rush-util",function(b){var f=b.$,e={outerHTML:function(a){return a.outerHTML?a.outerHTML:f("\x3cdiv\x3e").append(f(a).clone()).html()},isObject:function(a){return"object"===typeof a&&null!==a},isNumber:function(a){return"number"===typeof a&&isFinite(a)},isNullOrUndefined:function(a){return null===
a||a===l},isNotBlank:function(a){return"string"===typeof a&&""!==b.trim(a)},isBlank:function(a){return!e.isNotBlank(a)},setIfEmpty:function(a,b,e){a[b]===l&&(a[b]=e)},makeComponentId:function(a,b){return e.isNotBlank(a)&&e.isNotBlank(b)?a+":"+b:""},freeze:function(a){return Object.freeze?Object.freeze(a):a}};return e.freeze(e)})});