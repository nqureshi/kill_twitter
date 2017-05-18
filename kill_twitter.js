function blockAndDisplay() {
    var feed = $('[id^=timeline], [class^=LiveVideoHomePageModuleContainer], [class^=module], [class^=moments]');

    feed.children().remove();
}

alert("Go do some work!")
window.setInterval(blockAndDisplay, 100);