import React from 'react';
import { Positive } from './Positive';
import { usePositives } from '../../hooks/usePositives';


export const Positives = () => {
  const { currentPositive, totalUnread, getNewCurrentPositive } = usePositives();

  const render = currentPositive ? (
    <Positive key={currentPositive._id} message={currentPositive.message} author={currentPositive.author} seen={currentPositive.seen} />
  ) : (
    <p>Loading...</p>
  );

  return (
    <section>
      <h2>Positives</h2>
      <h3>Unread: {totalUnread > 0 ? totalUnread - 1 : totalUnread}</h3>
      {render}
      <button onClick={getNewCurrentPositive}>Get Another</button>
    </section>
  );
};
