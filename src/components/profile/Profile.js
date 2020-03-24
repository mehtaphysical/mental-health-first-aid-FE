import React from 'react';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';
import { Positives } from './Positives';
import { Event } from './Event';
import { Option } from './Option';

export const Profile = () => {
  const { user: { userName, collections, avatar, friendCode } } = useSelector(toGetAuth);

  const renderOptions = collections ? collections.map(collection => {
    return (<Option key={collection} componentName={collection} />);
  }) : (<></>);

  return (
    <section>
      <h2>Welcome back {userName}</h2>
      <Event />
      <img src={avatar} />
      <h3>Friend Code: {friendCode}</h3>
      <Positives />
      {renderOptions}
      <Option />
    </section>
  );
};
