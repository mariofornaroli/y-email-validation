var emailIn = document.getElementById("email")

const resetValidation = () => {
    emailIn.classList.remove('invalid')
    emailIn.classList.remove('valid')
}

emailIn.addEventListener('keyup', function () {
    resetValidation();

    var emailValue = this.value;
    if (!emailValue) {
        return;
    }

    // simple regex (less accurate)
    var reg = /\S+@\S+\.\S+/;
    //complex regex (more accurate)
    reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let validationValue = reg.test(emailValue);

    if (validationValue) {
        emailIn.classList.add('valid')
    } else {
        emailIn.classList.add('invalid')
    }
});