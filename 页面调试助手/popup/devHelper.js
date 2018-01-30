const outlinePage = ` * {
                        border: 1px solid red;
                    }`;

var browser = browser || chrome

function listenForClicks() {
    document.addEventListener("click", (e) => {
        function outliner(tabs) {
            browser.tabs.insertCSS({code: outlinePage})
        }
        function reportError(error) {
            console.log(`Could not beastifu: ${error}`);
        }
        if (e.target.classList.contains('outliner')) {
            browser.tabs.query({active:true, currentWindow:true})
                .then(outliner)
                .catch(reportError)
        }
    })
}

browser.tabs.executeScript({file: "/content_scripts/devHelper.js"})
.then(listenForClicks);