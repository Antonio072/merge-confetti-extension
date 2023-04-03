chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'CHANGE_URL', url: details.url });
    });
});