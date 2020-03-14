import React from 'react';
import { Signup } from './Signup';
import { Login } from './Login';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';

export const AuthPage = () => {
  const { error } = useSelector(toGetAuth);
  const errorMessage = error ? (<p>{error.message}</p>) : (<></>);

  return (
    <>
      <Signup />
      <Login />
      {errorMessage}
    </>
  );
};
