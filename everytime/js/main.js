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



function toggleNav() {
    const sideHamburger = document.querySelector(".side-hamburger");
    sideHamburger.classList.toggle("active");
}

const menuLinks = document.querySelectorAll(".side-hamburger .banner-top a");

if (menuLinks.length > 0) {
    menuLinks[0].classList.add("active-menu");
}

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("mouseover", function() {
        if (!this.classList.contains("active-menu")) {
            this.style.backgroundColor = "#f9f9f9";
            this.style.color = "#f91f15";
        }
    });

    menuLinks[i].addEventListener("mouseout", function() {
        if (!this.classList.contains("active-menu")) {
            this.style.backgroundColor = "";
            this.style.color = "#1b1a1a";
        }
    });

    menuLinks[i].addEventListener("click", function(event) {
        for (let j = 0; j < menuLinks.length; j++) {
            menuLinks[j].classList.remove("active-menu");
            menuLinks[j].style.backgroundColor = "";
            menuLinks[j].style.color = "#1b1a1a";
        }
        
        this.classList.add("active-menu");
        this.style.backgroundColor = "#f9f9f9";
        this.style.color = "#f91f15";
    });
}

