import React from 'react';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';
import { Avatar } from './Avatar';
import { Event } from './Event';
import { Option } from './Option';
import { Positives } from './Positives';
import { Moods } from './Moods';

export const Profile = () => {
  const { user: { userName, collections, avatar, friendCode } } = useSelector(toGetAuth);

  const renderOptions = collections ? collections.map(collection => {
    return (<Option key={collection} componentName={collection} />);
  }) : (<></>);

  return (
    <section>
      <h2>Welcome back {userName}</h2>
      <h3>Friend Code: {friendCode}</h3>
      <Avatar avatar={avatar} />
      <Event />
      <Moods />
      <Positives />
      {/* {renderOptions}
      <Option /> */}
    </section>
  );
};
