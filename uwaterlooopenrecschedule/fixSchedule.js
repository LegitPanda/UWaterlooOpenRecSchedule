console.log("UwaterlooOpenRecSchedule loaded");

//to be compatible with Chrome and Edge
window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

//inject scripts
var script = document.createElement('script');
script.src = browser.extension.getURL('scripts.js');
script.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(script);



