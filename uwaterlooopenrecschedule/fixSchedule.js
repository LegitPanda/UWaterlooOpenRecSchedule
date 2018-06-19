//to be compatible with Chrome and Edge
window.browser = window.browser || window.msBrowser || window.chrome;

//inject scripts
var script = document.createElement('script');
script.src = browser.extension.getURL('scripts.js');
script.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(script);



