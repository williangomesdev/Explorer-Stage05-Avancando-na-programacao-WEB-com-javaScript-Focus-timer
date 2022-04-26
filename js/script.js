const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const setButton = document.querySelector(".set");
const soundOnButton = document.querySelector(".soundOn");
const soundOffButton = document.querySelector(".soundOff");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

function resetControls() {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  setButton.classList.remove("hide");
  stopButton.classList.add("hide");
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
}

function countDown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      resetControls();
      return;
    }

    if (seconds <= 0) {
      seconds = 2;
      --minutes;
    }

    updateTimerDisplay(minutes, String(seconds - 1));

    countDown();
  }, 1000);
}

//Eventos
playButton.addEventListener("click", function () {
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");
  setButton.classList.add("hide");
  stopButton.classList.remove("hide");
  countDown();
});

pauseButton.addEventListener("click", function () {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  setButton.classList.add("hide");
  clearTimeout(timerTimeOut); //Parar o setTimeOut
});

setButton.addEventListener("click", function () {
  let newMinutes = prompt("Quantos minutos?");
  //Caso valor nulo, resete
  if (!newMinutes) {
    resetTimer();
    return;
  }

  minutes = newMinutes;
  updateTimerDisplay(minutes, 0);
});

stopButton.addEventListener("click", function () {
  resetControls();
  resetTimer();
});

soundOnButton.addEventListener("click", function () {
  soundOnButton.classList.add("hide");
  soundOffButton.classList.remove("hide");
});

soundOffButton.addEventListener("click", function () {
  soundOnButton.classList.remove("hide");
  soundOffButton.classList.add("hide");
});
