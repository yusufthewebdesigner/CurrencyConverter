import { countryList } from "./countryCoed.js";

// creating dark theme
let container = document.querySelector(".container");
let toogleBtn = document.querySelector("#icon");

toogleBtn.addEventListener("click", () => {
  // dark mode
  container.classList.toggle("darkMode");
  // icon change
  if (toogleBtn.classList.value.match("moon")) {
    toogleBtn.classList.value = "fa-solid fa-sun";
    toogleBtn.style.color = "white";
  } else {
    toogleBtn.classList.value = "fa-solid fa-moon";
    toogleBtn.style.color = "black";
  }
});

// Dealing with dropDown
let dropdowns = document.querySelectorAll("select");
// creating option with each currency codes
for (const eachSelect of dropdowns) {
  for (const cntryCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = cntryCode;
    newOption.value = cntryCode;
    eachSelect.append(newOption);
  }

  // Flag changing function
  eachSelect.addEventListener("change", function () {
    let selectedCode = this.value;
    let flagImg = this.parentElement.querySelector("img");
    flagImg.src = `https://flagsapi.com/${countryList[selectedCode]}/shiny/64.png`;
  });
}

let amount = document.querySelector("#userInput");
let button = document.querySelector("#xngBtn");
let fromcntry = document.querySelector(".from select");
let tocntry = document.querySelector(".to select");
let messageBox = document.querySelector(".message");

// Calculation function (API: ExConvert API)
button.addEventListener("click", (e) => {
  e.preventDefault();
  let amountValue = +amount.value; // string to number should be in funnction must, not outside
  let apiKey = `d5c0d44f-524e8629-19269ef9-d5c99b70`;
  let apiUrl = `https://api.exconvert.com/convert?access_key=${apiKey}&from=${fromcntry.value}&to=${tocntry.value}&amount=${amountValue}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (amountValue === 0) {
        amount.value = 1;
        messageBox.innerText = "Please, enter a number above 0";
        messageBox.style.color = "red";
      } else if (amountValue < 0) {
        amount.value = 1;
        messageBox.innerText = "Please, enter a Positive number";
        messageBox.style.color = "red";
      } else {
        let exchangeRate = data.result.rate;
        messageBox.innerText = `${amountValue} ${fromcntry.value} = ${(
          amountValue * exchangeRate
        ).toFixed(2)} ${tocntry.value}`;
      }
    });
});
