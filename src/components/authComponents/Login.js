import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
  const { email, setEmail, password, setPassword, handleSubmit } = useAuth('login');

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Email: 
          <input 
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)} />
        </label>
        <label>Password: 
          <input 
            type="text"
            value={password}
            onChange={({ target }) => setPassword(target.value)} />
        </label>
        <button>Login</button>
      </form>
    </section>
  );
};
