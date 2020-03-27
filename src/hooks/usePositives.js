import { useState, useEffect } from 'react';
import { getMessages, updateMessage } from '../services/messageServices';

export const usePositives = () => {
  const [currentPositive, setCurrentPositive] = useState({ _id: false });
  const [loading, setLoading] = useState(true);
  const [totalUnread, setTotalUnread] = useState(0);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    getNewCurrentPositive();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [currentPositive]);

  const getNewCurrentPositive = () => {
    setLoading(true);
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

  return { currentPositive, totalUnread, display, setDisplay, getNewCurrentPositive, loading };
};
