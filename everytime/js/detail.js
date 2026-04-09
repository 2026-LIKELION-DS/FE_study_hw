const counter = document.getElementById("likecount");
const button = document.getElementById("likeBtn");

let count = 0;

button.addEventListener("click", function () {
  console.log("버튼 클릭");
  count++;
  counter.textContent = count;
});
