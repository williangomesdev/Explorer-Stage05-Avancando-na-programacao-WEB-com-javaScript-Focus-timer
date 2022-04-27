import Controls from "./controls.js";
import Timer from "./timer.js";
import {
  playButton,
  pauseButton,
  stopButton,
  setButton,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";
import Events from "./events.js";

import Sound from "./sounds.js";

//Executar a factory
// injeção de dependências
//Registrado no Events
const controls = Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
});

//Executar a factory
// injeção de dependências
//Registrado no Events
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

//Factory sound
//Registrado no Events
const sound = Sound();

//Eventos
Events({
  controls,
  timer,
  sound,
});
