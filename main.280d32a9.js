parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=new Swiper(".testimonials-slider",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:130,pagination:!1,navigation:{nextEl:".next",prevEl:".prev"},loop:!0}),t=new Swiper(".insta-slider",{slidesPerView:6,spaceBetween:10,freeMode:!0,navigation:{nextEl:".right",prevEl:".left"},loop:!0,breakpoints:{320:{slidesPerView:3,spaceBetween:10},700:{slidesPerView:4,spaceBetween:10},1100:{slidesPerView:6,spaceBetween:10}}}),n=document.querySelector(".dropbtn"),i=document.querySelector(".dropup-content"),r=document.querySelectorAll(".dropup-menu"),o=Array.prototype.slice.call(r);o.map(function(e){return e.addEventListener("click",function(){i.classList.remove("dropup-content--activ")})}),n.addEventListener("click",function(){i.classList.toggle("dropup-content--activ")});var c=document.getElementById("submit");c.addEventListener("submit",function(e){e.preventDefault()}),document.getElementById("clearButton").onclick=function(e){document.getElementById("textInput").value=""};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.280d32a9.js.map