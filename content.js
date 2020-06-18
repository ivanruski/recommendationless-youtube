function removeHomePageRecommendations() {
    let primary = document.getElementById('primary');
    
    if (primary && primary.children && primary.children.toString() === '[object HTMLCollection]') {
        let contents = primary.children[0].children.namedItem('contents'),
            chipsBelow = primary.children[0].children.namedItem('chips-below');
        
        if (contents) {
            contents.parentNode.removeChild(contents);
        }

        if (chipsBelow) {
            chipsBelow.parentNode.removeChild(chipsBelow);
        }
    }
}

function removeRelatedRecommendations() {
    let secondary = document.getElementById('secondary');
    
    if (secondary && secondary.children && secondary.children.toString() === '[object HTMLCollection]') {
        let secondaryInner = secondary.children[0];
        if(!secondaryInner) {
            return;
        }
        console.log('si', secondaryInner);
        if (secondaryInner) {
            secondaryInner.parentNode.removeChild(secondaryInner);
        }
    }
}

chrome
    .runtime
    .onMessage
    .addListener(function (message, sender) {
        console.log(message);
        if (message.action === "removeHomeRecommendations")
            removeHomePageRecommendations();
        
        if (message.action === "removeRelatedRecommendations")
            removeRelatedRecommendations();    
    });