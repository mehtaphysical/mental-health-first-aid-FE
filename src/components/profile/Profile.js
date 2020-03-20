import React from 'react';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';
import { useHistory } from 'react-router-dom';

export const Profile = () => {
  const history = useHistory();
  const { user } = useSelector(toGetAuth);

  return (
    <section>
      <h1>Profile</h1>
      <h2>Welcome back {user.userName}</h2>
      <img src={user.avatar} />
      <h3>Friend Code: {user.friendCode}</h3>
      <h5 onClick={() => history.push('/positives')}>View Positives</h5>
    </section>
  );
};
