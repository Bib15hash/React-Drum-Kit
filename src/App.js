import React, { useEffect } from "react";
import clap from "../public/sounds/clap.wav";
import boom from "../public/sounds/boom.wav";
import hihat from "../public/sounds/hihat.wav";
import kick from "../public/sounds/kick.wav";
import openhat from "../public/sounds/openhat.wav";
import ride from "../public/sounds/ride.wav";
import snare from "../public/sounds/snare.wav";
import tink from "../public/sounds/tink.wav";
import tom from "../public/sounds/tom.wav";

import "./App.css";

const App = () => {

  useEffect(() => {
    const handleKeyDown = (e) => {
      handleClick(e, e.key)
      }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  const handleClick = (e, name) => {
    switch (name) {
      case 'A': const audio1 = new Audio(clap)
                audio1.play();
                break;
      case 'a': const audio2 = new Audio(clap)
                audio2.play();
                break;
      case 'S':const audio3 = new Audio(hihat)
                audio3.play();
                break;
      case 's':const audio4 = new Audio(hihat)
                audio4.play();
                break;
      case 'D':const audio5 = new Audio(kick)
                audio5.play();
                break;
      case 'd':const audio6 = new Audio(kick)
                audio6.play();
                break;
      case 'F':const audio7 = new Audio(openhat)
                audio7.play();
                break;
      case 'f':const audio8 = new Audio(openhat)
                audio8.play();
                break;
      case 'G':const audio9 = new Audio(boom)
                audio9.play();
                break;
      case 'g':const audio10 = new Audio(boom)
                audio10.play();
                break;
      case 'H':const audio11 = new Audio(ride)
                audio11.play();
                break;
      case 'h':const audio12 = new Audio(ride)
                audio12.play();
                break;
      case 'J': const audio13 = new Audio(snare)
                audio13.play();
                break;
      case 'j': const audio14 = new Audio(snare)
                audio14.play();
                break;
      case 'K':const audio15 = new Audio(tom)
                audio15.play();
                break;
      case 'k':const audio16 = new Audio(tom)
                audio16.play();
                break;  
      case 'L': const audio17 = new Audio(tink)
                audio17.play();
                break;
      case 'l': const audio18 = new Audio(tink)
                audio18.play();
                break;
    }
  }
  
  return (
      <div className="root">
        <button name="A" onClick={(e) => {handleClick(e, e.target.name)}} className="button">A <div className="slight">CLAP</div></button>
        <button name="S" onClick={(e) => {handleClick(e, e.target.name)}} className="button">S <div className="slight">HIHAT</div></button>
        <button name="D" onClick={(e) => {handleClick(e, e.target.name)}} className="button">D <div className="slight">KICK</div></button>
        <button name="F" onClick={(e) => {handleClick(e, e.target.name)}} className="button">F <div className="slight">O-HAT</div></button>
        <button name="G" onClick={(e) => {handleClick(e, e.target.name)}} className="button">G <div className="slight">BOOM</div></button>
        <button name="H" onClick={(e) => {handleClick(e, e.target.name)}} className="button">H <div className="slight">RIDE</div></button>
        <button name="J" onClick={(e) => {handleClick(e, e.target.name)}} className="button">J <div className="slight">SNARE</div></button>
        <button name="K" onClick={(e) => {handleClick(e, e.target.name)}} className="button">K <div className="slight">TOM</div></button>
        <button name="L" onClick={(e) => {handleClick(e, e.target.name)}} className="button">L <div className="slight">TINK</div></button>
      </div>
  
    );
    
  }

export default App;
