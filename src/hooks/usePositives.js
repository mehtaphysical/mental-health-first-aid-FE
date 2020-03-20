import { useState, useEffect } from 'react';
import { getMessages, updateMessage } from '../services/messageServices';

export const usePositives = () => {
  const [currentPositive, setCurrentPositive] = useState();
  const [totalUnread, setTotalUnread] = useState(0);

  useEffect(() => {
    getNewCurrentPositive();
  }, []);

  const getNewCurrentPositive = () => {
    getMessages()
      .then(positives => {
        const unreadPositive = positives.find(positive => !positive.seen);
        
        const countUnread = positives.reduce((acc, positive) => {
          if(!positive.seen) acc = acc + 1;
          return acc;
        }, 0);

        setTotalUnread(countUnread);

        if(unreadPositive) {
          setCurrentPositive(unreadPositive);
          updateMessage(unreadPositive._id, { seen: true });
        } else {
          const index = Math.floor(Math.random() * positives.length);
          setCurrentPositive(positives[index]);
        }
      });
  };

  return { currentPositive, totalUnread, getNewCurrentPositive };
};
