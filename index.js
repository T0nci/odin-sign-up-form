const password = document.querySelector("#pwd");
const confirmedPassword = document.querySelector("#confirmed-pwd");
const error = document.querySelector("span.match");

password.addEventListener("blur", matchPasswords);
confirmedPassword.addEventListener("blur", matchPasswords);

function matchPasswords() {
    if (password.value === confirmedPassword.value) {
        password.classList.remove("error");
        confirmedPassword.classList.remove("error");
        error.textContent = "";
    } else {
        password.classList.add("error");
        confirmedPassword.classList.add("error");
        error.textContent = "* Passwords do not match";
    }
}