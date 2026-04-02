function toggleQuestion(checkbox) {
    let messageBox = document.querySelector(".question-notice");
    let messageText = document.querySelector(".question-text");
    let questionCheck = document.querySelector(".question-check");
    let checkText = document.querySelector(".check-text");

    if (checkbox.checked === true) {
        messageBox.style.display = "block";
        messageText.style.color = "#05bcbc";
        checkText.style.color = "#05bcbc";
    } 
    else {
        messageBox.style.display = "none";
        messageText.style.color = "#666";
        checkText.style.color = "#666";
    }
}