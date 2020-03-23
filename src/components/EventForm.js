import React from 'react';
import { useEventForm } from '../hooks/useEventForm';

export const EventForm = () => {
  const { title, setTitle, date, setDate, success, handleSubmit } = useEventForm();

  return success ? (
    <p>Your Event has been created! You are looking forward to {title} on {date}!</p>
  ) : (
    <section>
      <form>
        <label>Title: 
          <input required
            type="text"
            value={title} 
            onChange={({ target }) => setTitle(target.value)} />
        </label>

        <label>Date: 
          <input type="text" 
            value={date} 
            onChange={({ target }) => setDate(target.value)} />
        </label>

        <button onClick={handleSubmit}>Set Event</button>
      </form>
    </section>
  );
};
