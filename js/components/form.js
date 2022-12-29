const contactFotm = document.querySelector("form");
const firstName = document.querySelector("#name");
const email = document.querySelector("#email");
const textarea = document.querySelector("#textarea");
const submitButton = document.querySelector("button");
const message = document.querySelector("#message");

function enableButton() {
    // if all inputs pass validation enable the button
    if (checkLength(firstName.value, 1) && checkLength(textarea.value, 24) && validateEmail(email.value)) {
        // enable button
        submitButton.disabled = false;
    } else {
        // clear the message
        message.innerHTML = "";
        // disable button
        submitButton.disabled = true;
    }
}

// call the same function for each input's keyup event
firstName.addEventListener("keyup", enableButton);
email.addEventListener("keyup", enableButton);
textarea.addEventListener("keyup", enableButton);

// function to run when the form is submitted
function submitForm(event) {
    event.preventDefault();
    // display a message once the form has been submitted
    message.innerHTML = '<div class="message"><i id="info" class="fa fa-info-circle"></i> Your message has been sent!</div>';
    // clear all input values
    form.reset();
}

form.addEventListener("submit", submitForm);

// function to check if the length of the input value is valid
function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}