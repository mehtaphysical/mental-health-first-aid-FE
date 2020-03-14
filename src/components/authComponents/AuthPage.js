import React, { useState } from 'react';
import { Signup } from './Signup';
import { Login } from './Login';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';

export const AuthPage = () => {
  const { error } = useSelector(toGetAuth);
  const errorMessage = error ? (<p>{error.message}</p>) : (<></>);
  const [signup, setSignup] = useState(true);

  const buttonText = signup ? 'I want to Login' : 'I need Signup';

  return (
    <>
      <button onClick={() => setSignup(!signup)}>{buttonText}</button>
      {signup ? <Signup /> : <Login />}
      {errorMessage}
    </> 
  );
};
