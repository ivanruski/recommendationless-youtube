let rmHomeScrRcmnd = document.getElementById('remove-home-recommendations');

rmHomeScrRcmnd.onclick = function (element) {
    console.log('on click');
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'removeHomeScreenContents.js' });
    });
}

console.log('popup.js');
