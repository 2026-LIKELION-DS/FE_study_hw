const newId = document.getElementById("new-id");
const newPw = document.getElementById("new-pw");
const newEmail = document.getElementById("new-email");
const signupBtn = document.getElementById("signup-btn");

function checkSignupConditions() {
    if (newId.value !== "" && newEmail.value !== "" && newPw.value !== "" && newPw.value.length >= 8) {
        signupBtn.classList.add("active");
    } else {
        signupBtn.classList.remove("active");
    }
}

newId.addEventListener("input", checkSignupConditions);
newPw.addEventListener("input", checkSignupConditions);
newEmail.addEventListener("input", checkSignupConditions);