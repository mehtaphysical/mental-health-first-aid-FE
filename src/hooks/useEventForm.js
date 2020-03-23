import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { sendEvent, SET_EVENT_ERROR } from '../actions/eventActions';

export const useEventForm = ( exsistingTitle = '', exsistingDate = '') => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(exsistingTitle);
  const [date, setDate] = useState(exsistingDate);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    const event = { title, date };

    return dispatch(sendEvent(event))
      .then(res => {
        if(res.type === SET_EVENT_ERROR) {
          throw new Error(res.payload.message);
        } else {
          setSuccess(true);
        }
      });
  };

  return { title, setTitle, date, setDate, success, setSuccess, handleSubmit };
};
