const questioncheck = document.getElementById("questioncheck");
const questionNotice = document.getElementById("questionnotice")

questioncheck.addEventListener("change", function() {
    if(questioncheck.checked) {
        questioncheck.classList.add("show");
    } else {
        questionNotice.classList.remove("show")
    }
});