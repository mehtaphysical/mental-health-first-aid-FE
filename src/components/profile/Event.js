import React from 'react';
import { useEventForm } from '../../hooks/useEventForm';
import { useEvent } from '../../hooks/useEvent';

export const Event = () => {
  const  { event, date, showEventForm, setShowEventForm } = useEvent();
  const { title: titleInput, setTitle, date: dateInput, setDate, handleSubmit } = useEventForm(event.title, event.date);

  return !showEventForm ? (
    <>
      <p>You are looking forward to {event.title} on {date}</p>
      <button onClick={() => {
        setShowEventForm(!showEventForm);
      }
      }>Edit</button>
    </>
  ) : (
    <>
      <p>You are looking forward to
        <input required
          type="text"
          value={titleInput} 
          onChange={({ target }) => setTitle(target.value)} />
        on 
        <input type="text" 
          value={dateInput} 
          onChange={({ target }) => setDate(target.value)} /></p>
      <button onClick={handleSubmit}>Update</button>
      <button onClick={() => setShowEventForm(!showEventForm)}>Cancel</button>
    </>);
};
