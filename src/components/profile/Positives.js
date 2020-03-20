import React, { useState, useEffect } from 'react';
import { getMessages } from '../../services/messageServices';
import { Positive } from './Positive';


export const Positives = () => {
  const [positives, setPositives] = useState();
  const [currentPositive, setCurrentPositive] = useState();

  useEffect(() => {
    getMessages()
      .then(positives => {
        setPositives(positives);
        const index = Math.floor(Math.random() * positives.length);
        setCurrentPositive(positives[index]);
      });
  }, []);

  const getNewCurrentPositive = () => {
    console.log('I was clicked');
    const index = Math.floor(Math.random() * positives.length);
    setCurrentPositive(positives[index]);
  };

  const render = currentPositive ? (
    <Positive key={currentPositive._id} message={currentPositive.message} author={currentPositive.author} />
  ) : (
    <p>Loading...</p>
  );

  return (
    <section>
      <h1>Positives</h1>
      {render}
      <button onClick={getNewCurrentPositive}>Get Another</button>
    </section>
  );
};
