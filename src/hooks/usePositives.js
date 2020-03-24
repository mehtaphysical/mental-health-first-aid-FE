import { useState } from 'react';
import { getMessages, updateMessage } from '../services/messageServices';

export const usePositives = () => {
  const [currentPositive, setCurrentPositive] = useState({ _id: false });
  const [totalUnread, setTotalUnread] = useState(0);
  const [display, setDisplay] = useState(false);

  const getNewCurrentPositive = () => {
    getMessages()
      .then(positives => {
        const countUnread = positives.reduce((acc, positive) => {
          if(!positive.seen) acc = acc + 1;
          return acc;
        }, 0);

        setTotalUnread(countUnread);

        const unreadPositive = positives.find(positive => !positive.seen);

        if(unreadPositive) {
          setCurrentPositive(unreadPositive);
          updateMessage(unreadPositive._id, { seen: true });
    
        } else {
          let index = Math.floor(Math.random() * positives.length);
          while(currentPositive._id === positives[index]._id && positives.length > 1) {
            index = Math.floor(Math.random() * positives.length);
          }

          setCurrentPositive(positives[index]);
        }
      });
  };

  return { currentPositive, totalUnread, display, setDisplay, getNewCurrentPositive };
};
