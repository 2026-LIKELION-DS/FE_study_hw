// 에브리타임 글 작성페이지 클론코딩
const questionCheck = document.getElementById('question_checkbox');

questionCheck.addEventListener('change', function() {
    if (this.checked) {
        // 체크박스가 선택되면 보이게 함
        question_info.style.display = 'block';
    } else {
        // 체크가 해제되면 다시 숨김
        question_info.style.display = 'none';
    }
});
