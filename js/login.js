const pwLength = document.querySelector(".input-pw");
const inputTxt = document.querySelector(".input-login");
const submitBtn = document.querySelector(".inputSubmit");

function checkInput(){
    if ((pwLength.value.length >= 8) && (inputTxt.value.length > 0)){
        submitBtn.style.backgroundColor = "#ff3939";
    }else{
        submitBtn.style.backgroundColor = "rgb(171, 171, 171)";
    }
}
inputTxt.addEventListener("input", checkInput);
pwLength.addEventListener("input", checkInput);