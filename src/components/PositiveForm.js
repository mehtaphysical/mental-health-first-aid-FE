import React from 'react';
import { usePositiveForm } from '../hooks/usePositiveForm';

export const PositiveForm = () => {
  const { message, setMessage, friendCode, setFriendCode, author, setAuthor, success, setSuccess, handleSubmit, friendCodeFromURL, usernameFromURL } = usePositiveForm();

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

        <button>Send</button>
      </form>
    </section>
  );
};
