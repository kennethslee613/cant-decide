(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1931a589"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"8eafcfbb"}[e]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){l=m[s],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var m=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",m.name="ChunkLoadError",m.type=a,m.request=o,n[1](m)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"20cf":function(e,t,n){},"2e2c":function(e,t,n){"use strict";var a=n("20cf"),o=n.n(a);o.a},"36c1":function(e,t,n){},"52a8":function(e,t,n){"use strict";var a=n("36c1"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("router-view",{attrs:{mobile:e.mobile}})],1)},r=[],i=(n("4160"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("span",{staticClass:"header-items"},[n("router-link",{staticClass:"btn header-item",attrs:{tag:"button",to:"/"}},[e._v("Home")]),n("router-link",{staticClass:"btn header-item",attrs:{tag:"button",to:"/about"}},[e._v("About")])],1)])}),s=[],c={name:"TheHeader"},l=c,u=(n("52a8"),n("2877")),m=Object(u["a"])(l,i,s,!1,null,"1a06493c",null),d=m.exports,p={name:"App",components:{TheHeader:d},data:function(){return{mobile:!1}},created:function(){var e=this,t=new ResizeObserver((function(t){t.forEach((function(t){var n=t.contentRect;n.width<750?e.mobile=!0:e.mobile=!1}))}));t.observe(document.getElementsByTagName("body")[0])}},f=p,b=(n("034f"),Object(u["a"])(f,o,r,!1,null,null,null)),h=b.exports,v=(n("d3b7"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{home:!e.mobile,"home-mobile":e.mobile}},[e.googleLoaded?n("LocationSelect",{attrs:{mobile:e.mobile,"random-restaurant":e.randomRestaurant},on:{"set-random-restaurant":e.setRandomRestaurant}}):e._e(),e.googleLoaded&&null!==e.randomRestaurant?n("RandomRestaurantCard",{staticClass:"card",attrs:{"random-restaurant":e.randomRestaurant,mobile:e.mobile}}):e._e()],1)},w=[],y=(n("96cf"),n("1da1")),O=n("7a6e"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{class:{form:!e.mobile,"form-mobile":e.mobile},on:{submit:e.submitLocation}},[n("div",{class:{"location-select":!e.mobile}},[n("div",{staticClass:"section-wrapper-location",class:{"section-wrapper-mobile":e.mobile}},[n("div",{staticClass:"section section-head"}),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.location,expression:"location",modifiers:{lazy:!0}}],ref:"autocomplete",class:{"no-location-input":e.noLocationInput,"input-location":!e.mobile,"input-location-mobile":e.mobile},attrs:{type:"text",name:"location",placeholder:"Enter a location"},domProps:{value:e.location},on:{keydown:e.keyDown,change:function(t){e.location=t.target.value}}})]),n("div",{staticClass:"section-wrapper-miles",class:{"section-wrapper-mobile":e.mobile}},[n("div",{staticClass:"section section-text",class:{within:!e.mobile,"within-mobile":e.mobile}},[e._v(" within ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.miles,expression:"miles"}],attrs:{type:"number",step:"any",name:"miles",placeholder:"5"},domProps:{value:e.miles},on:{input:function(t){t.target.composing||(e.miles=t.target.value)}}}),n("div",{staticClass:"section section-text",class:{miles:!e.mobile,"miles-mobile":e.mobile}},[e._v(" mile(s) ")])]),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])])},R=[],j=(n("99af"),n("2909")),x={name:"LocationSelect",data:function(){return{location:"",locationObject:null,miles:1,noLocationInput:!1,nearbyRestaurants:[]}},props:{mobile:{type:Boolean},randomRestaurant:{type:Object}},methods:{submitLocation:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.preventDefault(),t.$emit("set-random-restaurant",null),n.prev=2,""===t.location){n.next=12;break}if(t.noLocationInput=!1,null!==t.locationObject){n.next=10;break}return n.next=8,t.autocompleteOnSubmit();case 8:t.locationObject=n.sent,t.location=t.locationObject.formatted_address;case 10:n.next=14;break;case 12:return t.noLocationInput=!0,n.abrupt("return");case 14:return n.next=16,t.restaurantSearch();case 16:t.nearbyRestaurants=n.sent,t.$emit("set-random-restaurant",t.nearbyRestaurants),n.next=24;break;case 20:n.prev=20,n.t0=n["catch"](2),alert("The Google API is currently unavailable."),console.error(n.t0);case 24:case"end":return n.stop()}}),n,null,[[2,20]])})))()},autocompleteOnSubmit:function(){var e=this;return new Promise((function(t,n){try{var a={query:e.location,fields:["formatted_address","geometry"]},o=new window.google.maps.places.PlacesService(e.$refs.autocomplete);o.findPlaceFromQuery(a,(function(e,n){if(n!==window.google.maps.places.PlacesServiceStatus.OK)throw"Autocomplete failed.";t(e[0])}))}catch(r){n(r)}}))},restaurantSearch:function(){var e=this;return new Promise((function(t,n){try{var a={location:e.getCoordinates(),radius:e.milesToMeters(e.miles),type:"restaurant",openNow:!0},o=[],r=new window.google.maps.places.PlacesService(document.createElement("div"));r.nearbySearch(a,(function(e,n,a){if(n!==window.google.maps.places.PlacesServiceStatus.OK)throw"Nearby search failed.";o=[].concat(Object(j["a"])(o),Object(j["a"])(e)),a.hasNextPage||t(o),setTimeout((function(){a.nextPage()}),2e3)}))}catch(i){n(i)}}))},getCoordinates:function(){return new window.google.maps.LatLng(this.locationObject.geometry.location.lat(),this.locationObject.geometry.location.lng())},milesToMeters:function(e){return e/621371e-9},keyDown:function(e){13!==e.keyCode&&(this.locationObject=null)}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=new window.google.maps.places.Autocomplete(e.$refs.autocomplete,{types:["geocode"]}),n.addListener("place_changed",Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.getPlace();case 2:e.locationObject=t.sent,"undefined"!==typeof e.locationObject.geometry?e.location=e.locationObject.formatted_address:e.locationObject=null;case 4:case"end":return t.stop()}}),t)}))));case 2:case"end":return t.stop()}}),t)})))()}},C=x,k=(n("fad5"),Object(u["a"])(C,_,R,!1,null,"9c10451a",null)),S=k.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{card:!e.mobile,"card-mobile":e.mobile}},[n("div",{staticClass:"header"},[n("h3",{staticClass:"name"},[e._v(e._s(e.randomRestaurant.name))]),n("img",{staticClass:"star",attrs:{src:"star.svg",alt:"stars"}}),n("h4",{staticClass:"rating"},[e._v(e._s(e.randomRestaurant.rating))])]),n("div",[n("p",{staticClass:"address"},[e._v(e._s(e.randomRestaurant.vicinity))])]),e._m(0)])},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map-container"},[n("div",{attrs:{id:"map"}})])}],E=(n("d81d"),n("b0c0"),{name:"RandomRestaurantCard",props:{randomRestaurant:Object,mobile:Boolean},data:function(){return{map:null}},mounted:function(){var e=new window.google.maps.LatLng(this.randomRestaurant.geometry.location.lat(),this.randomRestaurant.geometry.location.lng());this.map=new window.google.maps.Map(document.getElementById("map"),{center:e,zoom:15,streetViewControl:!1,mapTypeControl:!1}),new window.google.maps.Marker({position:e,map:this.map,title:this.randomRestaurant.name})}}),T=E,A=(n("2e2c"),Object(u["a"])(T,L,P,!1,null,"6fe27594",null)),N=A.exports,$={name:"Home",components:{LocationSelect:S,RandomRestaurantCard:N},props:{mobile:{type:Boolean}},data:function(){return{randomRestaurant:null,googleLoaded:!1}},methods:{setRandomRestaurant:function(e){this.randomRestaurant=null===e?null:e[Math.floor(Math.random()*e.length)]}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(window.google){t.next=8;break}return n={libraries:["places"]},a=new O["a"]("AIzaSyAap7sbwiX_sJftRu0N9WBCjmtroa-Rj6I",n),t.next=5,a.load();case 5:e.googleLoaded=!0,t.next=9;break;case 8:e.googleLoaded=!0;case 9:case"end":return t.stop()}}),t)})))()}},M=$,B=(n("f0f9"),Object(u["a"])(M,g,w,!1,null,"959a5130",null)),I=B.exports;a["a"].use(v["a"]);var H=[{path:"/",name:"Home",component:I,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],z=new v["a"]({routes:H}),D=z;a["a"].config.productionTip=!1,new a["a"]({router:D,render:function(e){return e(h)}}).$mount("#app")},"720f":function(e,t,n){},7335:function(e,t,n){},"85ec":function(e,t,n){},f0f9:function(e,t,n){"use strict";var a=n("7335"),o=n.n(a);o.a},fad5:function(e,t,n){"use strict";var a=n("720f"),o=n.n(a);o.a}});
//# sourceMappingURL=app.a5132f10.js.map