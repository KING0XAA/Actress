var __wpo = {"assets":{"main":["./fonts/MaterialIcons-Regular.woff2","./fonts/MaterialIcons-Regular.woff","./fonts/MaterialIcons-Regular.ttf","./fonts/MaterialIcons-Regular.eot","./data.d371d671c856441b034b.js","./main.935dab9b9bd266d68c83.css","./main.2f711b8551c20ae49c34.js","./jsondata0.b4f886fb13f27cafa7b0.js","./jsondata1.ab89f5ad6936a484d68d.js","./4.23e665262c8033c9d2d3.js","./5.efd462fbf866621d0a97.js","./6.17f883b03a8a2ce66252.css","./view.6c0968379486ccff6c07.js","./","./manifest.dc54ad6c598ab78160df2c0cc92727b2.json","./icon_1024x1024.b2a1d90062159756986dd4a63ee0305f.png","./icon_512x512.c901e7d9859eee2bb589b095d9b40f60.png","./icon_384x384.b3e39c038d16b2ddeea4a052e4ae243d.png","./icon_256x256.acf59650020f09062b8b99b5996960fe.png","./icon_192x192.a1228c3b221713d1faa26bd9a5776a64.png","./icon_128x128.cfcecf1f617f756fa52c885fc51521be.png","./icon_96x96.7472814282f85d4d215245c2dc578936.png"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"09963592e8c953cc7e14e3fb0a5b05d5042e8435":"./fonts/MaterialIcons-Regular.woff2","c6c953c2ccb2ca9abb21db8dbf473b5a435f0082":"./fonts/MaterialIcons-Regular.woff","fc05de31234e0090f7ddc28ce1b23af4026cb1da":"./fonts/MaterialIcons-Regular.ttf","26fb8cecb5512223277b4d290a24492a0f09ede1":"./fonts/MaterialIcons-Regular.eot","1d87651a2d1b90c6b86842cc07db2267cfc67d75":"./data.d371d671c856441b034b.js","642da52fa25b011b7b5a4be507c9e8cfe3f0e1df":"./main.935dab9b9bd266d68c83.css","4ceb0c5afac7d3daefce0a5cbcd20f0728b79b31":"./main.2f711b8551c20ae49c34.js","b6dcf83c0d9e9012028275c40986809834eb56d6":"./jsondata0.b4f886fb13f27cafa7b0.js","6c829df19f51420eb336f689dc73b3422acc65d4":"./jsondata1.ab89f5ad6936a484d68d.js","94dd2e7112740e827483562b18ed65c683fa8625":"./4.23e665262c8033c9d2d3.js","64ede28b694021e00c7b6d7823b8fa727f50810a":"./5.efd462fbf866621d0a97.js","2b33535e314617a765712409dacc027cc0ca147c":"./6.17f883b03a8a2ce66252.css","4703e2b8238391746e641f4c799f31dd0c33be18":"./view.6c0968379486ccff6c07.js","c8edbd8a1eaef5af54b82df672128d6cada95b4e":"./","5dd5a70fab95c9ccb5254ed73941e5d2bc8a0a6f":"./manifest.dc54ad6c598ab78160df2c0cc92727b2.json","2db51b96ed0c02ae811bdc5aca73596d7eca6128":"./icon_1024x1024.b2a1d90062159756986dd4a63ee0305f.png","27dfaa6cdec272dc1d3f18aedfc3154fda6e8c2f":"./icon_512x512.c901e7d9859eee2bb589b095d9b40f60.png","6c19fc4151c4568d11450f4515266f13dd49c459":"./icon_384x384.b3e39c038d16b2ddeea4a052e4ae243d.png","9ce8e3886dd19ebf396189fb2a83939b49b2a136":"./icon_256x256.acf59650020f09062b8b99b5996960fe.png","26921a415e0830082fd6ce9007c15e09d3c29001":"./icon_192x192.a1228c3b221713d1faa26bd9a5776a64.png","e6f9602e6df388576aa9d3d2d87ae95c622eca9a":"./icon_128x128.cfcecf1f617f756fa52c885fc51521be.png","660f0ac14359b2bd42dfa1cb73ff8b17be6f8547":"./icon_96x96.7472814282f85d4d215245c2dc578936.png"},"strategy":"changed","responseStrategy":"cache-first","version":"2019-4-21 00:28:36","name":"webpack-offline:MI_Actress","pluginVersion":"5.0.6","relativePaths":true};

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,s,i;if(r=ExtendableEvent.prototype.waitUntil,s=FetchEvent.prototype.respondWith,i=new WeakMap,ExtendableEvent.prototype.waitUntil=function(e){var t=this,n=i.get(t);if(!n)return n=[Promise.resolve(e)],i.set(t,n),r.call(t,Promise.resolve().then(function e(){var r=n.length;return Promise.all(n.map(function(e){return e.catch(function(){})})).then(function(){return n.length!=r?e():(i.delete(t),Promise.all(n))})}));n.push(Promise.resolve(e))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),s.call(this,e)},void 0===o)var o=!1;function a(e,t){return caches.match(e,{cacheName:t}).then(function(n){return c(n)?n:u(n).then(function(n){return caches.open(t).then(function(t){return t.put(e,n)}).then(function(){return n})})}).catch(function(){})}function c(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function u(e){return c(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status})})}function l(e,t){t.forEach(function(e){})}!function(e,t){var n=t.cacheMaps,r=t.navigationPreload,s=e.strategy,i=e.responseStrategy,o=e.assets,c=e.hashesMap,h=e.externals,f=e.prefetchRequest||{credentials:"same-origin",mode:"cors"},p=e.name,m=e.version,d=p+":"+m,g=p+"$preload",v="__offline_webpack__data";Object.keys(o).forEach(function(e){o[e]=o[e].map(function(e){var t=new URL(e,location);return t.hash="",-1===h.indexOf(e)&&(t.search=""),t.toString()})}),c=Object.keys(c).reduce(function(e,t){var n=new URL(c[t],location);return n.search="",n.hash="",e[t]=n.toString(),e},{}),h=h.map(function(e){var t=new URL(e,location);return t.hash="",t.toString()});var w=[].concat(o.main,o.additional,o.optional);function q(t){var n=o[t];return caches.open(d).then(function(r){return k(r,n,{bust:e.version,request:f,failAll:"main"===t})}).then(function(){l(0,n)}).catch(function(e){throw e})}function y(t){return caches.keys().then(function(e){for(var t=e.length,n=void 0;t--&&0!==(n=e[t]).indexOf(p););if(n){var r=void 0;return caches.open(n).then(function(e){return r=e,e.match(new URL(v,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}}).then(function(n){if(!n)return q(t);var r=n[0],s=n[1],i=n[2],a=i.hashmap,u=i.version;if(!i.hashmap||u===e.version)return q(t);var h=Object.keys(a).map(function(e){return a[e]}),p=s.map(function(e){var t=new URL(e.url);return t.search="",t.hash="",t.toString()}),m=o[t],g=[],v=m.filter(function(e){return-1===p.indexOf(e)||-1===h.indexOf(e)});Object.keys(c).forEach(function(e){var t=c[e];if(-1!==m.indexOf(t)&&-1===v.indexOf(t)&&-1===g.indexOf(t)){var n=a[e];n&&-1!==p.indexOf(n)?g.push([n,t]):v.push(t)}}),l(0,v),l(0,g);var w=Promise.all(g.map(function(e){return r.match(e[0]).then(function(t){return[e[1],t]})}));return caches.open(d).then(function(n){var r=w.then(function(e){return Promise.all(e.map(function(e){return n.put(e[0],e[1])}))});return Promise.all([r,k(n,v,{bust:e.version,request:f,failAll:"main"===t,deleteFirst:"main"!==t})])})})}function _(){return caches.keys().then(function(e){var t=e.map(function(e){if(0===e.indexOf(p)&&0!==e.indexOf(d))return caches.delete(e)});return Promise.all(t)})}function O(){return caches.open(d).then(function(t){var n=new Response(JSON.stringify({version:e.version,hashmap:c}));return t.put(new URL(v,location).toString(),n)})}self.addEventListener("install",function(e){var t=void 0;t="changed"===s?y("main"):q("main"),e.waitUntil(t)}),self.addEventListener("activate",function(e){var t=function(){if(!o.additional.length)return Promise.resolve();return("changed"===s?y("additional"):q("additional")).catch(function(e){})}();t=(t=(t=t.then(O)).then(_)).then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),r&&self.registration.navigationPreload&&(t=Promise.all([t,self.registration.navigationPreload.enable()])),e.waitUntil(t)}),self.addEventListener("fetch",function(e){if("GET"===e.request.method&&("only-if-cached"!==e.request.cache||"same-origin"===e.request.mode)){var t=new URL(e.request.url);t.hash="";var s=t.toString();-1===h.indexOf(s)&&(t.search="",s=t.toString());var o=-1!==w.indexOf(s),c=s;if(!o){var u=function(e){var t=e.url,r=new URL(t),s=void 0;s=function(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}(e)?"navigate":r.origin===location.origin?"same-origin":"cross-origin";for(var i=0;i<n.length;i++){var o=n[i];if(o&&(!o.requestTypes||-1!==o.requestTypes.indexOf(s))){var a=void 0;if((a="function"==typeof o.match?o.match(r,e):t.replace(o.match,o.to))&&a!==t)return a}}}(e.request);u&&(c=u,o=!0)}if(o){var l=void 0;l="network-first"===i?function(e,t,n){return N(e).then(function(e){if(e.ok)return e;throw e}).catch(function(e){return a(n,d).then(function(t){if(t)return t;if(e instanceof Response)return e;throw e})})}(e,0,c):function(e,t,n){return function(e){if(r&&"function"==typeof r.map&&e.preloadResponse&&"navigate"===e.request.mode){var t=r.map(new URL(e.request.url),e.request);t&&function(e,t){var n=new URL(e,location),r=t.preloadResponse;R.set(r,{url:n,response:r});var s=function(){return R.has(r)},i=r.then(function(e){if(e&&s()){var t=e.clone();return caches.open(g).then(function(e){if(s())return e.put(n,t).then(function(){if(!s())return caches.open(g).then(function(e){return e.delete(n)})})})}});t.waitUntil(i)}(t,e)}}(e),a(n,d).then(function(r){return r||fetch(e.request).then(function(r){return r.ok?(n===t&&(s=r.clone(),i=caches.open(d).then(function(e){return e.put(t,s)}).then(function(){}),e.waitUntil(i)),r):r;var s,i})})}(e,s,c),e.respondWith(l)}else{if("navigate"===e.request.mode&&!0===r)return void e.respondWith(N(e));if(r){var f=function(e){var t=new URL(e.request.url);if(self.registration.navigationPreload&&r&&r.test&&r.test(t,e.request)){var n=function(e){if(R){var t=void 0,n=void 0;return R.forEach(function(r,s){r.url.href===e.href&&(t=r.response,n=s)}),t?(R.delete(n),t):void 0}}(t),s=e.request;return n?(e.waitUntil(caches.open(g).then(function(e){return e.delete(s)})),n):a(s,g).then(function(t){return t&&e.waitUntil(caches.open(g).then(function(e){return e.delete(s)})),t||fetch(e.request)})}}(e);if(f)return void e.respondWith(f)}}}}),self.addEventListener("message",function(e){var t=e.data;if(t)switch(t.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}});var R=new Map;function k(e,t,n){var r=n.bust,s=!1!==n.failAll,i=!0===n.deleteFirst,o=n.request||{credentials:"omit",mode:"cors"},a=Promise.resolve();return i&&(a=Promise.all(t.map(function(t){return e.delete(t).catch(function(){})}))),Promise.all(t.map(function(e){var t,n,s;return r&&(n=r,s=-1!==(t=e).indexOf("?"),e=t+(s?"&":"?")+"__uncache="+encodeURIComponent(n)),fetch(e,o).then(u).then(function(e){return e.ok?{response:e}:{error:!0}},function(){return{error:!0}})})).then(function(n){return s&&n.some(function(e){return e.error})?Promise.reject(new Error("Wrong response status")):(s||(n=n.filter(function(e){return!e.error})),a.then(function(){var r=n.map(function(n,r){var s=n.response;return e.put(t[r],s)});return Promise.all(r)}))})}function N(e){return e.preloadResponse&&!0===r?e.preloadResponse.then(function(t){return t||fetch(e.request)}):fetch(e.request)}}(__wpo,{loaders:{},cacheMaps:[{match:function(e){if(e.pathname!==location.pathname)return new URL("/Actress/",location)},to:null,requestTypes:["navigate"]}],navigationPreload:!1}),e.exports=n(1)},function(e,t,n){"use strict";n.r(t);try{self["workbox:core:4.2.0"]&&_()}catch(e){}const r=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class s extends Error{constructor(e,t){super(r(e,t)),this.name=e,this.details=t}}try{self["workbox:routing:4.2.0"]&&_()}catch(e){}const i="GET",o=e=>e&&"object"==typeof e?e:{handle:e};class a{constructor(e,t,n){this.handler=o(t),this.match=e,this.method=n||i}}const c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:self.registration.scope},u=e=>[c.prefix,e,c.suffix].filter(e=>e.length>0).join("-"),l={updateDetails:e=>{Object.keys(c).forEach(t=>{void 0!==e[t]&&(c[t]=e[t])})},getGoogleAnalyticsName:e=>e||u(c.googleAnalytics),getPrecacheName:e=>e||u(c.precache),getPrefix:()=>c.prefix,getRuntimeName:e=>e||u(c.runtime),getSuffix:()=>c.suffix};let h;const f=()=>(h||((h=new class{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",async e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(n),e.ports&&e.ports[0]&&(await n,e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location);if(!n.protocol.startsWith("http"))return;let r,{params:s,route:i}=this.findMatchingRoute({url:n,request:e,event:t}),o=i&&i.handler;if(!o&&this._defaultHandler&&(o=this._defaultHandler),o){try{r=o.handle({url:n,request:e,event:t,params:s})}catch(e){r=Promise.reject(e)}return r&&this._catchHandler&&(r=r.catch(e=>this._catchHandler.handle({url:n,event:t,err:e}))),r}}findMatchingRoute({url:e,request:t,event:n}){const r=this._routes.get(t.method)||[];for(const s of r){let r,i=s.match({url:e,request:t,event:n});if(i)return Array.isArray(i)&&i.length>0?r=i:i.constructor===Object&&Object.keys(i).length>0&&(r=i),{route:s,params:r}}return{}}setDefaultHandler(e){this._defaultHandler=o(e)}setCatchHandler(e){this._catchHandler=o(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new s("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new s("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}).addFetchListener(),h.addCacheListener()),h);const p="cacheDidUpdate",m="cacheKeyWillBeUsed",d="cacheWillUpdate",g="cachedResponseWillBeUsed",v="fetchDidFail",w="fetchDidSucceed",q="requestWillFetch",y=(e,t)=>e.filter(e=>t in e),O=new Set;const R=async({cacheName:e,request:t,event:n,matchOptions:r,plugins:s=[]})=>{const i=await caches.open(e),o=await N({plugins:s,request:t,mode:"read"});let a=await i.match(o,r);for(const t of s)g in t&&(a=await t[g].call(t,{cacheName:e,event:n,matchOptions:r,cachedResponse:a,request:o}));return a},k=async({request:e,response:t,event:n,plugins:r})=>{let s=t,i=!1;for(let t of r)if(d in t&&(i=!0,!(s=await t[d].call(t,{request:e,response:s,event:n}))))break;return i||(s=200===s.status?s:null),s||null},N=async({request:e,mode:t,plugins:n})=>{const r=y(n,m);let s=e;for(const e of r)"string"==typeof(s=await e[m].call(e,{mode:t,request:s}))&&(s=new Request(s));return s},x={put:async({cacheName:e,request:t,response:n,event:r,plugins:i=[],matchOptions:o}={})=>{const a=await N({plugins:i,request:t,mode:"write"});if(!n)throw new s("cache-put-with-no-response",{url:(e=>{const t=new URL(e,location);return t.origin===location.origin?t.pathname:t.href})(a.url)});let c=await k({event:r,plugins:i,response:n,request:a});if(!c)return;const u=await caches.open(e),l=y(i,p);let h=l.length>0?await R({cacheName:e,matchOptions:o,request:a}):null;try{await u.put(a,c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of O)await e()}(),e}for(let t of l)await t[p].call(t,{cacheName:e,event:r,oldResponse:h,newResponse:c,request:a})},match:R},b={fetch:async({request:e,fetchOptions:t,event:n,plugins:r=[]})=>{if(n&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}"string"==typeof e&&(e=new Request(e));const i=y(r,v),o=i.length>0?e.clone():null;try{for(let t of r)q in t&&(e=await t[q].call(t,{request:e.clone(),event:n}))}catch(e){throw new s("plugin-error-request-will-fetch",{thrownError:e})}let a=e.clone();try{let s;s="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of r)w in e&&(s=await e[w].call(e,{event:n,request:a,response:s}));return s}catch(e){for(const t of i)await t[v].call(t,{error:e,event:n,originalRequest:o.clone(),request:a.clone()});throw e}}};try{self["workbox:strategies:4.2.0"]&&_()}catch(e){}const P={cacheWillUpdate:({response:e})=>200===e.status||0===e.status?e:null};class U{constructor(e={}){if(this._cacheName=l.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],e.plugins){let t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[P,...e.plugins]}else this._plugins=[P];this._fetchOptions=e.fetchOptions||null,this._matchOptions=e.matchOptions||null}async handle({event:e,request:t}){return this.makeRequest({event:e,request:t||e.request})}async makeRequest({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const n=this._getFromNetwork({request:t,event:e});let r,i=await x.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(i){if(e)try{e.waitUntil(n)}catch(r){0}}else{0;try{i=await n}catch(e){r=e}}if(!i)throw new s("no-response",{url:t.url,error:r});return i}async _getFromNetwork({request:e,event:t}){const n=await b.fetch({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),r=x.put({cacheName:this._cacheName,request:e,response:n.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(r)}catch(e){0}return n}}const E={cacheFirst:class{constructor(e={}){this._cacheName=l.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions||null,this._matchOptions=e.matchOptions||null}async handle({event:e,request:t}){return this.makeRequest({event:e,request:t||e.request})}async makeRequest({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let n,r=await x.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(r);else try{r=await this._getFromNetwork(t,e)}catch(e){n=e}if(!r)throw new s("no-response",{url:t.url,error:n});return r}async _getFromNetwork(e,t){const n=await b.fetch({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),r=n.clone(),s=x.put({cacheName:this._cacheName,request:e,response:r,event:t,plugins:this._plugins});if(t)try{t.waitUntil(s)}catch(e){}return n}},cacheOnly:class{constructor(e={}){this._cacheName=l.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._matchOptions=e.matchOptions||null}async handle({event:e,request:t}){return this.makeRequest({event:e,request:t||e.request})}async makeRequest({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const n=await x.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(!n)throw new s("no-response",{url:t.url});return n}},networkFirst:class{constructor(e={}){if(this._cacheName=l.getRuntimeName(e.cacheName),e.plugins){let t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[P,...e.plugins]}else this._plugins=[P];this._networkTimeoutSeconds=e.networkTimeoutSeconds,this._fetchOptions=e.fetchOptions||null,this._matchOptions=e.matchOptions||null}async handle({event:e,request:t}){return this.makeRequest({event:e,request:t||e.request})}async makeRequest({event:e,request:t}){const n=[];"string"==typeof t&&(t=new Request(t));const r=[];let i;if(this._networkTimeoutSeconds){const{id:s,promise:o}=this._getTimeoutPromise({request:t,event:e,logs:n});i=s,r.push(o)}const o=this._getNetworkPromise({timeoutId:i,request:t,event:e,logs:n});r.push(o);let a=await Promise.race(r);if(a||(a=await o),!a)throw new s("no-response",{url:t.url});return a}_getTimeoutPromise({request:e,logs:t,event:n}){let r;return{promise:new Promise(t=>{r=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:n}))},1e3*this._networkTimeoutSeconds)}),id:r}}async _getNetworkPromise({timeoutId:e,request:t,logs:n,event:r}){let s,i;try{i=await b.fetch({request:t,event:r,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){s=e}if(e&&clearTimeout(e),s||!i)i=await this._respondFromCache({request:t,event:r});else{const e=i.clone(),n=x.put({cacheName:this._cacheName,request:t,response:e,event:r,plugins:this._plugins});if(r)try{r.waitUntil(n)}catch(e){}}return i}_respondFromCache({event:e,request:t}){return x.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}},networkOnly:class{constructor(e={}){this._cacheName=l.getRuntimeName(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions||null}async handle({event:e,request:t}){return this.makeRequest({event:e,request:t||e.request})}async makeRequest({event:e,request:t}){let n,r;"string"==typeof t&&(t=new Request(t));try{r=await b.fetch({request:t,event:e,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){n=e}if(!r)throw new s("no-response",{url:t.url,error:n});return r}},staleWhileRevalidate:U},L=e=>{const t=E[e];return e=>new t(e)};L("cacheFirst"),L("cacheOnly"),L("networkFirst"),L("networkOnly"),L("staleWhileRevalidate");((e,t,n="GET")=>{let r;if("string"==typeof e){const s=new URL(e,location);r=new a(({url:e})=>e.href===s.href,t,n)}else if(e instanceof RegExp)r=new class extends a{constructor(e,t,n){super(({url:t})=>{const n=e.exec(t.href);return n?t.origin!==location.origin&&0!==n.index?null:n.slice(1):null},t,n)}}(e,t,n);else if("function"==typeof e)r=new a(e,t,n);else{if(!(e instanceof a))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}f().registerRoute(r)})(new RegExp("/img/"),new U({cacheName:"workbox:MI_img",plugins:[]}))}]);