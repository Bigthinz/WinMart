(function(){var e=function(){var e={},t={exports:e};"use strict";function n(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}}t.exports={escape:function(e){return encodeURIComponent(e)},stringify:function(e,t,o,r){t=t||"&";o=o||"=";if(e===null){e=undefined}if(typeof e==="object"){return Object.keys(e).map(function(r){var i=this.escape(n(r))+o;if(Array.isArray(e[r])){return e[r].map(function(e){return i+this.escape(n(e))}).join(t)}else{return i+this.escape(n(e[r]))}}.bind(this)).join(t)}if(!r)return"";return this.escape(n(r))+o+this.escape(n(e))},extract:function(e){var t=window.location.search.match(new RegExp("[\\?\\&]"+e+"=([^\\&]*)(\\&?)","i"));return t?t[1]:t}};return t.exports}();var t=function(){var e={},t={exports:e};t.exports={getLocale:function(e){var e="en-us";try{e="en-us"}catch(t){e="en-us"}return e},setLocale:function(e){try{seajs.config({vars:{locale:e.replace(/\_/g,"-").toLowerCase()}})}catch(t){}}};return t.exports}();var n=function(){var e={},t={exports:e};t.exports={info:function(e){if(window.console){window.console.log(e)}},deprecated:function(e,t,n){if(window.console){window.console.log(e+" is deprecated at [ "+n+" ], use [ "+t+" ] instead of it.")}}};return t.exports}();var o=function(){var e={},t={exports:e};var o=n;var r=/\s+/;function i(){}i.prototype.on=function(e,t,n){var o,i,a;if(!t)return this;o=this.__events||(this.__events={});if(typeof e=="string"){e=e.split(r)}while(i=e.shift()){a=o[i]||(o[i]=[]);a.push(t,n)}return this};i.prototype.once=function(e,t,n){var o=this;var r=function(){o.off(e,r);t.apply(this,arguments)};this.on(e,r,n)};i.prototype.off=function(e,t,n){var o,i,s,c;if(!(o=this.__events)){return this}if(!(e||t||n)){delete this.__events;return this}e=e?e.split(r):a(o);while(i=e.shift()){s=o[i];if(!s)continue;if(!(t||n)){delete o[i];continue}for(c=s.length-2;c>=0;c-=2){if(!(t&&s[c]!==t||n&&s[c+1]!==n)){s.splice(c,2)}}}return this};i.prototype.trigger=function(e){var t,n,o,i,a,c,u=[],l,f=true;if(!(t=this.__events))return this;e=e.split(r);for(a=1,c=arguments.length;a<c;a++){u[a-1]=arguments[a]}while(n=e.shift()){if(o=t.all)o=o.slice();if(i=t[n])i=i.slice();f=s(i,u,this)&&f;f=s(o,[n].concat(u),this)&&f}return f};i.prototype.attach=function(){o.deprecated("attach","on","1.1.0");this.on.apply(this,arguments)};i.prototype.detach=function(){o.deprecated("detach","off","1.1.0");this.on.apply(this,arguments)};i.prototype.notify=function(){o.deprecated("notify","trigger","1.1.0");this.trigger.apply(this,arguments)};i.prototype.emit=i.prototype.trigger;i.mixTo=function(e){e=c(e)?e.prototype:e;var t=i.prototype;for(var n in t){if(t.hasOwnProperty(n)){e[n]=t[n]}}};var a=Object.keys;if(!a){a=function(e){var t=[];for(var n in e){if(e.hasOwnProperty(n)){t.push(n)}}return t}}function s(e,t,n){var o=true;if(e){var r=0,i=e.length,a=t[0],s=t[1],c=t[2];switch(t.length){case 0:for(;r<i;r+=2){o=e[r].call(e[r+1]||n.__context||n)!==false&&o}break;case 1:for(;r<i;r+=2){o=e[r].call(e[r+1]||n.__context||n,a)!==false&&o}break;case 2:for(;r<i;r+=2){o=e[r].call(e[r+1]||n.__context||n,a,s)!==false&&o}break;case 3:for(;r<i;r+=2){o=e[r].call(e[r+1]||n.__context||n,a,s,c)!==false&&o}break;default:for(;r<i;r+=2){o=e[r].apply(e[r+1]||n.__context||n,t)!==false&&o}break}}return o}function c(e){return Object.prototype.toString.call(e)==="[object Function]"}i.create=function(e){o.deprecated("create","new Events()","1.1.0");var t=new i;t.__context=e;return t};var u=new i;for(var l in u){i[l]=u[l]}t.exports=i;return t.exports}();var r=function(){var e={},t={exports:e};var n=e;var o=decodeURIComponent;var r=encodeURIComponent;n.get=function(e,t){c(e);if(typeof t==="function"){t={converter:t}}else{t=t||{}}var n=i(document.cookie,!t["raw"]);return(t.converter||u)(n[e])};n.set=function(e,t,n){c(e);n=n||{};var o=n["expires"];var i=n["domain"];var a=n["path"];if(!n["raw"]){t=r(String(t))}var u=e+"="+t;var l=o;if(typeof l==="number"){l=new Date;l.setDate(l.getDate()+o)}if(l instanceof Date){u+="; expires="+l.toUTCString()}if(s(i)){u+="; domain="+i}if(s(a)){u+="; path="+a}if(n["secure"]){u+="; secure"}document.cookie=u;return u};n.remove=function(e,t){t=t||{};t["expires"]=new Date(0);return this.set(e,"",t)};function i(e,t){var n={};if(a(e)&&e.length>0){var r=t?o:u;var i=e.split(/;\s/g);var s;var c;var l;for(var f=0,d=i.length;f<d;f++){l=i[f].match(/([^=]+)=/i);if(l instanceof Array){try{s=o(l[1]);c=r(i[f].substring(l[1].length+1))}catch(p){}}else{s=o(i[f]);c=""}if(s){n[s]=c}}}return n}function a(e){return typeof e==="string"}function s(e){return a(e)&&e!==""}function c(e){if(!s(e)){throw new TypeError("Cookie name must be a non-empty string")}}function u(e){return e}return t.exports}();var i=function(){var n={},i={exports:n};"use strict";var a=e;var s=t;var c=o;var u=r;var l=function(){};var f=document;var d=f.getElementsByTagName("head")[0]||f.documentElement;var p=/^(?:loaded|complete|undefined)$/;var g=Number(navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/,"$1"))<536;var v=/^([a-z0-9.+-]+:)/i;var m=["/","?","#"];var _={log:function E(e){try{e=e.replace(/ (\w)/g,function(e,t){return t.toUpperCase()});window.goldlog&&window.goldlog.record("/sc.globalxman.thirdlogin","OTHER","type="+e,"H1508277613")}catch(t){}},console:function h(){if(h&&typeof h.log==="function"){h.log.apply(this,arguments)}},getLocale:function(){var e=s.getLocale();if(e&&e.indexOf("-")===2){e=e.split("-")[0]+"_"+e.split("-")[1].toUpperCase()}else{e="en_US"}return e},getPath:function(e){var t=e;t=t.trim();var n=v.exec(t);if(!n){return e}n=n[0];t=t.substr(n.length+2);var o=-1;for(var r=0;r<m.length;r++){var i=t.indexOf(m[r]);if(i!==-1&&(o===-1||i<o))o=i}if(o===-1){o=t.length}return t.slice(o)},getIsLogin:function(){var e=u.get("xman_us_t");if(e&&e.indexOf("sign=y")!==-1){return true}else{return false}},isYahooCnEmail:function(e){e=e||"";var t=e.split("@")[1];return t==="yahoo.com.cn"||t==="yahoo.cn"?true:false},getScript:function(e){if(typeof e==="string"){e={url:e}}setTimeout(function(){var t=f.createElement("script"),n=e.url,o=e.timeout||5e3,r=e.success||l,i=e.error||l,s;if(e.params){n+=(~n.indexOf("?")?"&":"?")+a.stringify(e.params)}t.onload=t.onerror=t.onreadystatechange=function(){if(p.test(t.readyState)){clearTimeout(s);t.onload=t.onerror=t.onreadystatechange=null;d.removeChild(t);t=undefined;r();_.emit("JSONP_END",n,true)}};s=setTimeout(function(){i();_.emit("JSONP_END",n,false)},o);t.setAttribute("type","text/javascript");t.async=true;t.src=n;d.appendChild(t);_.emit("JSONP_SEND",n,true)},0)},getCss:function(e,t){if(typeof t==="function"){t();return}setTimeout(function(){var n=f.createElement("link");n.rel="stylesheet";n.href=e;d.appendChild(n);w(n,t)},0)}};function w(e,t){if(!g&&"onload"in e){e.onload=e.onerror=e.onreadystatechange=function(){if(p.test(e.readyState)){e.onload=e.onerror=e.onreadystatechange=null;e=null;t()}};return}var n=e.sheet;var o;if(g){if(n){o=true}}else if(n){try{if(n.cssRules){o=true}}catch(r){if(r.name==="NS_ERROR_DOM_SECURITY_ERR"){o=true}}}setTimeout(function(){if(o){t()}else{w(e,t)}},20)}c.mixTo(_);i.exports=_;return i.exports}();var a=function(){var e={},t={exports:e};"use strict";var n=o;var r={};n.mixTo(r);r.on("XMAN_BORN",function(e){if(r.current){r.current.destroy()}r.current=e});r.on("XMAN_DIED",function(e){if(r.current===e){r.current=null}});t.exports=r;return t.exports}();var s=function(){var e={},t={exports:e};"use strict";var n=1;var o=null;var r=function(){};t.exports={request:function(e){e=e||{};var t=e.url;var n=e.data||{};var i=e.onSuccess||r;var a=e.onTimeout||r;var s=e.timeout||15e3;var c=function(e){var t="";try{t=$.parseJSON(e.originalEvent.data)}catch(e){}p();i(t)};clearTimeout(o);o=setTimeout(function(){p();a()},15e3);var u=document.createElement("iframe");var l="xfrm"+Math.floor(Math.random()*1e4).toString();var f=0;document.body.appendChild(u);u.style.display="none";u.contentWindow.name=l;window.onmessage=c;var d=document.createElement("form");d.target=l;d.action=t;d.method="POST";document.body.appendChild(d);function p(){clearTimeout(o);try{u.contentWindow.document.write("");u.contentWindow.close();document.body.removeChild(u);document.body.removeChild(d);c=function(){}}catch(e){}}var g;for(var v in n){g=document.createElement("input");g.type="hidden";g.name=v;g.value=n[v];d.appendChild(g)}d.submit()}};return t.exports}();var c=function(){var e={},t={exports:e};"use strict";var n=i;var o=a;var r=s;var c="alibaba.com";var u="https://passport.alipay.com";var l="https://login.alibaba.com/xman/xlogin.js?pd=alibaba";var f="https://login.alibaba.com/xman/xjoin.js?pd=alibaba";var d="https://accounts.alibaba.com/register/guestActivationXman.htm";var p="https://accounts.alibaba.com/register/GuestActivationSendEmailVerifyCodeXman.htm";var g="https://login.alibaba.com/validateST.htm";var v="https://login.alibaba.com/validateSTGroup.htm";var m=function(){};o.on("XMAN_CONFIG",function(e){u=e.xmanRemoteConfig.passportDomain;l=e.xmanRemoteConfig.xlogin_js_url;f=e.xmanRemoteConfig.xjoin_js_url;c=e.xmanRemoteConfig.currentXmanDomain});if(!window.xmanTryAgainLogout||!window.xmanIfReAutoLogout){window.xmanTryAgainLogout=function(){};window.xmanIfReAutoLogout=function(e){if(e.code!==200){var t=document.createElement("script");t.src=u+"/mini_logout.js?callback=xmanTryAgainLogout&site=4";document.body.appendChild(t)}}}var _={isLoggedInFromCookie:function(){return n.getIsLoggedIn()},isLoggedIn:function(e){e=e||m;if(n.getIsLoggedIn()){setTimeout(function(){e(null,true);o.trigger("SET_COOKIES_FINISHED")},0);return}e(null,false)},logout:function(){n.getScript({url:u+"/mini_logout.js",params:{callback:"xmanIfReAutoLogout",site:4},timeout:15e3,error:function(){n.getScript({url:u+"/mini_logout.js",params:{callback:"xmanTryAgainLogout",site:4}})}})},join:function(e){o.trigger("BEFORE_JOIN",e);o.trigger("BEFORE_REQUEST",f,e,"join");e.isPost=e.isPost||"true";e.dmtrack_pageid=e.dmtrack_pageid||encodeURIComponent(window.dmtrack_pageid||"");r.request({url:f,data:e,onSuccess:function(e){if(!e||!e.type||!e.data){o.trigger("SERVER_ERROR",{callbackObj:null,type:"join"})}else{window[e.type]=e.data}o.trigger("AFTER_REQUEST",f,e,"join")},onTimeout:function(){o.trigger("AFTER_REQUEST",f,e,"join");o.trigger("SERVER_ERROR",{callbackObj:null,type:"join"})}})},activation:function(e){r.request({url:d,data:e,onSuccess:function(e){var t,n;if(!e||!e.data){o.trigger("SERVER_ERROR",{callbackObj:null,type:"activation"});return}n=e.type;t=e.data;if(n){window[n]=t}o.trigger("AFTER_REQUEST",d,e,"activation")},onTimeout:function(){o.trigger("AFTER_REQUEST",d,{timeout:true},"activation");o.trigger("SERVER_ERROR",{callbackObj:null,type:"activation"})}})},activationCode:function(e,t,n){r.request({url:p,data:e,onSuccess:function(e){if(typeof t=="function"){t(e)}},onTimeout:function(){if(typeof n=="function"){n()}}})},validateByToken:function(e){var t=(new Date).getTime();if(!window.xmanDealTokenCallback){window.xmanDealTokenCallback=function(t){if(t.code===200){var n=(new Date).getTime();var r=(new Date).getTime();o.once("BEFORE_SUCCESS",function(){var e=(new Date).getTime()});this.validateServiceToken(t.data.st,e)}}.bind(this)}n.getScript({url:u+"/mini_apply_st.js",params:{site:4,callback:"window.xmanDealTokenCallback",token:e.token},timeout:15e3,error:function(){o.trigger("TOKEN_TIMEOUT")}})},validateServiceToken:function(e,t){t=t||{};var r=t.requestUrl?"&"+t.requestUrl.split("?")[1]:"",i=g+"?st="+e+r,a=t.type||"login";o.trigger("BEFORE_REQUEST",i,t,a);n.getScript({url:i,params:t.objData||{},success:function(){if(!window.xman_success&&!window.need_activation){if(a=="login"){window.xlogin_failed={error_type:"unavailable"}}else{window.xjoin_failed={error_type:"unavailable"}}}o.trigger("AFTER_REQUEST",i,t,a)},error:function(){window.xlogin_failed={error_type:"unavailable"};o.trigger("AFTER_REQUEST",i,t,a)}})},validateServiceTokenGroup:function(e,t){t=t||{};var r=v+"?st="+e,i=t.type||"login";if(window.pageConfig&&window.pageConfig.host_token){t._host_token_=window.pageConfig.host_token}o.trigger("BEFORE_REQUEST",r,t,i);n.getScript({url:r,params:t,success:function(){if(!window.xman_success&&!window.need_activation){if(i=="login"){window.xlogin_failed={error_type:"unavailable"}}else if(i=="activation"){window.xactivation_failed={error_type:"unavailable"}}else{window.xjoin_failed={error_type:"unavailable"}}}o.trigger("AFTER_REQUEST",r,t,i)},error:function(){window.xlogin_failed={error_type:"unavailable"};o.trigger("AFTER_REQUEST",r,t,i)}})},refreshTvs:function(e){var t=e.xlogin_urls,r=e.time_out?parseInt(e.time_out,10):1e4,i="common.xman.SetCookie",a=false,s;if(!t||t.length===0)return;AE.use([i],function(t){if(!a){clearTimeout(s);o.trigger("SET_COOKIES_FINISHED",e);a=true}AE.remove(i)});s=setTimeout(function(){if(!a){o.trigger("SET_COOKIES_FINISHED",e);a=true}},3e3);n.getScript({url:t[0],params:{u_token:e.umidToken||"",moduleKey:i,rnd:(new Date).getTime()},timeout:r,error:function(){if(!a){clearTimeout(s);o.trigger("SET_COOKIES_FINISHED",e);a=true}}})},checkUA:function(e){var t="https://login."+c+"/xman/ua_check.do";o.trigger("BEFORE_REQUEST",t,e,"login");n.getScript({url:t,params:e,timeout:5e3,success:function(){o.trigger("AFTER_REQUEST",t,e,"login")}})}};t.exports=_;return t.exports}();var u=function(){var e={},t={exports:e};t.exports={minThirdLoginUrl:"https://g.alicdn.com/vip/havana-login/0.1.3/js/thirdpart-login-min.js",xmanConfigUrl:"https://login.alibaba.com/xman/xman_config_sc.js?random=249&pd=alibaba&display=p&style=b&login=a&join=d&delay=true&back=n"};return t.exports}();var l=function(){var e={},t={exports:e};var n=function(e,t){var n=document,o=n.getElementsByTagName("body")[0]||n.getElementsByTagName("head")[0],r=n.createElement("script"),i=navigator.userAgent.toLowerCase(),a=i.match(/msie ([\d.]+)/);r.setAttribute("defer",true);r.setAttribute("async",true);r.onload=r.onreadystatechange=function(){if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){if(window.ActiveXObject&&a&&a.length>1&&a[1].indexOf("10")!==-1){if(this.readyState==="complete"){t&&t();r.onload=r.onreadystatechange=null}}else{t&&t();r.onload=r.onreadystatechange=null}}};o.appendChild(r);r.src=e};t.exports=n;return t.exports}();var f=function(){var e={},t={exports:e};if(typeof window.AE==="undefined"||typeof window.AE.use==="undefined"){window.AE={modules:{},pending:{},use:function(e,t){var n=this.modules[e];if(n){if(!n.available){n.factory.call(n);n.available=true}t(n.exports)}else{this.pending[e]={callback:t}}},define:function(e,t){this.modules[e]={available:false,factory:t,name:e,exports:null};if(this.pending[e]){this.use(e,this.pending[e].callback)}},remove:function(e){this.modules[e]=undefined}}}t.exports=window.AE;return t.exports}();var d=function(){var e={},t={exports:e};var n=u;var o=l;var r=f;var i=false;t.exports=function(e){if(!i){i=true;o(n.xmanConfigUrl)}r.use("AE.common.xman.xmanConfig",e)};return t.exports}();var p=function(){var e={},t={exports:e};"use strict";var n=a;var o=c;n.on("AFTER_REQUEST",function(e,t,o){if(typeof window.xjoin_failed==="object"){n.emit("XMAN_FAILED","join");n.trigger("SERVER_ERROR",{callbackObj:window.xjoin_failed,type:"join"});window.xjoin_failed=undefined}});return t.exports}();var g=function(){var e={},t={exports:e};"use strict";var n=a;var o=c;n.on("AFTER_REQUEST",function(e,t,r){if(typeof window.xlogin_failed==="object"){n.emit("XMAN_FAILED","signIn");var i=window.xlogin_failed.error_type;if(i==="non_admin_disabled"||i==="non_admin_frozen"){o.logout()}n.trigger("SERVER_ERROR",{callbackObj:window.xlogin_failed,type:"signIn"});window.xlogin_failed=undefined}});return t.exports}();var v=function(){var e={},t={exports:e};"use strict";var n=a;var o=c;n.on("AFTER_REQUEST",function(e,t,r){if(typeof window.xman_success==="object"){window.xman_success.type=r;window.xman_success.dataObj=t;var i=window.xman_success;if(i.isNeedUmid==true||i.isNeedUmid=="true"){n.trigger("REGENERATE_UMID",i);setTimeout(function(){n.trigger("BEFORE_SUCCESS",i);o.refreshTvs(i);n.trigger("AFTER_SUCCESS",i)},100)}else{n.trigger("BEFORE_SUCCESS",window.xman_success);o.refreshTvs(window.xman_success);n.trigger("AFTER_SUCCESS",window.xman_success)}window.xman_success=undefined}});return t.exports}();var m=function(){var e={},t={exports:e};"use strict";var n=a;n.on("AFTER_REQUEST",function(e,t,o){if(typeof window.sub_company_account_reject==="object"){n.trigger("SUB_COMPANY_REGISTER_REJECT",window.sub_company_account_reject);window.sub_company_account_reject=undefined}});return t.exports}();var _=function(){var e={},t={exports:e};"use strict";var n=a;n.on("AFTER_REQUEST",function(e,t,o){if(typeof window.sub_company_account_pass==="object"){n.on("XMAN_NEED_ACTIVATION");var r=window.sub_company_account_pass;n.trigger("FROM_SUB_COMPANY_ACCOUNT",window.sub_company_account_pass);window.sub_company_account_pass=undefined}});return t.exports}();var w=function(){var e={},t={exports:e};"use strict";var n=a;var o=c;n.on("AFTER_REQUEST",function(e,t,r){if(typeof window.xman_login_token==="object"||typeof window.xman_join_token==="object"||typeof window.xman_activation_token==="object"){var i;if(window.xman_login_token){i=window.xman_login_token.token}else{if(window.xman_join_token){i=window.xman_join_token.token}else if(window.xman_activation_token){i=window.xman_activation_token.token}}var a={token:i,type:r,requestUrl:e,objData:t};n.trigger("BEFORE_VALIDATE_BY_TOKEN",a);o.validateByToken(a);n.trigger("AFTER_VALIDATE_BY_TOKEN",a);window.xman_login_token=undefined;window.xman_join_token=undefined}});return t.exports}();var E=function(){var e={},t={exports:e};"use strict";var n=a;n.on("AFTER_REQUEST",function(e,t,o){if(typeof window.xlogin_ua_check==="object"){n.trigger("UA_CHECK_RESULT",{needcode:window.xlogin_ua_check.needcode==1});window.xlogin_ua_check=undefined}});return t.exports}();var h=function(){var e={},t={exports:e};"use strict";var n=a;n.on("AFTER_REQUEST",function(e,t,o){if(typeof window.need_activation==="object"){n.emit("NEED_ACTIVATION",{token:window.need_activation.token});window.need_activation=undefined}});return t.exports}();var x=function(){var e={},t={exports:e};"use strict";p;g;v;m;_;w;E;h;return t.exports}();var y=function(){var e={},n={exports:e};var o=c;var r=i;var a=t;var s=a.getLocale()||"en-us";var p=u;var g=l;var v=d;x;f;var m={minThirdLoginUrl:p.minThirdLoginUrl,xmanConfigUrl:p.xmanConfigUrl,onSuccess:function(e){r.console(e)},onError:function(e){r.console(e)}};var _={targetId:"",loginType:[{name:"facebook",responseAction:"window",text:"sign with facebook"},{name:"google",responseAction:"window",text:"sign with google"},{name:"linkedin",responseAction:"window",text:"sign with linkedin"},{name:"twitter",responseAction:"window",text:"sign with twitter"}],appName:"icbu",iframeUrl:"https://passport.alibaba.com/sns_oauth.htm",returnUrl:"https://login.alibaba.com/auto_login.htm",iconSize:32};var w={init:function(e){var t=this;if(!e.targetId||!e.appName){r.console("targetId or appName can't be empty");return}_.targetId=e.targetId;_.appName=e.appName||_.appName;_.iframeUrl=e.iframeUrl||_.iframeUrl;_.returnUrl=e.returnUrl||_.returnUrl;m["onSuccess"]=e.onSuccess||m.onSuccess;m["onError"]=e.onError||m.onError;g(m.minThirdLoginUrl,t._initLoginLoader.bind(t))},_initLoginLoader:function(){var e=this;var t=new window.ThirdPartLogin;v(function(t){e.remoteConfig=t});t.addEvent("onMessage",function(t){if(t.action&&/^hasLoginResult|loginResult$/.test(t.action)){if(t.resultCode==100&&t.st){r.log("success");e._onLogin(t)}else{r.log("fail");m.onError(t)}}});t.init(_)},_onLogin:function(e){var t=this.remoteConfig;var n={passport:e.loginId,language:s,join_from:"alibaba",u_token:t||t.umidToken};if(/^xstandardLoginWithPartner|standardlogin$/.test(t.getLoginTypeName)){n.return_url=window.location.href}o.validateServiceTokenGroup(e.st,n);m.onSuccess(e)}};n.exports=w;return n.exports}();var b=function(){var e={},t={exports:e};if(typeof window.AE==="undefined"||typeof window.AE.use==="undefined"){window.AE={modules:{},pending:{},use:function(e,t){var n=this.modules[e];if(n){if(!n.available){n.factory.call(n);n.available=true}t(n.exports)}else{this.pending[e]={callback:t}}},define:function(e,t){this.modules[e]={available:false,factory:t,name:e,exports:null};if(this.pending[e]){this.use(e,this.pending[e].callback)}},remove:function(e){this.modules[e]=undefined}}}t.exports=window.AE;return t.exports}();var T=function(){var e={},n={exports:e};var o=r;var a=c;var s=t;var u=i;var l=s.getLocale()||"en-us";var f=d;var p=b;var g=/\b4\b/;var v="https://passport.alibaba.com/mini_login_check.js";var m=4,_=false,w=true,E="icbu";var h=function(){};function x(e){return g.test(e)}function y(){return!(x(o.get("_hvn_login"))||!x(o.get("_hvn_lgc_"))||window.__triedAutoLogin)}function T(e){if(!y()||!e){return}window.__triedAutoLogin=true;var t=e.umidToken;var n={site:m,longLoginCheck:w,appName:E,isMobile:_,callback:"__autoLoginJSONP"};if(t){n.umidToken=t}window.__autoLoginJSONP=function(t){if(t&&"data"in t&&t.data.st){u.log("auto-login-success");var n={language:l,join_from:"alibaba",u_token:e||e.umidToken};if(/^xstandardLoginWithPartner|standardlogin$/.test(e.getLoginTypeName)){n.return_url=window.location.href}a.validateServiceTokenGroup(t.data.st,n)}else{u.log("auto-login-failed")}};u.getScript({url:v,params:n})}n.exports={canLogin:y,login:function(){f(function(e){T(e)})}};return n.exports}();var S=function(){var e={},t={exports:e};var n=y;n.autoLogin=T;t.exports=n;return t.exports}();var R=function(){var e={},t={exports:e};var n=S;window.SCHD_COMS=window.SCHD_COMS||{};window.SCHD_COMS.ThirdPartLogin=n;t.exports=n;return t.exports}()})();