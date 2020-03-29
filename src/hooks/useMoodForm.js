import { useState, useEffect } from 'react';

export const useMoodForm = () => {
  const [success, setSuccess] = useState(false);
  const [moodName, setMoodName] = useState('');
  const [solutions, setSolutions] = useState(['new']);
  
  const handleSubmit = () => {
    console.log(solutions);
  };

  return { success, handleSubmit, moodName, setMoodName, solutions, setSolutions };
};
