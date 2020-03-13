import { useState } from 'react';

export const useAuth = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return { userName, setUserName, email, setEmail, password, setPassword };
};
