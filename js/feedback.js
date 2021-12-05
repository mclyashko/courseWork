var popup = 'feedbackForm';
var btn = 'feedback';
var waiter = 'plsWait';

function createFeedback() {
    document.getElementById(btn).classList.add('hideMeNow');
    document.getElementById(waiter).classList.remove('hideMeNow');
    setTimeout(deleteWaiter, 1000);
    setTimeout(addPopup, 1000);
}

function deleteWaiter() {
    document.getElementById(waiter).classList.add('unvisibleMe');
}

function addPopup() {
    document.getElementById(popup).classList.add('activePopup');
}

function closeFeedback() {
    document.getElementById(popup).classList.remove('activePopup');
    document.getElementById(waiter).classList.add('hideMeNow');
    document.getElementById(waiter).classList.remove('unvisibleMe');
    document.getElementById(btn).classList.remove('hideMeNow');
}

function goGoWait() {
    var telInput = document.getElementById('telInput');

    var pattern = telInput.getAttribute("pattern");

    var re = new RegExp(pattern);
        
    var snackbar;

    var f = false;

    if (re.test(telInput.value)) {
        snackbar = document.getElementById('TRUEsnackbar');
        f = true;
    } else {
        snackbar = document.getElementById('FALSEsnackbar');
    }

    snackbar.classList.add('showSnackbar');

    setTimeout(
        function(){ 
            snackbar.className = snackbar.className.replace("showSnackbar", ""); 
        }, 
        3000
    );

    if (f) {
        closeFeedback();
    }
}