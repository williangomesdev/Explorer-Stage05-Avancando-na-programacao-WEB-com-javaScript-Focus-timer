const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const setButton = document.querySelector(".set");
const soundOnButton = document.querySelector(".soundOn");
const soundOffButton = document.querySelector(".soundOff");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes;

function countDown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    

    if (seconds <= 0) {
      seconds = 2;
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

    if (minutes <= 0) {
      playButton.classList.remove("hide");
      pauseButton.classList.add("hide");
      setButton.classList.remove("hide");
      stopButton.classList.add("hide");

      return;
    }

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
});

setButton.addEventListener("click", function () {
  minutes = prompt("Quantos minutos?");
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
});

stopButton.addEventListener("click", function () {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  setButton.classList.remove("hide");
  stopButton.classList.add("hide");
});

soundOnButton.addEventListener("click", function () {
  soundOnButton.classList.add("hide");
  soundOffButton.classList.remove("hide");
});

soundOffButton.addEventListener("click", function () {
  soundOnButton.classList.remove("hide");
  soundOffButton.classList.add("hide");
});
