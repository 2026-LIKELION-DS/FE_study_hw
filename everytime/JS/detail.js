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
function toggleReplyForm(commentId) {
  const replyArea = document.getElementById(`reply-area-${commentId}`);

  if (replyArea.innerHTML === "") {
    const replyHTML = `
      <div class="reply-item">
        <div class="comment-header">
          <div class="user-info">
            <div class="profile-placeholder"></div>
            <span class="username author">익명(글쓴이)</span>
          </div>
          <div class="comment-actions">
            <a href="#">공감</a> <a href="#">쪽지</a> <a href="#">신고</a>
          </div>
        </div>
        <div class="comment-content">
          <input type="text" placeholder="대댓글을 입력하세요..." style="width:80%; border:none; background:transparent; outline:none;">
          <button style="float:right; border:none; background:#c62917; color:#fff; border-radius:2px; padding:2px 5px; cursor:pointer;">등록</button>
        </div>
        <div class="comment-footer"><span class="time">방금 전</span></div>
      </div>
    `;
    replyArea.innerHTML = replyHTML;
  } else {
    replyArea.innerHTML = "";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const btnSubmit = document.querySelector(".btn-submit");
  const mainInput = document.getElementById("mainCommentInput");

  btnSubmit.addEventListener("click", function () {
    const commentValue = mainInput.value;

    if (commentValue.trim() === "") {
      alert("댓글 내용을 입력해주세요!");
    } else {
      alert(commentValue);
      mainInput.value = "";
    }
  });
});
