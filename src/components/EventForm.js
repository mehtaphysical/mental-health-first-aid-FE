import React, { useState } from 'react';

export const EventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState();
  const [success, setSuccess] = useState(false);

  const today = new Date;
  const day = today.getDate();
  const month = today.getMonth()+1; //January is 0!
  const year = today.getFullYear();
  const now = `${year}-${month}-${day}`;
  console.log(now);

  const handleSubmit = () => {
    console.log('clicked');
    setSuccess(true);
  };


  return success ? (
    <p>Your Event has been created</p>
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
