import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage, SET_MESSAGE_ERROR } from '../actions/messageActions';

export const MessageForm = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [friendCode, setFriendCode] = useState('');
  const [author, setAuthor] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    return dispatch(sendMessage({ message, friendCode, author }))
      .then(res => {
        if(res.type === SET_MESSAGE_ERROR) {
          throw new Error(res.payload.message);
        } else {
          setMessage('');
          setFriendCode('');
          setAuthor('');
          setSuccess(true);
        }
      });
  };

  return success ? (
    <section>
      <p>Thanks for sending some love!</p>
      <button onClick={() => setSuccess(false)}>Send Another?</button>
    </section>
  ) : (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Message: 
          <input required
            type="text"
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
