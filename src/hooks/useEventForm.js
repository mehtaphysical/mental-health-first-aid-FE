import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchPatchEvent, SET_EVENT_ERROR } from '../actions/eventActions';

export const useEventForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    return dispatch(fetchPatchEvent({ title, date }))
      .then(res => {
        if(res.type === SET_EVENT_ERROR) throw new Error(res.payload.message);
      });
  };

  return { title, setTitle, date, setDate, success, setSuccess, handleSubmit };
};
