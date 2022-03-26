document.title = "contact"

// CONTACT VALIDATION

// all inputs and errormessages
const form = document.getElementById("form");
const name = document.getElementById("fullname");
const nameError = document.getElementById("fullNameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const check = document.getElementById("check");
const btn = document.querySelector("#button")


form.onsubmit = function() {
    event.preventDefault();

    //--VALIDATE NAME
    if (checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
        //----VALIDATE EMAIL
    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if ((checkEmail(email.value) === true) && (checkLength(name.value, 0) === true)) {
        btn.value = "sent";
        btn.style.backgroundColor = "green"
        btn.style.width = "60px";
        btn.style.color = "white"
    }
}


//---check length of inputs
function checkLength(element, len) {
    if ((element).trim().length > len) {
        return true;
    } else {
        return false;
    }
}

//--- check if input looks like an email adress
function checkEmail (element) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    patternMatch = regEx.test(element)
    return patternMatch;
}