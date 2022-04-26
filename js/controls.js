//Factory
export default function Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
}) {
  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    setButton.classList.add("hide");
    stopButton.classList.remove("hide");
  }

  function pause() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
    setButton.classList.add("hide");
  }

  function reset() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
    setButton.classList.remove("hide");
    stopButton.classList.add("hide");
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      return false;
    }

    return newMinutes;
  }

  return {
    play,
    pause,
    reset,
    getMinutes,
  };
}
