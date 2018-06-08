console.log("UwaterlooOpenRecSchedule loaded");
var script = document.createElement('script');
script.src = browser.extension.getURL('scripts.js');
script.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(script);



