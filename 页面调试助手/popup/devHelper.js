const outlinePage = ` * {
                        border: 1px solid red;
                    }`;

var browser = browser || chrome

document.getElementById('outliner').addEventListener("click", function () {
    browser.tabs.insertCSS({
        code: outlinePage
    })
})
