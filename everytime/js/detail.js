const ttabong_num = document.getElementById("ttabong_count");
const tta_btn = document.getElementById("ttabong_button");

const scrap_num = document.getElementById("scrap_count");
const scrap_btn = document.getElementById("scrap_button");

let tta_count = 0;

tta_btn.addEventListener("click", function (){
    tta_count++;
    ttabong_num.textContent = tta_count;
});

let scr_count = 0;

scrap_btn.addEventListener("click", function() {
    scr_count++;
    scrap_num.textContent = scr_count;
});