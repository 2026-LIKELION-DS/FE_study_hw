// 익명 버튼
const anonymButton = document.querySelector('.anonym_btn');

let isAnonym = false;

anonymButton.addEventListener('click', function() {
    isAnonym = !isAnonym;
    const anonym_img = anonymButton.querySelector('img');
    if (isAnonym) {
        anonym_img.src = "../img/container.articles.write.anonym.active.png";
    } else {
        anonym_img.src = "../img/container.articles.write.anonym.png";
    }
});

// 공감 버튼
const likeBtn = document.querySelector('.like_btn');
const likeCountSpan = document.querySelector('.like_num');

let isLike = false;

likeBtn.addEventListener('click', function() {
    if (!isLike) {
        let like_count = parseInt(likeCountSpan.textContent);
        likeCountSpan.textContent = like_count + 1;
        isLike = true;
    }
});

// 스크랩 버튼
const scrapBtn = document.querySelector('.scrap_btn');
const scrapCountSpan = document.querySelector('.scrap_num');
const scrapImg = scrapBtn.querySelector('img');

let isScrap = false;

scrapBtn.addEventListener('click', function() {
    let scrap_count = parseInt(scrapCountSpan.textContent);
    
    if (!isScrap) {
        scrapCountSpan.textContent = scrap_count + 1;
        scrapBtn.lastChild.textContent = '스크랩 취소';
        scrapImg.style.display = 'none';
        
        isScrap = true;
    } else {
        scrapCountSpan.textContent = scrap_count - 1;
        scrapBtn.lastChild.textContent = '스크랩';
        scrapImg.style.display = 'block';
        
        isScrap = false;
    }
});