const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const setButton = document.querySelector(".set");
const soundOnButton = document.querySelector(".soundOn");
const soundOffButton = document.querySelector(".soundOff");

//Eventos
playButton.addEventListener("click", function () {
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");
  setButton.classList.add("hide");
  stopButton.classList.remove("hide");
});

pauseButton.addEventListener("click", function () {
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  setButton.classList.add("hide");
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
