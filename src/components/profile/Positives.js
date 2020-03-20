import React, { useState, useEffect } from 'react';
import { getMessages, updateMessage } from '../../services/messageServices';
import { Positive } from './Positive';


export const Positives = () => {
  const [currentPositive, setCurrentPositive] = useState();

  useEffect(() => {
    getNewCurrentPositive();
  }, []);

  const getNewCurrentPositive = () => {
    getMessages()
      .then(positives => {
        const index = Math.floor(Math.random() * positives.length);
        setCurrentPositive(positives[index]);
        updateMessage(positives[index]._id, { seen: true });
      });
  };

  const render = currentPositive ? (
    <Positive key={currentPositive._id} message={currentPositive.message} author={currentPositive.author} seen={currentPositive.seen} />
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
