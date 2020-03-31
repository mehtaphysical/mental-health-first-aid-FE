import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendMood, SET_MOOD_ERROR } from '../actions/moodActions';

export const useMoodForm = (state) => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [moodName, setMoodName] = useState(state.moodName ? state.moodName : '');
  const [solutions, setSolutions] = useState(state.solutions ? state.solutions : ['new']);

  console.log(state);

  const handleKeyPress = (event) => {
    if(!solutions.includes('new') && event.key === 'Enter') setSolutions([...solutions, 'new']);
  };

  const handleAdd = () => {
    if(!solutions.includes('new')) setSolutions([...solutions, 'new']);
  };
  
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
          setSuccess(true);
          setMoodName('');
          setSolutions(['new']);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        }
      });
  };

  return { success, handleSubmit, moodName, setMoodName, solutions, setSolutions, handleKeyPress, handleAdd };
};
