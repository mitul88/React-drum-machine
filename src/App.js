import React from "react";
import './App.css';
import DrumPad from "./component/DrumPad"


// const keys = ['Q','W','E','A','S','D','Z','X','C'];
const sounds = [
  {
    key: 'Q',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key: 'W',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key: 'A',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key: 'S',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key: 'D',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key: 'Z',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    mp3:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
]

// for keypress sound vanilla js is used
document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if(audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active');

    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is pressed`;

    audio.play();
  }
})
 
const App = () => {
    return (
        <div id="display" className="display">
          <h1>Press the following keys</h1>
          {
            sounds.map((sound, idx)=>(
// each value i.e key will display as text and their index i.e. idx will be set as key
              <DrumPad text={sound.key} key={idx} audio={sound.mp3} />
              ))
          }
        </div>
    );
  
}

export default App;
