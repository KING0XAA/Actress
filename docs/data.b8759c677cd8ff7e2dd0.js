!function(e){function n(n){for(var t,o,i=n[0],a=n[1],u=0,f=[];u<i.length;u++)o=i[u],r[o]&&f.push(r[o][0]),r[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(c&&c(n);f.length;)f.shift()()}var t={},r={0:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=i);var a,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({2:"jsondata"}[e]||e)+"."+{2:"a27b4eacba4f6f7680b3",3:"d4615f32b0000490517f"}[e]+".js"}(e),a=function(n){c.onerror=c.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,t[1](a)}r[e]=void 0}};var f=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,u.appendChild(c)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var c=a;o(o.s=3)}([,function(e,n,t){(function(n){var t;e.exports=function e(n,r,o){function i(u,c){if(!r[u]){if(!n[u]){var f="function"==typeof t&&t;if(!c&&f)return t(u,!0);if(a)return a(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var l=r[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return i(t||e)},l,l.exports,e,n,r,o)}return r[u].exports}for(var a="function"==typeof t&&t,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(e,t,r){(function(e){"use strict";var n,r,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(s),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),n=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)n="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var n=e.document.createElement("script");n.onreadystatechange=function(){s(),n.onreadystatechange=null,n.parentNode.removeChild(n),n=null},e.document.documentElement.appendChild(n)}:function(){setTimeout(s,0)};else{var c=new e.MessageChannel;c.port1.onmessage=s,n=function(){c.port2.postMessage(0)}}var f=[];function s(){var e,n;r=!0;for(var t=f.length;t;){for(n=f,f=[],e=-1;++e<t;)n[e]();t=f.length}r=!1}t.exports=function(e){1!==f.push(e)||r||n()}}).call(this,void 0!==n?n:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,n,t){"use strict";var r=e(1);function o(){}var i={},a=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==o&&v(this,e)}function s(e,n,t){this.promise=e,"function"==typeof n&&(this.onFulfilled=n,this.callFulfilled=this.otherCallFulfilled),"function"==typeof t&&(this.onRejected=t,this.callRejected=this.otherCallRejected)}function l(e,n,t){r(function(){var r;try{r=n(t)}catch(n){return i.reject(e,n)}r===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,r)})}function d(e){var n=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof n)return function(){n.apply(e,arguments)}}function v(e,n){var t=!1;function r(n){t||(t=!0,i.reject(e,n))}function o(n){t||(t=!0,i.resolve(e,n))}var a=h(function(){n(o,r)});"error"===a.status&&r(a.value)}function h(e,n){var t={};try{t.value=e(n),t.status="success"}catch(e){t.status="error",t.value=e}return t}n.exports=f,f.prototype.catch=function(e){return this.then(null,e)},f.prototype.then=function(e,n){if("function"!=typeof e&&this.state===u||"function"!=typeof n&&this.state===a)return this;var t=new this.constructor(o);if(this.state!==c){var r=this.state===u?e:n;l(t,r,this.outcome)}else this.queue.push(new s(t,e,n));return t},s.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},s.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},s.prototype.callRejected=function(e){i.reject(this.promise,e)},s.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},i.resolve=function(e,n){var t=h(d,n);if("error"===t.status)return i.reject(e,t.value);var r=t.value;if(r)v(e,r);else{e.state=u,e.outcome=n;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(n)}return e},i.reject=function(e,n){e.state=a,e.outcome=n;for(var t=-1,r=e.queue.length;++t<r;)e.queue[t].callRejected(n);return e},f.resolve=function(e){return e instanceof this?e:i.resolve(new this(o),e)},f.reject=function(e){var n=new this(o);return i.reject(n,e)},f.all=function(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var t=e.length,r=!1;if(!t)return this.resolve([]);for(var a=new Array(t),u=0,c=-1,f=new this(o);++c<t;)s(e[c],c);return f;function s(e,o){n.resolve(e).then(function(e){a[o]=e,++u!==t||r||(r=!0,i.resolve(f,a))},function(e){r||(r=!0,i.reject(f,e))})}},f.race=function(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var t=e.length,r=!1;if(!t)return this.resolve([]);for(var a=-1,u=new this(o);++a<t;)c(e[a]);return u;function c(e){n.resolve(e).then(function(e){r||(r=!0,i.resolve(u,e))},function(e){r||(r=!0,i.reject(u,e))})}}},{1:1}],3:[function(e,t,r){(function(n){"use strict";"function"!=typeof n.Promise&&(n.Promise=e(2))}).call(this,void 0!==n?n:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();function i(e,n){e=e||[],n=n||{};try{return new Blob(e,n)}catch(i){if("TypeError"!==i.name)throw i;for(var t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,r=new t,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(n.type)}}"undefined"==typeof Promise&&e(3);var a=Promise;function u(e,n){n&&e.then(function(e){n(null,e)},function(e){n(e)})}function c(e,n,t){"function"==typeof n&&e.then(n),"function"==typeof t&&e.catch(t)}function f(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function s(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var l="local-forage-detect-blob-support",d=void 0,v={},h=Object.prototype.toString,p="readonly",y="readwrite";function b(e){return"boolean"==typeof d?a.resolve(d):function(e){return new a(function(n){var t=e.transaction(l,y),r=i([""]);t.objectStore(l).put(r,"key"),t.onabort=function(e){e.preventDefault(),e.stopPropagation(),n(!1)},t.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),t=navigator.userAgent.match(/Edge\//);n(t||!e||parseInt(e[1],10)>=43)}}).catch(function(){return!1})}(e).then(function(e){return d=e})}function m(e){var n=v[e.name],t={};t.promise=new a(function(e,n){t.resolve=e,t.reject=n}),n.deferredOperations.push(t),n.dbReady?n.dbReady=n.dbReady.then(function(){return t.promise}):n.dbReady=t.promise}function g(e){var n=v[e.name],t=n.deferredOperations.pop();if(t)return t.resolve(),t.promise}function _(e,n){var t=v[e.name],r=t.deferredOperations.pop();if(r)return r.reject(n),r.promise}function w(e,n){return new a(function(t,r){if(v[e.name]=v[e.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},e.db){if(!n)return t(e.db);m(e),e.db.close()}var i=[e.name];n&&i.push(e.version);var a=o.open.apply(o,i);n&&(a.onupgradeneeded=function(n){var t=a.result;try{t.createObjectStore(e.storeName),n.oldVersion<=1&&t.createObjectStore(l)}catch(t){if("ConstraintError"!==t.name)throw t;console.warn('The database "'+e.name+'" has been upgraded from version '+n.oldVersion+" to version "+n.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),a.onerror=function(e){e.preventDefault(),r(a.error)},a.onsuccess=function(){t(a.result),g(e)}})}function I(e){return w(e,!1)}function S(e){return w(e,!0)}function E(e,n){if(!e.db)return!0;var t=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==n&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||t){if(t){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function N(e){var n=function(e){for(var n=e.length,t=new ArrayBuffer(n),r=new Uint8Array(t),o=0;o<n;o++)r[o]=e.charCodeAt(o);return t}(atob(e.data));return i([n],{type:e.type})}function j(e){return e&&e.__local_forage_encoded_blob}function O(e){var n=this,t=n._initReady().then(function(){var e=v[n._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return c(t,e,e),t}function A(e,n,t,r){void 0===r&&(r=1);try{var o=e.db.transaction(e.storeName,n);t(null,o)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return a.resolve().then(function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),S(e)}).then(function(){return function(e){m(e);for(var n=v[e.name],t=n.forages,r=0;r<t.length;r++){var o=t[r];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,I(e).then(function(n){return e.db=n,E(e)?S(e):n}).then(function(r){e.db=n.db=r;for(var o=0;o<t.length;o++)t[o]._dbInfo.db=r}).catch(function(n){throw _(e,n),n})}(e).then(function(){A(e,n,t,r-1)})}).catch(t);t(o)}}var R={_driver:"asyncStorage",_initStorage:function(e){var n=this,t={db:null};if(e)for(var r in e)t[r]=e[r];var o=v[t.name];o||(o={forages:[],db:null,dbReady:null,deferredOperations:[]},v[t.name]=o),o.forages.push(n),n._initReady||(n._initReady=n.ready,n.ready=O);var i=[];function u(){return a.resolve()}for(var c=0;c<o.forages.length;c++){var f=o.forages[c];f!==n&&i.push(f._initReady().catch(u))}var s=o.forages.slice(0);return a.all(i).then(function(){return t.db=o.db,I(t)}).then(function(e){return t.db=e,E(t,n._defaultConfig.version)?S(t):e}).then(function(e){t.db=o.db=e,n._dbInfo=t;for(var r=0;r<s.length;r++){var i=s[r];i!==n&&(i._dbInfo.db=t.db,i._dbInfo.version=t.version)}})},_support:function(){try{if(!o)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),n="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||n)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:function(e,n){var t=this,r=new a(function(n,r){t.ready().then(function(){A(t._dbInfo,p,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=a.openCursor(),c=1;u.onsuccess=function(){var t=u.result;if(t){var r=t.value;j(r)&&(r=N(r));var o=e(r,t.key,c++);void 0!==o?n(o):t.continue()}else n()},u.onerror=function(){r(u.error)}}catch(e){r(e)}})}).catch(r)});return u(r,n),r},getItem:function(e,n){var t=this;e=f(e);var r=new a(function(n,r){t.ready().then(function(){A(t._dbInfo,p,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=a.get(e);u.onsuccess=function(){var e=u.result;void 0===e&&(e=null),j(e)&&(e=N(e)),n(e)},u.onerror=function(){r(u.error)}}catch(e){r(e)}})}).catch(r)});return u(r,n),r},setItem:function(e,n,t){var r=this;e=f(e);var o=new a(function(t,o){var i;r.ready().then(function(){return i=r._dbInfo,"[object Blob]"===h.call(n)?b(i.db).then(function(e){return e?n:function(e){return new a(function(n,t){var r=new FileReader;r.onerror=t,r.onloadend=function(t){var r=btoa(t.target.result||"");n({__local_forage_encoded_blob:!0,data:r,type:e.type})},r.readAsBinaryString(e)})}(n)}):n}).then(function(n){A(r._dbInfo,y,function(i,a){if(i)return o(i);try{var u=a.objectStore(r._dbInfo.storeName);null===n&&(n=void 0);var c=u.put(n,e);a.oncomplete=function(){void 0===n&&(n=null),t(n)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}})}).catch(o)});return u(o,t),o},removeItem:function(e,n){var t=this;e=f(e);var r=new a(function(n,r){t.ready().then(function(){A(t._dbInfo,y,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=a.delete(e);i.oncomplete=function(){n()},i.onerror=function(){r(u.error)},i.onabort=function(){var e=u.error?u.error:u.transaction.error;r(e)}}catch(e){r(e)}})}).catch(r)});return u(r,n),r},clear:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){A(n._dbInfo,y,function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName),a=i.clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=a.error?a.error:a.transaction.error;t(e)}}catch(e){t(e)}})}).catch(t)});return u(t,e),t},length:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){A(n._dbInfo,p,function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName),a=i.count();a.onsuccess=function(){e(a.result)},a.onerror=function(){t(a.error)}}catch(e){t(e)}})}).catch(t)});return u(t,e),t},key:function(e,n){var t=this,r=new a(function(n,r){e<0?n(null):t.ready().then(function(){A(t._dbInfo,p,function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=!1,c=a.openCursor();c.onsuccess=function(){var t=c.result;t?0===e?n(t.key):u?n(t.key):(u=!0,t.advance(e)):n(null)},c.onerror=function(){r(c.error)}}catch(e){r(e)}})}).catch(r)});return u(r,n),r},keys:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){A(n._dbInfo,p,function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName),a=i.openCursor(),u=[];a.onsuccess=function(){var n=a.result;n?(u.push(n.key),n.continue()):e(u)},a.onerror=function(){t(a.error)}}catch(e){t(e)}})}).catch(t)});return u(t,e),t},dropInstance:function(e,n){n=s.apply(this,arguments);var t,r=this.config();if((e="function"!=typeof e&&e||{}).name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName),e.name){var i=e.name===r.name&&this._dbInfo.db,c=i?a.resolve(this._dbInfo.db):I(e).then(function(n){var t=v[e.name],r=t.forages;t.db=n;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=n;return n});t=e.storeName?c.then(function(n){if(n.objectStoreNames.contains(e.storeName)){var t=n.version+1;m(e);var r=v[e.name],i=r.forages;n.close();for(var u=0;u<i.length;u++){var c=i[u];c._dbInfo.db=null,c._dbInfo.version=t}var f=new a(function(n,r){var i=o.open(e.name,t);i.onerror=function(e){var n=i.result;n.close(),r(e)},i.onupgradeneeded=function(){var n=i.result;n.deleteObjectStore(e.storeName)},i.onsuccess=function(){var e=i.result;e.close(),n(e)}});return f.then(function(e){r.db=e;for(var n=0;n<i.length;n++){var t=i[n];t._dbInfo.db=e,g(t._dbInfo)}}).catch(function(n){throw(_(e,n)||a.resolve()).catch(function(){}),n})}}):c.then(function(n){m(e);var t=v[e.name],r=t.forages;n.close();for(var i=0;i<r.length;i++){var u=r[i];u._dbInfo.db=null}var c=new a(function(n,t){var r=o.deleteDatabase(e.name);r.onerror=r.onblocked=function(e){var n=r.result;n&&n.close(),t(e)},r.onsuccess=function(){var e=r.result;e&&e.close(),n(e)}});return c.then(function(e){t.db=e;for(var n=0;n<r.length;n++){var o=r[n];g(o._dbInfo)}}).catch(function(n){throw(_(e,n)||a.resolve()).catch(function(){}),n})})}else t=a.reject("Invalid arguments");return u(t,n),t}},D="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",x="~~local_forage_type~",k=/^~~local_forage_type~([^~]+)~/,B="__lfsc__:",T=B.length,C="arbf",L="blob",M="si08",F="ui08",P="uic8",z="si16",U="si32",q="ur16",W="ui32",J="fl32",H="fl64",Q=T+C.length,V=Object.prototype.toString;function G(e){var n,t,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(n=0;n<u;n+=4)t=D.indexOf(e[n]),r=D.indexOf(e[n+1]),o=D.indexOf(e[n+2]),i=D.indexOf(e[n+3]),s[c++]=t<<2|r>>4,s[c++]=(15&r)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function K(e){var n,t=new Uint8Array(e),r="";for(n=0;n<t.length;n+=3)r+=D[t[n]>>2],r+=D[(3&t[n])<<4|t[n+1]>>4],r+=D[(15&t[n+1])<<2|t[n+2]>>6],r+=D[63&t[n+2]];return t.length%3==2?r=r.substring(0,r.length-1)+"=":t.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}var X={serialize:function(e,n){var t="";if(e&&(t=V.call(e)),e&&("[object ArrayBuffer]"===t||e.buffer&&"[object ArrayBuffer]"===V.call(e.buffer))){var r,o=B;e instanceof ArrayBuffer?(r=e,o+=C):(r=e.buffer,"[object Int8Array]"===t?o+=M:"[object Uint8Array]"===t?o+=F:"[object Uint8ClampedArray]"===t?o+=P:"[object Int16Array]"===t?o+=z:"[object Uint16Array]"===t?o+=q:"[object Int32Array]"===t?o+=U:"[object Uint32Array]"===t?o+=W:"[object Float32Array]"===t?o+=J:"[object Float64Array]"===t?o+=H:n(new Error("Failed to get type for BinaryArray"))),n(o+K(r))}else if("[object Blob]"===t){var i=new FileReader;i.onload=function(){var t=x+e.type+"~"+K(this.result);n(B+L+t)},i.readAsArrayBuffer(e)}else try{n(JSON.stringify(e))}catch(t){console.error("Couldn't convert value into a JSON string: ",e),n(null,t)}},deserialize:function(e){if(e.substring(0,T)!==B)return JSON.parse(e);var n,t=e.substring(Q),r=e.substring(T,Q);if(r===L&&k.test(t)){var o=t.match(k);n=o[1],t=t.substring(o[0].length)}var a=G(t);switch(r){case C:return a;case L:return i([a],{type:n});case M:return new Int8Array(a);case F:return new Uint8Array(a);case P:return new Uint8ClampedArray(a);case z:return new Int16Array(a);case q:return new Uint16Array(a);case U:return new Int32Array(a);case W:return new Uint32Array(a);case J:return new Float32Array(a);case H:return new Float64Array(a);default:throw new Error("Unkown type: "+r)}},stringToBuffer:G,bufferToString:K};function Y(e,n,t,r){e.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],t,r)}function Z(e,n,t,r,o,i){e.executeSql(t,r,o,function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[n.storeName],function(e,u){u.rows.length?i(e,a):Y(e,n,function(){e.executeSql(t,r,o,i)},i)},i):i(e,a)},i)}var $={_driver:"webSQLStorage",_initStorage:function(e){var n=this,t={db:null};if(e)for(var r in e)t[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new a(function(e,r){try{t.db=openDatabase(t.name,String(t.version),t.description,t.size)}catch(e){return r(e)}t.db.transaction(function(o){Y(o,t,function(){n._dbInfo=t,e()},function(e,n){r(n)})},r)});return t.serializer=X,o},_support:"function"==typeof openDatabase,iterate:function(e,n){var t=this,r=new a(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){Z(t,o,"SELECT * FROM "+o.storeName,[],function(t,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,c.key,u+1)))return void n(f)}n()},function(e,n){r(n)})})}).catch(r)});return u(r,n),r},getItem:function(e,n){var t=this;e=f(e);var r=new a(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){Z(t,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],function(e,t){var r=t.rows.length?t.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),n(r)},function(e,n){r(n)})})}).catch(r)});return u(r,n),r},setItem:function(e,n,t){return function e(n,t,r,o){var i=this;n=f(n);var c=new a(function(a,u){i.ready().then(function(){void 0===t&&(t=null);var c=t,f=i._dbInfo;f.serializer.serialize(t,function(t,s){s?u(s):f.db.transaction(function(e){Z(e,f,"INSERT OR REPLACE INTO "+f.storeName+" (key, value) VALUES (?, ?)",[n,t],function(){a(c)},function(e,n){u(n)})},function(t){if(t.code===t.QUOTA_ERR){if(o>0)return void a(e.apply(i,[n,c,r,o-1]));u(t)}})})}).catch(u)});return u(c,r),c}.apply(this,[e,n,t,1])},removeItem:function(e,n){var t=this;e=f(e);var r=new a(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){Z(t,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],function(){n()},function(e,n){r(n)})})}).catch(r)});return u(r,n),r},clear:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){var r=n._dbInfo;r.db.transaction(function(n){Z(n,r,"DELETE FROM "+r.storeName,[],function(){e()},function(e,n){t(n)})})}).catch(t)});return u(t,e),t},length:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){var r=n._dbInfo;r.db.transaction(function(n){Z(n,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],function(n,t){var r=t.rows.item(0).c;e(r)},function(e,n){t(n)})})}).catch(t)});return u(t,e),t},key:function(e,n){var t=this,r=new a(function(n,r){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(t){Z(t,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],function(e,t){var r=t.rows.length?t.rows.item(0).key:null;n(r)},function(e,n){r(n)})})}).catch(r)});return u(r,n),r},keys:function(e){var n=this,t=new a(function(e,t){n.ready().then(function(){var r=n._dbInfo;r.db.transaction(function(n){Z(n,r,"SELECT key FROM "+r.storeName,[],function(n,t){for(var r=[],o=0;o<t.rows.length;o++)r.push(t.rows.item(o).key);e(r)},function(e,n){t(n)})})}).catch(t)});return u(t,e),t},dropInstance:function(e,n){n=s.apply(this,arguments);var t=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var r,o=this;return u(r=e.name?new a(function(n){var r;r=e.name===t.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?n({db:r,storeNames:[e.storeName]}):n(function(e){return new a(function(n,t){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(t,r){for(var o=[],i=0;i<r.rows.length;i++)o.push(r.rows.item(i).name);n({db:e,storeNames:o})},function(e,n){t(n)})},function(e){t(e)})})}(r))}).then(function(e){return new a(function(n,t){e.db.transaction(function(r){function o(e){return new a(function(n,t){r.executeSql("DROP TABLE IF EXISTS "+e,[],function(){n()},function(e,n){t(n)})})}for(var i=[],u=0,c=e.storeNames.length;u<c;u++)i.push(o(e.storeNames[u]));a.all(i).then(function(){n()}).catch(function(e){t(e)})},function(e){t(e)})})}):a.reject("Invalid arguments"),n),r}};function ee(e,n){var t=e.name+"/";return e.storeName!==n.storeName&&(t+=e.storeName+"/"),t}function ne(){return!function(){try{return localStorage.setItem("_localforage_support_test",!0),localStorage.removeItem("_localforage_support_test"),!1}catch(e){return!0}}()||localStorage.length>0}var te={_driver:"localStorageWrapper",_initStorage:function(e){var n={};if(e)for(var t in e)n[t]=e[t];return n.keyPrefix=ee(e,this._defaultConfig),ne()?(this._dbInfo=n,n.serializer=X,a.resolve()):a.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:function(e,n){var t=this,r=t.ready().then(function(){for(var n=t._dbInfo,r=n.keyPrefix,o=r.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(r)){var f=localStorage.getItem(c);if(f&&(f=n.serializer.deserialize(f)),void 0!==(f=e(f,c.substring(o),a++)))return f}}});return u(r,n),r},getItem:function(e,n){var t=this;e=f(e);var r=t.ready().then(function(){var n=t._dbInfo,r=localStorage.getItem(n.keyPrefix+e);return r&&(r=n.serializer.deserialize(r)),r});return u(r,n),r},setItem:function(e,n,t){var r=this;e=f(e);var o=r.ready().then(function(){void 0===n&&(n=null);var t=n;return new a(function(o,i){var a=r._dbInfo;a.serializer.serialize(n,function(n,r){if(r)i(r);else try{localStorage.setItem(a.keyPrefix+e,n),o(t)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}})})});return u(o,t),o},removeItem:function(e,n){var t=this;e=f(e);var r=t.ready().then(function(){var n=t._dbInfo;localStorage.removeItem(n.keyPrefix+e)});return u(r,n),r},clear:function(e){var n=this,t=n.ready().then(function(){for(var e=n._dbInfo.keyPrefix,t=localStorage.length-1;t>=0;t--){var r=localStorage.key(t);0===r.indexOf(e)&&localStorage.removeItem(r)}});return u(t,e),t},length:function(e){var n=this.keys().then(function(e){return e.length});return u(n,e),n},key:function(e,n){var t=this,r=t.ready().then(function(){var n,r=t._dbInfo;try{n=localStorage.key(e)}catch(e){n=null}return n&&(n=n.substring(r.keyPrefix.length)),n});return u(r,n),r},keys:function(e){var n=this,t=n.ready().then(function(){for(var e=n._dbInfo,t=localStorage.length,r=[],o=0;o<t;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r});return u(t,e),t},dropInstance:function(e,n){if(n=s.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var t=this.config();e.name=e.name||t.name,e.storeName=e.storeName||t.storeName}var r,o=this;return u(r=e.name?new a(function(n){e.storeName?n(ee(e,o._defaultConfig)):n(e.name+"/")}).then(function(e){for(var n=localStorage.length-1;n>=0;n--){var t=localStorage.key(n);0===t.indexOf(e)&&localStorage.removeItem(t)}}):a.reject("Invalid arguments"),n),r}},re=function(e,n){return e===n||"number"==typeof e&&"number"==typeof n&&isNaN(e)&&isNaN(n)},oe=function(e,n){for(var t=e.length,r=0;r<t;){if(re(e[r],n))return!0;r++}return!1},ie=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},ae={},ue={},ce={INDEXEDDB:R,WEBSQL:$,LOCALSTORAGE:te},fe=[ce.INDEXEDDB._driver,ce.WEBSQL._driver,ce.LOCALSTORAGE._driver],se=["dropInstance"],le=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(se),de={description:"",driver:fe.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function ve(e,n){e[n]=function(){var t=arguments;return e.ready().then(function(){return e[n].apply(e,t)})}}function he(){for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var t in n)n.hasOwnProperty(t)&&(ie(n[t])?arguments[0][t]=n[t].slice():arguments[0][t]=n[t])}return arguments[0]}var pe=function(){function e(n){for(var t in function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),ce)if(ce.hasOwnProperty(t)){var r=ce[t],o=r._driver;this[t]=o,ae[o]||this.defineDriver(r)}this._defaultConfig=he({},de),this._config=he({},this._defaultConfig,n),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":r(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var n in e){if("storeName"===n&&(e[n]=e[n].replace(/\W/g,"_")),"version"===n&&"number"!=typeof e[n])return new Error("Database version must be a number.");this._config[n]=e[n]}return!("driver"in e&&e.driver)||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,n,t){var r=new a(function(n,t){try{var r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void t(o);for(var i=le.concat("_initStorage"),c=0,f=i.length;c<f;c++){var s=i[c],l=!oe(se,s);if((l||e[s])&&"function"!=typeof e[s])return void t(o)}!function(){for(var n=function(e){return function(){var n=new Error("Method "+e+" is not implemented by the current driver"),t=a.reject(n);return u(t,arguments[arguments.length-1]),t}},t=0,r=se.length;t<r;t++){var o=se[t];e[o]||(e[o]=n(o))}}();var d=function(t){ae[r]&&console.info("Redefining LocalForage driver: "+r),ae[r]=e,ue[r]=t,n()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(d,t):d(!!e._support):d(!0)}catch(e){t(e)}});return c(r,n,t),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,n,t){var r=ae[e]?a.resolve(ae[e]):a.reject(new Error("Driver not found."));return c(r,n,t),r},e.prototype.getSerializer=function(e){var n=a.resolve(X);return c(n,e),n},e.prototype.ready=function(e){var n=this,t=n._driverSet.then(function(){return null===n._ready&&(n._ready=n._initDriver()),n._ready});return c(t,e,e),t},e.prototype.setDriver=function(e,n,t){var r=this;ie(e)||(e=[e]);var o=this._getSupportedDrivers(e);function i(){r._config.driver=r.driver()}function u(e){return r._extend(e),i(),r._ready=r._initStorage(r._config),r._ready}var f=null!==this._driverSet?this._driverSet.catch(function(){return a.resolve()}):a.resolve();return this._driverSet=f.then(function(){var e=o[0];return r._dbInfo=null,r._ready=null,r.getDriver(e).then(function(e){r._driver=e._driver,i(),r._wrapLibraryMethodsWithReady(),r._initDriver=function(e){return function(){var n=0;return function t(){for(;n<e.length;){var o=e[n];return n++,r._dbInfo=null,r._ready=null,r.getDriver(o).then(u).catch(t)}i();var c=new Error("No available storage method found.");return r._driverSet=a.reject(c),r._driverSet}()}}(o)})}).catch(function(){i();var e=new Error("No available storage method found.");return r._driverSet=a.reject(e),r._driverSet}),c(this._driverSet,n,t),this._driverSet},e.prototype.supports=function(e){return!!ue[e]},e.prototype._extend=function(e){he(this,e)},e.prototype._getSupportedDrivers=function(e){for(var n=[],t=0,r=e.length;t<r;t++){var o=e[t];this.supports(o)&&n.push(o)}return n},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,n=le.length;e<n;e++)ve(this,le[e])},e.prototype.createInstance=function(n){return new e(n)},e}(),ye=new pe;n.exports=ye},{3:3}]},{},[4])(4)}).call(this,t(2))},function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";t.r(n),t.d(n,"getVersion",function(){return a}),t.d(n,"init",function(){return c}),t.d(n,"isDataOutdated",function(){return f}),t.d(n,"saveLastUpdate",function(){return s}),t.d(n,"getAll",function(){return l}),t.d(n,"get",function(){return d});var r=t(1),o=t.n(r),i={};var a=function(){return 21478};var u,c=function(e){return e=!!e,f().then(function(n){var r=[];if(!e&&!n){console.log("All data cached. ");var a=function(e){return o.a.getItem("MI_Actress_"+e).then(n=>{i[e]=JSON.parse(n)})};return r.push(a("actress")),r.push(a("chara")),r.push(a("equipment")),r.push(a("skillactive")),r.push(a("skillpassive")),r.push(a("weapon")),Promise.all(r)}return o.a.clear().then(()=>{var e=function(e,n){return o.a.setItem("MI_Actress_"+e,JSON.stringify(n),function(){console.log("Get data from web. ",e),i[e]=n})};return r.push(t.e(2).then(t.t.bind(null,9,3)).then(n=>e("actress",n))),r.push(t.e(2).then(t.t.bind(null,10,3)).then(n=>e("chara",n))),r.push(t.e(2).then(t.t.bind(null,11,3)).then(n=>e("weapon",n))),r.push(t.e(2).then(t.t.bind(null,12,3)).then(n=>e("equipment",n))),r.push(t.e(2).then(t.t.bind(null,13,3)).then(n=>e("skillactive",n))),r.push(t.e(2).then(t.t.bind(null,14,3)).then(n=>e("skillpassive",n))),Promise.all(r).then(()=>s())})})},f=function(){return o.a.getItem("lastUpdate_MI_Actress").then(function(e){return u=e,t.e(3).then(t.t.bind(null,15,3)).then(e=>{var n=u,t=e.default,r=new Date(n).getTime()>=new Date(t).getTime();return u=t,!n||0==r})})},s=function(){return o.a.setItem("lastUpdate_MI_Actress",u)},l=function(e){return i[e.toLowerCase()]?i[e.toLowerCase()]:(console.log("dirty data detected!"),location.hash="#!/init/force",[])},d=function(e,n){return _.find(l(e),function(e){return e.id==n})};n.default={getVersion:a,init:c,isDataOutdated:f,saveLastUpdate:s,getAll:l,get:d}}]);