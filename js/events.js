//Importar botões, elementos HTML
import {
  playButton,
  pauseButton,
  stopButton,
  setButton,
  soundOnButton,
  soundOffButton,
} from "./elements.js";

export default function Events({ controls, timer, sound }) {
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
    sound.bgAudio.pause();
  });

  soundOffButton.addEventListener("click", function () {
    soundOnButton.classList.remove("hide");
    soundOffButton.classList.add("hide");
    sound.bgAudio.play();
  });

  return {
    controls,
    timer,
    sound,
  };
}
