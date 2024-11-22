// JS module project (Light Speed Distance Calculator)
var calcBtn = document.getElementById("calculate");
var timeDisp = document.getElementById("time-display");
var timeUnitEl = document.getElementById("time-unit-disp");
var ansDisp = document.getElementById("answer-display");
var timeInptEl = document.getElementById("time-inpt");
var selectUnit = document.getElementById("dist-time-select");
var Formula;
var lightSpeed;

Number(lightSpeed);
Number(Formula);

calcBtn.addEventListener("click", calculate);

function calculate() {
  let timeNum = +timeInptEl.value;

  //change unit/number displays
  timeDisp.innerHTML = timeNum;
  timeUnitEl.innerHTML = selectUnit.value;
  console.log(timeInptEl);
  console.log(selectUnit);

  //if statement
  if (selectUnit.value == "Minutes") {
    lightSpeed = 17987547480;
  } else if (selectUnit.value == "Hours") {
    lightSpeed = 1079252848800;
  }

  //Process (calculate how much distance is covered when at light speed for the input time)
  Formula = (timeNum * lightSpeed) / 1000;
  ansDisp.innerHTML = Formula + "Km";
  console.log(ansDisp);
}

// d= t * v
// d(meters) = (time input(m/min or m/h)) x (speed of light (m/min or m/h)) answer is in meters
// answer of above   x 1000
// /60
// ---------------------------------------------
// /3600

// 1079252848800 m/h
// 17987550000 m/min
// 299,792,458 metres per second

var darkMode = document.getElementById("dark-mode");
var lightMode = document.getElementById("light-mode");

var bodyEl = document.getElementById("body");

darkMode.addEventListener("click", darkChange);
lightMode.addEventListener("click", lightChange);

function lightChange() {
  bodyEl.style.backgroundColor = "white";
  darkMode.style.backgroundColor = "#ececec";
  lightMode.style.backgroundColor = "#ececec";
  calcBtn.style.backgroundColor = "#ececec";
  ansDisp.style.backgroundColor = "#ececec";
  ansDisp.style.color = "black";
  timeInptEl.style.color = "black";
  darkMode.style.color = "black";
  lightMode.style.color = "black";
  calcBtn.style.color = "black";
  bodyEl.style.color = "black";
  selectUnit.style.color = "black";
  timeInptEl.style.backgroundColor = "#ececec";
  selectUnit.style.backgroundColor = "#ececec";
  bodyEl.style.borderLeft = "50px solid #f6f6f6";
  bodyEl.style.borderRight = "20px solid #e1e1e1";
  bodyEl.style.borderBottom = "solid 30px #ececec";
  bodyEl.style.borderTop = "10px solid #d0d0d0";
}

function darkChange() {
  bodyEl.style.borderLeft = "50px solid #3c3c3c";
  bodyEl.style.borderRight = "20px solid #111111";
  bodyEl.style.borderBottom = "solid 30px #1e1e1e";
  bodyEl.style.borderTop = "10px solid #000000";
  bodyEl.style.color = "white";
  calcBtn.style.color = "white";
  darkMode.style.color = "white";
  lightMode.style.color = "white";
  selectUnit.style.color = "white";
  timeInptEl.style.color = "white";
  ansDisp.style.color = "white";
  bodyEl.style.backgroundColor = "#4d4d4d";
  darkMode.style.backgroundColor = "#3c3c3c";
  lightMode.style.backgroundColor = "#3c3c3c";
  ansDisp.style.backgroundColor = "#3c3c3c";
  timeInptEl.style.backgroundColor = "#3c3c3c";
  selectUnit.style.backgroundColor = "#3c3c3c";
  calcBtn.style.backgroundColor = "#3c3c3c";
}
