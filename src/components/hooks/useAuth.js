import { useState } from 'react';

export const useAuth = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`You signed up with: UserName: ${userName}, email: ${email}, password: ${password}`);
  };

  return { userName, setUserName, email, setEmail, password, setPassword, handleSubmit };
};
