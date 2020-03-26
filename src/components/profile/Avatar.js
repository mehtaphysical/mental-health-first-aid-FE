import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Avatar = ({ avatar }) => {
  const [display, setDisplay] = useState(false);
  const [url, setUrl] = useState('');

  const renderForm = display ? (
    <div>
      <input
        type='text'
        value={url}
        onChange={({ target }) => setUrl(target.value)} />
      <button onClick={() => {
        console.log('Submitted!');
      }}>Update</button>
      <button onClick={() => {
        setDisplay(false);
        setUrl('');
      }}>Cancel</button>
    </div>
  ) : (
    <></>
  );

  const renderAvatar = avatar ? (
    <img src={avatar} />
  ) : (
    <div>
      <h5 onClick={() => setDisplay(true)}>+ Set avatar</h5>
      {renderForm}
    </div>
  );

  return (
    <div>
      {renderAvatar}
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string
};
