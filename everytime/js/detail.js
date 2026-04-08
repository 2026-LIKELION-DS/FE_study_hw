const tta_btn = document.querySelector(".ttabong_button");
const scrap_btn = document.querySelector(".scrap_button");


const scrap_btn_text = scrap_btn.querySelector("div");


const tta_display_num = document.querySelector(".ttabong_count");
const scrap_display_num = document.querySelector(".scrap_count");

let tta_count = 0;
let scr_count = 0;
let isScrapped = false;


tta_btn.addEventListener("click", function () {
    tta_count++;
    tta_display_num.textContent = tta_count;
    
    tta_btn.disabled = true; // 여기부터 아래 세줄 제미나이가... -> 뭔뜻인지?
    tta_btn.style.opacity = "0.5"; // 뭔 기능인지... 모르겠다
    tta_btn.style.cursor = "default"; //이게 왜 필요한거임?
});


scrap_btn.addEventListener("click", function() {
    if (!isScrapped) {
        scr_count++;
        scrap_btn_text.textContent = "스크랩 취소";
        isScrapped = true;
    } else {
        scr_count--;
        scrap_btn_text.textContent = "스크랩";
        isScrapped = false;
    }
    scrap_display_num.textContent = scr_count;
});