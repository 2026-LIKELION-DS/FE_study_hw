const likeBtn = document.getElementById("likeBtn");
const scrapBtn = document.getElementById("scrapBtn");

const likecount = document.getElementById("likecount");
const scrapcount = document.getElementById("scrapcount");

let liked = false;
let scrapped = false;

likeBtn.addEventListener("click", function () {
  if (!liked) {
    let currentLike = Number(likecount.textContent);
    likecount.textContent = currentLike + 1;
    liked = true;
  }
});

scrapBtn.addEventListener("click", function () {
  if (!scrapped) {
    let currentScrap = Number(scrapcount.textContent);
    scrapcount.textContent = currentScrap + 1;
    scrapBtn.innerHTML =
      '<img src="../img/container.articles.buttons.scrap.png" alt="스크랩이미지"> 스크랩 취소';
    scrapped = true;
  } else {
    let currentScrap = Number(scrapcount.textContent);
    scrapcount.textContent = currentScrap - 1;
    scrapBtn.innerHTML =
      '<img src="../img/container.articles.buttons.scrap.png" alt="스크랩이미지"> 스크랩';
    scrapped = false;
  }
});
