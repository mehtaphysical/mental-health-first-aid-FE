import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendMood, SET_MOOD_ERROR } from '../actions/moodActions';

export const useMoodForm = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [moodName, setMoodName] = useState('');
  const [solutions, setSolutions] = useState(['new']);
  
  const handleSubmit = () => {
    let solutionsBlanksRemoved = solutions;
    if(solutionsBlanksRemoved.includes('new')) {
      solutionsBlanksRemoved = solutions.reduce((acc, solution) => {
        if(solution !== 'new') acc.push(solution);
        return acc;
      }, []);
    }
    return dispatch(sendMood({ moodName, solutions: solutionsBlanksRemoved }))
      .then(res => {
        if(res.type === SET_MOOD_ERROR) {
          throw new Error(res.payload.message);
        } else {
          console.log('Successful!!!');
        }
      });
  };

  return { success, handleSubmit, moodName, setMoodName, solutions, setSolutions };
};
