"use strict";var precacheConfig=[["./index.html","b5be4e6fe48e1d830b95007b0ccbeeed"],["./static/css/main.d29e74f4.css","4f8111429f4da4a4dae2059a4b63b2d8"],["./static/js/main.69f78a4d.js","b2e4c90f5bd9d17159a3036579c0adde"],["./static/media/1.ff7cc470.jpg","ff7cc4701604c6fea1fa8a083aaff6d9"],["./static/media/10.5325fcc7.jpg","5325fcc7cbfef7aa73725b0c920d85e3"],["./static/media/11.156795d1.jpg","156795d193b3bb4dc50478247ae73fdc"],["./static/media/12.7502acdc.jpg","7502acdcb21b8556b0719f33b14beec0"],["./static/media/13.81fa12d5.jpg","81fa12d5a40c853fb7567d73cb2c0b56"],["./static/media/14.c5792ae6.jpg","c5792ae6b534f414e7ae11068293e926"],["./static/media/15.1ad126bd.jpg","1ad126bdee123dc733ce70f731ce40a9"],["./static/media/16.89b271f0.jpg","89b271f096a2f9d3bb02d4401b785d63"],["./static/media/2.eaaa48b4.jpg","eaaa48b4670bb33f0d8aba60641f3930"],["./static/media/3.27c8f151.jpg","27c8f151a7a0f73bae75e2b8ac5d9bfe"],["./static/media/4.6574c69e.jpg","6574c69e05d26a3f7f8298aa0b499865"],["./static/media/5.c17cb227.jpg","c17cb2274799ad6987fb08cd4c7ab823"],["./static/media/6.728ed609.jpg","728ed609dce35218d4616662ada4f263"],["./static/media/7.da8e58b9.jpg","da8e58b991264d6067c6f5f189fd3a95"],["./static/media/8.6a5f65b1.jpg","6a5f65b1efa46e3f39a268a1828a7f54"],["./static/media/9.9ff24244.jpg","9ff24244f6461e49bf7dc560963da9b6"],["./static/media/turn-arrow.583ca888.eot","583ca888b447d46759b91bbc312c8337"],["./static/media/turn-arrow.860e608e.woff","860e608ed28f527db5860195ed618985"],["./static/media/turn-arrow.bad2eaf2.ttf","bad2eaf2d783e1bb2ef78f6b7ac05e88"],["./static/media/turn-arrow.e33d265f.svg","e33d265f5a523a9d3598b9f685319c26"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});