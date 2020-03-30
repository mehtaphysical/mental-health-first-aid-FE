import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateUser, SET_SESSION_ERROR } from '../actions/authActions';

export const useEventForm = (exsistingTitle = '', exsistingDate = '') => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(exsistingTitle);
  const [date, setDate] = useState(exsistingDate);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { title, date: date.replace('T00', 'T12') };

    return dispatch(updateUser({ event }))
      .then(res => {
        if(res.type === SET_SESSION_ERROR) throw new Error(res.payload.message);
      });
  };

  return { title, setTitle, date, setDate, success, setSuccess, handleSubmit };
};
