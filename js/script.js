function createPopup(popup) {
    document.getElementById(popup).classList.add('activePopup');
}

function closePopup(popup) {
    document.getElementById(popup).classList.remove('activePopup');
}

function goUp() {
    window.scrollTo(0, 0);
}

