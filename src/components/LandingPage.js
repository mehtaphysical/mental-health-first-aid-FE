import React from 'react';
import { useHistory } from 'react-router-dom';

export const LandingPage = () => {
  const history = useHistory();


  const handleClick = () => {
    history.push('/auth');
  };

  return (
    <section>
      <h2>Welcome</h2>
      <h3>Take a Breath</h3>
      <p>
        If this is a serious medical emergency call 911.
      </p>
      <p>
        Here are some resources in your area
      </p>
      <p>
        I want to <button onClick={handleClick}>Signup/Login</button>
      </p>
    </section>
  );
};
