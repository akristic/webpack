var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function r(e){e.preventDefault();let t=document.getElementById("name").value;Client.checkForName(t),console.log("::: Form Submitted :::"),Client.getWeather("https://api.openweathermap.org/data/2.5/weather?zip=94203&appid=28736653ad6c42f248388523a9ff3d0e")}function o(e){console.log("::: Running checkForName :::",e);["Picard","Janeway","Kirk","Archer","Georgiou"].includes(e)&&alert("Welcome, Captain!")}function u(e){console.log("::: getWeather :::",e);(async(e="")=>{const t=await fetch(e);try{const e=await t.json();document.getElementById("results").innerHTML="temp today: "+e.main.temp}catch(e){console.log("error",e)}})(e)}n.r(t),n.d(t,"checkForName",(function(){return o})),n.d(t,"handleSubmit",(function(){return r})),n.d(t,"getWeather",(function(){return u}));n(0),n(1),n(2),n(3),n(4)}]);