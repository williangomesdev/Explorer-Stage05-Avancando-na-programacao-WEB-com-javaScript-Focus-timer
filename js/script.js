const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");
const setButton = document.querySelector(".set");

//Event-driven = programação orientada a eventos
playButton.addEventListener("click", function () {
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");
});

pauseButton.addEventListener("click", function () {
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
});

//Programação imperativa = dar ordens passo a passo para ser feito
//Programação declarativa = somente o que tem que fazer
//Callback = toda função que é mandada como argumento, após uma ação  chamo uma função de volta
