(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),d=new URL(t(585),t.b),u=new URL(t(997),t.b),l=i()(a()),f=s()(d),p=s()(u);l.push([e.id,`@font-face {\n    font-family: "Pacifico-Regular";\n    src: url(${f});\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    color: white;\n    font-family: "Pacifico-Regular", Arial, Helvetica;\n    letter-spacing: 0.06em;\n    word-spacing: 0.16em;\n    font-size: 100%;\n}\n\nbody {\n    background-image: url(${p});\n    background-size: cover;\n    background-position: center center;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 1.5fr 9fr 1fr;\n    grid-template-areas: \n    "header"\n    "content"\n    "footer";\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 70px;\n    grid-area: header;\n}\n\n.header > div:last-child > div:hover {\n    color: rgb(255, 60, 60);\n    transition: 0.3s;\n}\n\n.header,\n.footer {\n    background: rgba(0,0,0, 0.7);\n}\n\n.header > div:first-of-type {\n    font-size: 2.4em;\n}\n\n.header > :last-child {\n    display: flex;\n    gap: 50px;\n    font-size: 1.6em;\n}\n\n.header,\n.footer {\n    transition: 0.8s;\n}\n\n#content {\n    grid-area: content;\n}\n\n.fadeIn {\n    transition: opacity 0.8s;\n}\n\n.fadeOut {\n    opacity: 0;\n}\n\n.footer {\n    grid-area: footer;\n}\n\n`,""]);const m=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var f=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=a(p,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var u=t(o[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},585:(e,n,t)=>{e.exports=t.p+"c0d735fc04154e03a691.ttf"},997:(e,n,t)=>{e.exports=t.p+"ad43cd4fead0348d2557.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{!function(){const e=document.getElementById("content"),n=document.createElement("h2");n.textContent="Savor the Flavor: Indulge in Gourmet Bliss at out Signature Burger Prince";const t=document.createElement("em");t.textContent="Welcome to Burger Prince, where each bite is a symphony of flavors crafted with culinary mastery. Our burgers redefine indulgence, featuring premium ingredients and expertly grilled patties",document.createElement("img"),e.appendChild(n),e.appendChild(t),n.classList.add("headline","fadeIn","fadeOut"),t.classList.add("description","fadeIn","fadeOut"),requestAnimationFrame((()=>{n.classList.remove("fadeOut"),t.classList.remove("fadeOut")}))}();var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),u=t.n(d),l=t(589),f=t.n(l),p=t(28),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals})()})();