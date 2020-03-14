import React from 'react';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';

export const Profile = () => {
  const { user } = useSelector(toGetAuth);

  const img = user.avatar ? <img src={user.avatar} /> : <p>Set avatar pic</p>;

  return (
    <section>
      <h1>Profile</h1>
      <h2>Welcome back {user.userName}</h2>
      {img}
    </section>
  );
};
