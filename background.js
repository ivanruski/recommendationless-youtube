
chrome.tabs.onUpdated.addListener(function handleUpdated(tabId, changeInfo, tabInfo) {
    if (changeInfo.status === "complete") {
        
        console.log(tabInfo.url);
        if (tabInfo.url === "https://www.youtube.com/") {
            chrome.tabs.sendMessage(tabId, { action: "removeHomeRecommendations" })
        }
        else if (tabInfo.url.indexOf("https://www.youtube.com/") !== -1) {
            chrome.tabs.sendMessage(tabId, { action: "removeRelatedRecommendations" })
        }
    }
});