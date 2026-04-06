document.addEventListener("DOMContentLoaded", function () {
  const btnLike = document.getElementById("btn-like");
  const likeCountSpan = document.getElementById("like-count");
  let isLiked = false;

  btnLike.addEventListener("click", function () {
    if (isLiked === true) {
      alert("이미 공감한 글입니다.");
      return;
    }
    let currentCount = parseInt(likeCountSpan.textContent);
    likeCountSpan.textContent = currentCount + 1;
    isLiked = true;
    alert("이 글에 공감하셨습니다.");
  });

  const btnScrap = document.getElementById("btn-scrap");
  const scrapCountSpan = document.getElementById("scrap-count");
  let isScrap = false;

  btnScrap.addEventListener("click", function () {
    let currentScrapCount = parseInt(scrapCountSpan.textContent);

    if (isScrap === false) {
      scrapCountSpan.textContent = currentScrapCount + 1;
      btnScrap.innerHTML = "스크랩 취소";
      isScrap = true;
    } else {
      scrapCountSpan.textContent = currentScrapCount - 1;
      btnScrap.innerHTML =
        '<img src="../img/스크랩.png" alt="스크랩" /> 스크랩';
      isScrap = false;
    }
  });
});
