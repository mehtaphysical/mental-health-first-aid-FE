import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendEvent, SET_EVENT_ERROR } from '../actions/eventActions';

export const EventForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState();
  const [success, setSuccess] = useState(false);

  const today = new Date;
  const day = today.getDate();
  const month = today.getMonth()+1; //January is 0!
  const year = today.getFullYear();
  const now = `${year}-${month}-${day}`;

  const handleSubmit = (e) => {
    e.preventDefault();

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

  console.log(date);


  return success ? (
    <p>Your Event has been created! You are looking forward to {title} on {date}!</p>
  ) : (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Title: 
          <input required
            type="text"
            value={title} 
            onChange={({ target }) => setTitle(target.value)} />
        </label>

        <label>Date: 
          <input type="date" 
            value={date} 
            onChange={({ target }) => setDate(target.value)} />
        </label>

        <button>Set Event</button>
      </form>
    </section>
  );
};
