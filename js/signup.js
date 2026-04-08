const pwLength = document.querySelector(".inputPw");
const inputTxt = document.querySelectorAll(".inputBox");
const submitBtn = document.querySelector(".submitBtn");

function checkInput(){
    let check =true;

    inputTxt.forEach((input)=>{
        if(input.value.length===0){check=false;}
    });

    if (pwLength.value.length >= 8 && check){
        submitBtn.style.backgroundColor = "#ff3939";
    } else {
        submitBtn.style.backgroundColor = "rgb(166, 165, 165)";
    }
}

inputTxt.forEach((input) => {
    input.addEventListener("input", checkInput);
});
