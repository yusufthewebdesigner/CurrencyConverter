// All Country code and currency code
const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

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
  amountValue = +amount.value; // string to number should be in funnction must, not outside
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
      console.log(data.result.rate);
    });
});
