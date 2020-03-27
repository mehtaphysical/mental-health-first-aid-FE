import React from 'react';
import { useEventForm } from '../../hooks/useEventForm';
import { useEvent } from '../../hooks/useEvent';

export const Event = () => {
  const  { event, date, showEventForm, setShowEventForm } = useEvent();
  const { title: titleInput, setTitle, date: dateInput, setDate, handleSubmit } = useEventForm(event.title, event.date);

  const formattedDate = dateInput.slice(0, 10);

  return !showEventForm ? (
    <>
      <p>You are looking forward to
        <br/><span>{event.title}</span>
        <br/>on {date}</p>
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
        <input type="date" 
          value={formattedDate} 
          onChange={({ target }) => setDate(target.value)} /></p>
      <button onClick={handleSubmit}>Update</button>
      <button onClick={() => setShowEventForm(!showEventForm)}>Cancel</button>
    </>);
};
