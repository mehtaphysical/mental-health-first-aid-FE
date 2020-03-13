import React from 'react';
import { useAuth } from './hooks/useAuth';

export const SignUp = () => {
  const { userName, setUserName, email, setEmail, password, setPassword } = useAuth();

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