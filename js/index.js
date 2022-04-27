import Controls from "./controls.js";
import Timer from "./timer.js";
import {
  playButton,
  pauseButton,
  stopButton,
  setButton,
  soundOnButton,
  soundOffButton,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

import Sound from "./sounds.js";

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
  resetControls: controls.reset,
});

//Factory sound
const sound = Sound();

//Eventos
playButton.addEventListener("click", function () {
  controls.play();
  timer.countDown();
  sound.pressButton();
});

pauseButton.addEventListener("click", function () {
  controls.pause();
  timer.hold();
  sound.pressButton();
});

setButton.addEventListener("click", function () {
  let newMinutes = controls.getMinutes();
  if (!newMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});

stopButton.addEventListener("click", function () {
  controls.reset();
  timer.reset();
  sound.pressButton();
});

soundOnButton.addEventListener("click", function () {
  soundOnButton.classList.add("hide");
  soundOffButton.classList.remove("hide");
  sound.bgAudio.play();
});

soundOffButton.addEventListener("click", function () {
  soundOnButton.classList.remove("hide");
  soundOffButton.classList.add("hide");
  sound.bgAudio.pause();
});
