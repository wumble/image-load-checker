"use strict";var ImageLoadChecker=function(){'use strict';return function(a){var b={};/*
            Image Events
        */ /*
            Collection Events
        */b.defaults={imageSelector:"img",timeoutTime:60000,imageLoaded:function imageLoaded(a){a.classList.add("loaded")},imageLoadedAfterTimeout:function imageLoadedAfterTimeout(a){a.classList.add("loaded")},imageError:function imageError(a){a.classList.add("error")},imageErrorAfterTimeout:function imageErrorAfterTimeout(a){a.classList.add("error")},imageTimeout:function imageTimeout(){}},b.options={},b.imageElements=null,b.timeoutFunctions=[],b.timeouts=[],b.loadedImages=0,b.errorImages=0,b.timeoutImages=0,b.init=function(){console.log("init"),a===void 0&&(a={}),b.extend(b.options,b.defaults,a),b.imageElements=document.querySelectorAll(b.options.imageSelector),b.bindEvents()},b.bindEvents=function(){for(var a=document.createEvent("HTMLEvents"),c=0;c<b.imageElements.length;c++)b.imageElements[c].addEventListener("load",b.loaded),b.imageElements[c].addEventListener("error",b.error),b.timeoutFunctions[c]=window.setTimeout(function(a){b.timeout(b.imageElements[a])},b.options.timeoutTime,c),b.timeouts[c]=!1,b.imageElements[c].complete&&(0===b.imageElements[c].naturalWidth?a.initEvent("error",!0,!0):a.initEvent("load",!0,!0),b.imageElements[c].dispatchEvent(a))},b.loaded=function(a){console.log("loaded: "+a.target.src);var c=a.target,d=Array.prototype.slice.call(b.imageElements).indexOf(c);window.clearTimeout(b.timeoutFunctions[d]),c.removeEventListener("load",b.loaded),b.timeouts[d]?b.options.imageLoadedAfterTimeout(c):(b.loadedImages++,b.options.imageLoaded(c),b.loadedImages+b.errorImages+b.timeoutImages===b.imageElements.length&&(b.loadedImages===b.imageElements.length?b.allLoaded():b.notAllLoaded()))},b.error=function(a){var c=a.target,d=Array.prototype.slice.call(b.imageElements).indexOf(c);window.clearTimeout(b.timeoutFunctions[d]),c.removeEventListener("error",b.error),b.timeouts[d]?b.options.imageErrorAfterTimeout(c):(b.errorImages++,b.options.imageError(c),b.loadedImages+b.errorImages+b.timeoutImages===b.imageElements.length&&(b.errorImages===b.imageElements.length?b.allFails():b.notAllLoaded()))},b.timeout=function(a){var c=Array.prototype.slice.call(b.imageElements).indexOf(a);b.timeouts[c]=!0,b.timeoutImages++,b.options.imageTimeout(a),b.loadedImages+b.errorImages+b.timeoutImages===b.imageElements.length&&(b.errorImages===b.imageElements.length?b.allFails():b.notAllLoaded())},b.allFails=function(){console.log("all fails")},b.allLoaded=function(){console.log("all loaded")},b.notAllLoaded=function(){console.log("not all loaded, just "+b.loadedImages+" of "+b.imageElements.length)},/*
            Helper Functions
        */b.extend=function(a,b,c){for(var d in b)a[d]=c[d]?c[d]:b[d];return a},b.init()}}();
//# sourceMappingURL=imageloadchecker.js.map