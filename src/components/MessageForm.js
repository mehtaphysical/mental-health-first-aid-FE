import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage, SET_MESSAGE_ERROR } from '../actions/messageActions';

export const MessageForm = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [friendCode, setFriendCode] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    return dispatch(sendMessage({ message, friendCode, author }))
      .then(res => {
        if(res.type === SET_MESSAGE_ERROR) {
          throw new Error(res.payload.message);
        } else {
          console.log('You posted a message!!!')
        }
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Message (required): 
          <input type="text" 
            value={message} 
            onChange={({ target }) => setMessage(target.value)} />
        </label>

        <label>Friend Code (required): 
          <input type="text" 
            value={friendCode} 
            onChange={({ target }) => setFriendCode(target.value)} />
        </label>

        <label>Author: 
          <input type="text" 
            value={author} 
            onChange={({ target }) => setAuthor(target.value)} />
        </label>

        <button>Send Message</button>
      </form>
    </section>
  );
};
