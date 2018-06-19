//to be compatible with Chrome and Edge
window.browser = window.browser || window.msBrowser || window.chrome;

//open schedule
browser.browserAction.onClicked.addListener(function() {
    browser.tabs.create({'url': "https://warrior.uwaterloo.ca/Facility/GetSchedule"});
});