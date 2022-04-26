//factory = uma função que organiza todas as informações necessárias para exportar, uma função que retorna um objeto

//Named export
export function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls,
}) {
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

  //shorthand
  return {
    countDown,
    resetTimer,
  };
}
