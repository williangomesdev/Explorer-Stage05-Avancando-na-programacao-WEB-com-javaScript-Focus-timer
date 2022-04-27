//factory = uma função que organiza todas as informações necessárias para exportar, uma função que retorna um objeto

//Named export
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let minutes = Number(minutesDisplay.textContent);
  let timerTimeOut;

  function updateDisplay(newMinutes, seconds) {
    //falsy
    //truthy
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        resetControls();
        updateDisplay();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countDown();
    }, 1000);
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function hold() {
    clearTimeout(timerTimeOut); //Parar o setTimeOut
  }

  //shorthand
  return {
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  };
}
