import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostMood, SET_MOOD_ERROR, fetchPatchMood } from '../actions/moodActions';

export const useMoodForm = (state) => {
  const dispatch = useDispatch();
  const [updating, setUpating] = useState(!!state.moodName);
  const [success, setSuccess] = useState(false);
  const [moodName, setMoodName] = useState(state.moodName ? state.moodName : '');
  const [solutions, setSolutions] = useState(state.solutions ? state.solutions : ['new']);
  
  const handleKeyPress = (event) => {
    if(!solutions.includes('new') && event.key === 'Enter') setSolutions([...solutions, 'new']);
  };

  const handleAdd = () => {
    if(!solutions.includes('new')) setSolutions([...solutions, 'new']);
  };

  const wrapUp = (res) => {
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
  };
  
  const handleSubmit = () => {
    let solutionsCopy = solutions;
    if(solutionsCopy.includes('new') || solutionsCopy.includes('')) {
      solutionsCopy = solutions.reduce((acc, solution) => {
        if(solution !== 'new' && solution.length > 0) acc.push(solution);
        return acc;
      }, []);
    }
    if(updating) return dispatch(fetchPatchMood(state.id, { moodName, solutions: solutionsCopy }))
      .then(res => wrapUp(res));

    else return dispatch(fetchPostMood({ moodName, solutions: solutionsCopy }))
      .then(res => wrapUp(res));
  };

  return { success, handleSubmit, moodName, setMoodName, solutions, setSolutions, handleKeyPress, handleAdd };
};
