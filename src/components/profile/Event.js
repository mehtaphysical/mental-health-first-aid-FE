import React, { useEffect, useState } from 'react';
import { useEventForm } from '../../hooks/useEventForm';
import { useEvent } from '../../hooks/useEvent';

export const Event = () => {
  const  { event, date, showEventForm, setShowEventForm } = useEvent();
  const { title: titleInput, setTitle, date: dateInput, setDate, handleSubmit, success, error } = useEventForm();

  useEffect(() => {
    setShowEventForm(false);
  }, [success]);

  return (
    <section>
      <h3>Looking Forward</h3>
      <p>You are looking forward to</p>
      
      <p>{showEventForm || !event ? (<input required
        type="text"
        value={titleInput} 
        onChange={({ target }) => setTitle(target.value)} />) : event.title}</p>
      <p>on {showEventForm || !event ? <input type="date" 
        value={dateInput} 
        onChange={({ target }) => setDate(target.value.slice(0, 10))} /> : date }</p>
      {error && showEventForm ? <p>{error}</p> : <></>}

      {showEventForm || !event ? (
        <div>
          <button onClick={handleSubmit}>Update</button>
          <button onClick={() => setShowEventForm(!showEventForm)}>Cancel</button>
        </div>
      ) : (
        <div><button onClick={() => setShowEventForm(!showEventForm)}>Edit</button></div>
      )}

    </section>
  );
};
