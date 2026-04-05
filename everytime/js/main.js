function writeNew() {
    let newArticleBox = document.querySelector(".post-new-article");
    let writeForm = document.querySelector(".write");

    newArticleBox.style.display = "none";
    writeForm.style.display = "flex"; 
}

function toggleQuestion(checkbox) {
    let messageBox = document.querySelector(".question");
    let questionText = document.querySelector(".question-text"); // 질문 글자만 색 바꾸기 위해

    if (checkbox.checked === true) {
        messageBox.style.display = "block";
        questionText.style.color = "#05bcbc";
    } 
    else {
        messageBox.style.display = "none";
        questionText.style.color = "#666";
    }
}