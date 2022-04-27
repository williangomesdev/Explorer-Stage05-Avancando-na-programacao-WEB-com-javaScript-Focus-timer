import Controls from "./controls.js";

import Timer from "./timer.js";

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const setButton = document.querySelector(".set");
const soundOnButton = document.querySelector(".soundOn");
const soundOffButton = document.querySelector(".soundOff");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

let timerTimeOut;

//Executar a factory
// injeção de dependências
const controls = Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
});

//Executar a factory
// injeção de dependências
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls: controls.reset,
});

//Eventos
playButton.addEventListener("click", function () {
  controls.play();
  timer.countDown();
});

pauseButton.addEventListener("click", function () {
  controls.pause();
  timer.hold();
});

setButton.addEventListener("click", function () {
  let newMinutes = controls.getMinutes();
  if (!newMinutes) {
    timer.reset();
    return;
  }

  minutes = newMinutes;
  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});

stopButton.addEventListener("click", function () {
  controls.reset();
  timer.reset();
});

soundOnButton.addEventListener("click", function () {
  soundOnButton.classList.add("hide");
  soundOffButton.classList.remove("hide");
});

soundOffButton.addEventListener("click", function () {
  soundOnButton.classList.remove("hide");
  soundOffButton.classList.add("hide");
});
