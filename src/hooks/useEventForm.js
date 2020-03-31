import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchPatchEvent, SET_EVENT_ERROR } from '../actions/eventActions';

export const useEventForm = (exsistingTitle = '', exsistingDate = '') => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(exsistingTitle);
  const [date, setDate] = useState(exsistingDate);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //This was a hack to get date to be correct in PST
    //need to find another way...
    const event = { title, date: date.replace('T00', 'T12') };

    return dispatch(fetchPatchEvent(event))
      .then(res => {
        if(res.type === SET_EVENT_ERROR) throw new Error(res.payload.message);
      });
  };

  return { title, setTitle, date, setDate, success, setSuccess, handleSubmit };
};
