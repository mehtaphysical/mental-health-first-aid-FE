import React, { useState } from 'react';

export const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section>
      <form>
        <label>Username: 
          <input type="text" 
            value={userName} 
            onChange={({ target }) => setUserName(target.value)} />
        </label>

        <label>Email: 
          <input type="text" 
            value={email} 
            onChange={({ target }) => setEmail(target.value)} />
        </label>

        <label>Username: 
          <input type="password" 
            value={password} 
            onChange={({ target }) => setPassword(target.value)} />
        </label>
      </form>

    </section>
  );
}