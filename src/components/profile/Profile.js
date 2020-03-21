import React from 'react';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';
import { useHistory } from 'react-router-dom';

export const Profile = () => {
  const history = useHistory();
  const { user } = useSelector(toGetAuth);
  const { event } = user;

  const getMmDd = (date) => {
    const formattedDate =  new Date(date);
    const month = formattedDate.getMonth();
    const day = formattedDate.getDate();
    return `${month + 1}/${day}`;
  };

  const date = getMmDd(event.date);

  return (
    <section>
      <h1>Profile</h1>
      <h2>Welcome back {user.userName}</h2>
      <img src={user.avatar} />
      <h3>Friend Code: {user.friendCode}</h3>
      <p>You are looking forward to {event.title} on {date}</p>
      <h5 onClick={() => history.push('/positives')}>View Positives</h5>
    </section>
  );
};
