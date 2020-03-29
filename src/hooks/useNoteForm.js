import { useState } from 'react';

export const useNoteForm = () => {
  const [success, setSuccess] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();


  };

  return { success, handleSubmit, title, setTitle, text, setText };
}