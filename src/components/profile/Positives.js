import React, { useState, useEffect } from 'react';
import { getMessages } from '../../services/messageServices';
import { Positive } from './Positive';


export const Positives = () => {
  const [positives, setPositives] = useState();

  useEffect(() => {
    getMessages()
      .then(positives => {
        setPositives(positives);
      });
  }, []);

  const render = positives ? (
    positives.map((positive) => <Positive key={positive._id} message={positive.message} author={positive.author} />)
  ) : (
    <p>Loading...</p>
  );

  return (
    <section>
      <h1>Positives</h1>
      {render}
    </section>
  );
};
