const paragraphPassword = document.getElementById("password");
const paragraphRangeNumber = document.querySelector(".rangeNumber");
const inputRange = document.getElementById("rangeInput");
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const characters = ["'", ":", "!", "@", "#", "$", "^", ")", "&", "*", "%", "."];

const arrayOfArray = [letters, numbers, characters];

let passwordLegth = 10;
let strongPassword = [];

inputRange.addEventListener("change", () => {
  paragraphRangeNumber.innerText = inputRange.value;
});

for (let i = 0; i < passwordLegth; i++) {
  const myArray = arrayOfArray[getRandomNumber(0, arrayOfArray.length - 1)];
  const randomCharacter = myArray[getRandomNumber(0, myArray.length - 1)];
  strongPassword.push(randomCharacter);
}

strongPassword = strongPassword.join("");

paragraphPassword.innerText = `${paragraphPassword.textContent} ${strongPassword}`;
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}
