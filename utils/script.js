
function validateEmail(email) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('request-access-button').onclick = function() {

    emailValue = document.getElementById("email-input").value
    if (!validateEmail(emailValue)) {
        document.getElementById("hidden-text").style.visibility = "visible";
    } else {
        document.getElementById("hidden-text").style.visibility = "hidden";
    }
}