// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
let yCount = 0;
let nCount = 0;
let mCount = 0;

function traverseSurveyData() {
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] == "Yes") {
      yCount++;
    } else if (surveyData[i] == "No") {
      nCount++;
    } else if (surveyData[i] == "Maybe") {
      mCount++;
    }
  }
  outputEl.innerHTML = `<p>Yes: ${yCount} No: ${nCount} Maybe: ${mCount}</p>`;
  console.log(surveyData);
}

let ACount = 0;
let BCount = 0;
let CCount = 0;
let DCount = 0;

function traverseAgeData() {
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      ACount++;
    } else if (ageData[i] >= 18 && ageData[i] <= 35) {
      BCount++;
    } else if (ageData[i] >= 36 && ageData[i] <= 65) {
      CCount++;
    } else {
      DCount++;
    }
  }

  outputEl.innerHTML = `<p> Under 18: ${ACount}</p><p>18-35: ${BCount}</p><p>36-65: ${CCount}</p><p>65+: ${DCount}</p>`;
  console.log(ageData);
}

let Y = 0;
let X = 0;

function traverseNumberData() {
  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      X++;
    } else {
      Y++;
    }
  }
  outputEl.innerHTML = `<p>Even: ${X}</p> <p>Odd: ${Y}</p>`;
  console.log(numberData);
}
