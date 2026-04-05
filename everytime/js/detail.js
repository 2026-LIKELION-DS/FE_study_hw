const button = document.getElementById("anonymImg");

let clicked = true;

button.addEventListener("click", function () {
  if (clicked === true) {
    button.src = "../img/container.articles.write.anonym.active.png";
  } else {
    button.src = "../img/container.articles.write.anonym.png";
  }
  clicked = !clicked;
});

const goodButton=document.getElementById("goodBut");
const counter=document.getElementById("statusText1");

let count=15;

goodButton.addEventListener("click", function() {
  counter.textContent=count+1;
});


// const scrap=document.getElementById("statusText3");
// const scrapButton=document.getElementById("scrapBut");

//왜 안됨??
// scrapButton.addEventListener("click", function() {
//   let current=scrap.textContent;

//   if(current==21) {
//     current=22;
//   } else {
//     current=21;
//   }
// });





// 성공한거
// const scrapCounter=document.getElementById("statusText3");
// const scrapButton=document.getElementById("scrapBut");

// let scrapClick = false;

// scrapButton.addEventListener("click", function() {
//   let current=Number(scrapCounter.textContent);

//   if(!scrapClick) {
//     scrapCounter.textContent=current+1;
//   } else{
//     scrapCounter.textContent=current-1;
//   }
//   scrapClick= !scrapClick;
// })

const scrapButton = document.getElementById("scrapBut");
const scrapDeleteBtn = document.getElementById("scrapDelete");
const scrapCounter = document.getElementById("statusText3");

let scrapClick=false;

scrapButton.addEventListener("click",function() {
  let current=Number(scrapCounter.textContent);

  if(!scrapClick) {
    scrapCounter.textContent=current+1;
    scrapButton.style.display="none";
    scrapDeleteBtn.style.display="block";
  }

  scrapClick =!scrapClick;
});

scrapDeleteBtn.addEventListener("click",function() {
  let current=Number(scrapCounter.textContent);

  if(scrapClick) {
    scrapCounter.textContent=current-1;
    scrapDeleteBtn.style.display="none";
    scrapButton.style.display="block";
  }
  scrapClick =!scrapClick;
})


// const scrapDeleteBtn=document.getElementById("scrapBut");
// const scrapDeleteBtn2=document.getElementById("scrapDelete");

// scrapDeleteBtn.addEventListener("click",function() {
//   if(scrapDelete.style.display === "block") {
//     scrapDelete.style.display = "none";
//   } else {
//     scrapDelete.style.display = "block";
//   }
// });

// scrapDeleteBtn2.addEventListener("click",function() {
//   if(scrapBut.style.display === "block") {
//     scrapBut.style.display = "none";
//   } else {
//     scrapBut.style.display = "block";
//   }
// });