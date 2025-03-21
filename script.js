let text = document.querySelector(".circle .text");
text.innerHTML = text.innerText.split("").map((char, i) => 
    `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
).join("");

let firstSecText = document.querySelector(".first .circle .text");
firstSecText.innerHTML = firstSecText.innerText.split("").map((firstSecChar, firstSecInd) => 
    `<span style="transform:rotate(${firstSecInd * 13}deg)">${firstSecChar}</span>`
).join("");

