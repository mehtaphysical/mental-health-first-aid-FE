import React, { useState, useEffect } from 'react';
import { getMessages, updateMessage } from '../../services/messageServices';
import { Positive } from './Positive';


export const Positives = () => {
  const [currentPositive, setCurrentPositive] = useState();
  const [totalUnread, setTotalUnread] = useState(0);

  useEffect(() => {
    getNewCurrentPositive();
  }, []);

  const getNewCurrentPositive = () => {
    getMessages()
      .then(positives => {
        const unread = positives.find(positive => !positive.seen);
        const countUnread = positives.reduce((acc, positive) => {
          if(!positive.seen) acc = acc + 1;
          return acc;
        }, 0);
        setTotalUnread(countUnread);
        if(unread) {
          setCurrentPositive(unread);
          updateMessage(unread._id, { seen: true });
        } else {
          const index = Math.floor(Math.random() * positives.length);
          setCurrentPositive(positives[index]);
        }
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
      <h2>Unread: {totalUnread > 0 ? totalUnread - 1 : totalUnread}</h2>
      {render}
      <button onClick={getNewCurrentPositive}>Get Another</button>
    </section>
  );
};
