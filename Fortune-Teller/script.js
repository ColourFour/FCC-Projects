let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 ="You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

let randomNumber = Math.ceil(Math.random()*5);
let selectedFortune = 0;

if (randomNumber === 1) {
  selectedFortune = fortune1;
}


if (randomNumber === 2) {
  selectedFortune = fortune2;
}


if (randomNumber === 3) {
  selectedFortune = fortune3;
}


if (randomNumber === 4) {
  selectedFortune = fortune4;
}

if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune);