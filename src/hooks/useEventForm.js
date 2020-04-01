import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchPatchEvent, SET_EVENT_ERROR } from '../actions/eventActions';

export const useEventForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = () => {
    if(!title || !date) setError('All feilds must be filled out');
    else return dispatch(fetchPatchEvent({ title, date }))
      .then(res => {
        if(res.type === SET_EVENT_ERROR) throw new Error(res.payload.message);
        else setSuccess(true);
      });
  };

  return { title, setTitle, date, setDate, success, setSuccess, error, handleSubmit };
};
