let isLiked = false;
let isScrapped = false;

function addLike() {
    // 이미 공감 눌렀으면 -> 아무것도 안 하고 함수 종료
    if (isLiked === true) {
        return; 
    }

    // 공감 안 눌렀으면 -> +1
    let voteNum = document.querySelector(".vote-num");
    let currentCount = Number(voteNum.innerText);
    voteNum.innerText = currentCount + 1;
    
    // 상태를 true로 바꿔서 -> 다시 못 누르게 막음
    isLiked = true; 
}

function addScrap() {
    let scrapNum = document.querySelector(".scrap-num");
    let currentCount = Number(scrapNum.innerText);
    
    let scrapBtn = document.querySelector(".scrap"); 

    if (isScrapped === false) { // 스크랩 시
        scrapNum.innerText = currentCount + 1;
        scrapBtn.innerText = "스크랩 취소"; 
        
        isScrapped = true;
    } else { // 스크랩 취소 시
        scrapNum.innerText = currentCount - 1;
        scrapBtn.innerHTML = '<img src="../img/container.articles.buttons.scrap.png" alt="스크랩" class="scrap-icon">스크랩';
        
        isScrapped = false;
    }
}