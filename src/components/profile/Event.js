import React, { useEffect } from 'react';
import { useEventForm } from '../../hooks/useEventForm';
import { useEvent } from '../../hooks/useEvent';

export const Event = () => {
  const  { event, date, showEventForm, setShowEventForm, error, loading } = useEvent();
  const { title: titleInput, setTitle, date: dateInput, setDate, handleSubmit, success } = useEventForm();

  useEffect(() => {
    setShowEventForm(false);
  }, [success]);

  return (
    <section>
      <h3>Looking Forward</h3>
      {loading ? <img style={{ height: '125px', margin: '-25px 0px' }} src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif" /> : <></>}
      <p>You are looking forward to</p>
      
      <p>{showEventForm || !event ? (<input required
        type="text"
        value={titleInput} 
        onChange={({ target }) => setTitle(target.value)} />) : event.title}</p>
      <p>on {showEventForm || !event ? <input type="date" 
        value={dateInput} 
        onChange={({ target }) => setDate(target.value.slice(0, 10))} /> : date }</p>
      {error && showEventForm ? <p>{error.message}</p> : <></>}

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
