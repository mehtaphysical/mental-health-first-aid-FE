import React from 'react';
import { useMessageForm } from '../hooks/useMessageForm';
import { useHistory } from 'react-router-dom';

export const MessageForm = () => {
  const { message, setMessage, friendCode, setFriendCode, author, setAuthor, success, setSuccess, handleSubmit, friendCodeFromURL, usernameFromURL } = useMessageForm();
  const history = useHistory();

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

        {!friendCodeFromURL ? (<label>Friend Code: 
          <input type="text" required
            value={friendCode} 
            onChange={({ target }) => setFriendCode(target.value)} />
        </label>) : (<></>)}

        {!usernameFromURL ? (<label>Author: 
          <input type="text" 
            value={author} 
            onChange={({ target }) => setAuthor(target.value)} />
        </label>) : (<></>)}

        <button>Send Message</button>
      </form>
    </section>
  );
};
