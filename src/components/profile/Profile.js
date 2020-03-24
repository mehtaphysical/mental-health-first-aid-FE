import React from 'react';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';
import { Positives } from './Positives';
import { Event } from './Event';
import { Option } from './Option';

export const Profile = () => {
  const { user } = useSelector(toGetAuth);

  return (
    <section>
      <h2>Welcome back {user.userName}</h2>
      <Event />
      <img src={user.avatar} />
      <h3>Friend Code: {user.friendCode}</h3>
      <Positives />
      <Option inPos={'Event'}/>
    </section>
  );
};
