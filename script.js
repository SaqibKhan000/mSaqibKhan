  //For Rotating Text/////////////
let text = document.querySelector(".circle .text");
text.innerHTML = text.innerText.split("").map((char, i) => 
    `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
).join("");

let firstSecText = document.querySelector(".first .circle .text");
firstSecText.innerHTML = firstSecText.innerText.split("").map((firstSecChar, firstSecInd) => 
    `<span style="transform:rotate(${firstSecInd * 13}deg)">${firstSecChar}</span>`
).join("");




//For Tabs ////////////////////////
let tabs = document.querySelectorAll(".tab");
let allContent = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
     tabs.forEach((tab) => {tab.classList.remove("active")});
     allContent.forEach((content) => {content.classList.remove("active")});
     tab.classList.add("active");
     allContent[index].classList.add("active");
  }); 
});