'use strict';ImageLoadChecker({imageLoaded:function imageLoaded(a){a.parentNode.classList.add("loaded")},imageLoadedAfterTimeout:function imageLoadedAfterTimeout(a){a.parentNode.classList.add("loaded"),a.style.opacity=.5},imageError:function imageError(a){a.parentNode.classList.add("error")},imageErrorAfterTimeout:function imageErrorAfterTimeout(a){a.parentNode.classList.add("error")},timeoutTime:2e3});
//# sourceMappingURL=main.js.map