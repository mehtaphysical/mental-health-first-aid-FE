import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const SignUp = () => {
  const { userName, setUserName, email, setEmail, password, setPassword, handleSubmit } = useAuth('signup');

  return (
    <section>
      <form onSubmit={handleSubmit}>
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

        <label>Password: 
          <input type="password" 
            value={password} 
            onChange={({ target }) => setPassword(target.value)} />
        </label>
        <button>Sign Up</button>
      </form>

    </section>
  );
};
