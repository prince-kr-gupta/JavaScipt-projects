let submitBtn = document.querySelector("#submitBtn");
let countLabel = document.querySelector("#countLabel");
let myH3 = document.querySelector("#myH3");
let myH4 = document.querySelector("#myH4");

let random;

submitBtn.onclick = function() {
    let input = document.querySelector("#input").value;
     random = Math.floor(Math.random() * 100) + 1 ;
     myH3.textContent = `Random number : ${random}`;
     
     if(input == random) {
        myH4.textContent = `You Won `;
     }
     else {
        myH4.textContent = `You Lose`;
     }
}



