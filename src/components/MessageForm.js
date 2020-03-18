import React from 'react';
import { useMessageForm } from '../hooks/useMessageForm';

export const MessageForm = () => {
  const { message, setMessage, friendCode, setFriendCode, author, setAuthor, success, setSuccess, handleSubmit } = useMessageForm();

  return success ? (
    <section>
      <p>Thanks for sending some love!</p>
      <button onClick={() => setSuccess(false)}>Send Another?</button>
    </section>
  ) : (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Message: 
          <textarea required
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
