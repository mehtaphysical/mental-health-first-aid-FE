import React, { useState, useEffect } from 'react';


export const Breathing = () => {
  const [seconds, setSeconds] = useState(0);
  const [currentDirection, setCurrentDirection] = useState('Breath In');
  
  const [inhale, setInhale] = useState(true);

  useEffect(() => {
    if(inhale) {
      setTimeout(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    if(seconds > 3) {
      setInhale(false);
      setCurrentDirection('Breath OUT');
    }
    if(seconds < 3) {
      setInhale(true);
      setCurrentDirection('Breath IN');}

    // if(seconds <= cycleCount[phase]) {
    //   setTimeout(() => {
    //     setSeconds(seconds + 1);
    //   }, 1000);
    // } else if(phase < 2) {
    //   setPhase(phase + 1);
    //   setSeconds(1);
    //   setCurrentDirection(directions[phase + 1]);
    // } else if(phase > 1) {
    //   setPhase(0);
    //   setSeconds(1);
    //   setCurrentDirection(directions[0]);
    // }
  }, [seconds]);


  return (
    <section>
      <p>{seconds}</p>
      <p>{currentDirection}</p>
    </section>

  );
};
