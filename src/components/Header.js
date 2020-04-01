import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <section>
      <h1>Mental Health First Aid Kit</h1>
      <NavLink to='/profile'>Profile</NavLink>
      <br/>
      <NavLink to='/positive'>Send Positive</NavLink>
    </section>
  );
};
