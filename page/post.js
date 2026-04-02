const textsubmit = document.querySelector('.textsubmit');
if(textsubmit){
    textsubmit.addEventListener("click", function(e){
    window.location.href="post.html";    
});
}

const article1 = document.querySelector('.article1');
if(article1){
    article1.addEventListener("click", function(){
        window.location.href="detail.html"
    });
}



const hashTag = document.querySelector('.hashTag');
const text_Content = document.querySelector('.text_Content');
hashTag.addEventListener("click", function(e){
    text_Content.value += "#"; 
    text_Content.focus();
});

const questionBox = document.querySelector('#questionBox');
const questionContainer = document.querySelector('.questionContainer');
questionBox.addEventListener("change",function(){
    if (questionBox.checked){
        questionContainer.style.display = "flex";
    }else{
                questionContainer.style.display = "none";
    }
});