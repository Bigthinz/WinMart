(function(g){var c=window.AmazonUIPageJS||window.P,h=c._namespace||c.attributeErrors,a=h?h("AmazonRushRouter",""):c;a.guardFatal?a.guardFatal(g)(a,window):a.execute(function(){g(a,window)})})(function(g,c,h){g.when("A").register("rush-routable-application-base",function(a){return a.createClass({init:function(a){this.applicationName=a},name:function(){return this.applicationName},unload:function(a){return{}},load:function(a,c){return!0}})});"use strict";g.when("A").register("rush-route",function(a){return a.createClass({init:function(a,
c,q){this.application=function(){return a};this.pattern=function(){return c};this.handler=function(){return q}}})});"use strict";g.when("A").register("rush-router-html5-history-support",function(a){var g=a.$.extend;return function(a){function q(f,a,c){a=c.match(a);return{major:f&&a&&a[1]?parseInt(a[1],10):-1,minor:f&&a&&a[2]?parseInt(a[2],10):-1}}function h(f){if(!f||!f.url&&!f.state)return!1;b.replaceState(g({},b.state(),f.state),b.title(),f.url);return!0}var b=a||{userAgent:c.navigator.userAgent,
pushState:function(f,a,b){c.history.pushState(f,a,b)},replaceState:function(f,a,b){c.history.replaceState(f,a,b)},title:function(){return document.title},state:function(){return c.history.state},addStateChangeHandler:function(a){c.addEventListener("popstate",a,!1)},removeStateChangeHandler:function(a){c.removeEventListener("popstate",a)},hasNativeHistorySupport:function(){return c.history&&c.history.replaceState}};return{isSupportedBrowser:function(){var a=b.userAgent,c=/iPhone|iPad|iPod/.test(a),
g=-1!==a.indexOf("Android"),h=q(c,/OS ([0-9]+)(?:_([0-9]+))?/,a),a=q(g,/Android ([0-9]+)(?:\.([0-9]+))?/,a);return b.hasNativeHistorySupport()&&!(c&&5>h.major)&&!(g&&4>a.major)&&!(g&&4===a.major&&2>a.minor)},to:function(a){if(!a||!a.url&&!a.state)return!1;b.pushState(g({},a.state||{}),b.title(),a.url);return!0},replace:h,back:function(){b.history.back()},state:function(a){a&&h({state:a});return b.state()||{}},addStateChangeHandler:b.addStateChangeHandler,removeStateChangeHandler:b.removeStateChangeHandler}}});
"use strict";g.when("A").register("rush-router-pattern-parser",function(a){function c(v,d){return d?(a.isArray(d)||(d=[d]),d.concat(a.isArray(v)?v:[v])):v}function g(a){return a.replace(p,"\\$\x26")}function h(a){return decodeURIComponent((a||"").replace(/\+/g," "))}function u(a){var d="",n=[],c=[],e,k;k=0;var b;e=0;b=[];var f,l,h;for(l=0;l<a.length;l++)f=a[l],h=0===l||0<l&&"\\"!==a[l-1],"{"===f&&h?(e++,b.push(f),1===e&&b.push("\x3c")):("}"===f&&h&&(e--,0===e&&b.push("\x3e")),b.push(f));for(a=b.join("");e=
t.exec(a);)e.index!==k&&(c.push(a.slice(k,e.index)),d+=g(a.slice(k,e.index))),e[1]?(k={},e[3]?(d+="("+e[3]+")",b=e[3].match(x),k[e[1]]=b?b.length+1:1):(d+="([^/]+)",k[e[1]]=1),n.push(k)):"**"===e[0]?(d+="(.*)",n.push({wildcard:1})):"*"===e[0]?(d+="(.*?)",n.push({wildcard:1})):"("===e[0]?d+="(?:":")"===e[0]&&(d+=")?"),c.push(e[0]),k=t.lastIndex;k!==a.length&&(c.push(a.slice(k,a.length)),d+=g(a.slice(k,a.length)));"/"!==a.charAt(0)&&(a="/"+a);"/"!==a.charAt(a.length-1)&&(d+="/?");"*"===c[c.length-1]&&
(d+="$");d="^"+d;return{pattern:a,regexpSource:d,regex:new RegExp(d,"i"),paramNames:n,tokens:c}}function b(a){a in m||(m[a]=u(a));return m[a]}function f(f,d){var n={},g=!1,e=b(f),k=d.match(e.regex),x=null,m;if(k){g=!0;m=k[0];(x=d.substr(m.length))&&"/"===m.charAt(m.length-1)&&(x="/"+x);a.map(k.slice(1),function(a){return h(a)});var l=1;for(m=0;m<e.paramNames.length;m++)a.each(e.paramNames[m],function(a,d){for(var e=0;e<a;e++)n[d]=c(k[l],n[d]),l++})}return{isMatch:g,remainingPathname:x,params:n}}function z(a){var d=
{},b,f,e;if(!a)return d;"?"===a[0]&&(a=a.slice(1));a=a.split("\x26");for(e=0;e<a.length;e++)b=a[e].split("\x3d"),f=h(b.shift()),b=b.length?h(b.join("\x3d")):null,f&&(d[f]=c(b,d[f]));return d}var t=/\{<([a-zA-Z_][\w-]*)(:(.+?(?=>\})))?>\}|\*\*|\*|\(|\)/g,p=/[.*+?\^${}()|\[\]\\]/g,x=/(?!\\)(\()/g,m={};return{parsePattern:u,matchPathname:f,parseQueryString:z,matchLocation:function(b,d){var g=f(b,d.pathname),h;if(!1===g.isMatch||g.remainingPathname)return g.isMatch=!1,g;h=z(d.search);a.each(h,function(a,
d){g.params[d]=c(a,g.params[d])});return g}}});"use strict";g.when("A","rush-router-pattern-parser","rush-route","rush-router-html5-history-support","rush-routable-application-base").register("R",function(a,B,C,q,u){function b(a){return"function"===typeof a}function f(a){var b=document.createElement("a");b.href=a.href;b.setAttribute("href",b.href);return b.protocol+"//"+b.host}function z(){return document.location}function t(a,m){function v(a,d){var b,e,c;c=(d=d||r)&&d.name();if(d&&(b=q(a,c)))return{route:b.route,
params:b.params};for(e in w)if(e!==c&&w.hasOwnProperty(e)&&(b=q(a,e)))return{route:b.route,params:b.params};return!1}function d(a,d,b){var c;if(!0===A)return!1;a=a||l();c=v(a,r);if(!1!==c)return e(c.route,c.params,a,b);!1!==d&&p(a.href);return!1}function n(a){d(h,h,a)}function q(a,d){var b=w[d],c=!1,e,f,g;for(g=0;g<b.length;g++)if(e=b[g],f=B.matchLocation(e.pattern(),a),f.isMatch){f.route=e;c=f;break}return c}function e(a,d,b,c){c=a.application();return r!==c&&!1===k(b,c)?!1:!1===a.handler().call(b,
d,b)?(p(b.href),!1):!0}function k(a,d){var b,c=null!==r&&r!==d;if(c&&(b=r.unload(a),!1===b))return p(a.href),!1;r=d;if(!1===d.load(a,b)){if(c)p(a.href);else throw Error("FATAL: Router: app.load() failed on startup.");return!1}return!0}function p(a){l().href===a?l().reload(!0):l().href=a}function t(b){if(!0!==A&&!(1!==b.which||b.metaKey||b.ctrlKey||b.shiftKey||b.defaultPrevented)){for(var c=b.target,e=l().href;c&&"A"!==c.nodeName;)c=c.parentNode;!c||"A"!==c.nodeName||!c.hasAttribute("href")||c.hasAttribute("download")||
"off"===c.getAttribute("data-routing")||c.target&&"_self"!==c.target||!(e=D===f(c)&&c.href!==e&&c.href.split("#")[0]!==e.split("#")[0])||(e=d(c),!0===e&&(a.to({url:c.href,state:null}),b.preventDefault()))}}var l=m||z,u={},w={},r=null,D=f(l()),y=!1,A=!1;return{addRoute:function(a,c,d){if(!(a&&b(a.name)&&b(a.load)&&b(a.unload)))throw Error("First argument passed to Router.addRoute must be an application object.");var f=a.name(),g=u[f],h=w[f];if(!f)throw Error("Application name must not be empty.");
if(g&&g!==a)throw Error("An application named `"+f+"` already exists.");g||(u[f]=a);h||(w[f]=[]);a=new C(a,c,d);w[f].push(a);y&&(f=v(l(),r),!1!==f&&f.route===a&&e(f.route,f.params,l(),!1))},removeRoute:function(a){if(a&&a.application&&a.application().name){var b=a.application().name(),b=w[b];if(!b||!b.length)return!1;for(var c=0;c<b.length;c++)if(b[c]===a)return b.splice(c,1),!0;return!1}},route:n,to:function(b){var c;b&&b.url&&(c=document.createElement("a"),c.href=b.url);!0===d(c)&&a.to(b)},replace:function(b){var c;
b&&b.url&&(c=document.createElement("a"),c.href=b.url);!0===d(c,h,!0)&&a.replace(b)},back:a.back,state:a.state,switchApp:function(a){a=u[a];r&&a&&(k(l(),a),d())},start:function(){y||(y=!0,g.when("load").execute("routerBindStateChangeHandler",function(){y&&a.addStateChangeHandler(n)}),c.addEventListener("click",t,!1),d(h,!1))},stop:function(){y&&(a.removeStateChangeHandler(n),c.removeEventListener("click",t,!1),y=!1)},pause:function(){A=!0},unpause:function(){A=!1}}}var p={};a.mixin(p,t(new q));p.createRouter=
t;p.ApplicationBase=u;return p})});