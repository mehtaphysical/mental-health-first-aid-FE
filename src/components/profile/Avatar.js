import React from 'react';
import PropTypes from 'prop-types';
import { useAvatar } from '../../hooks/useAvatar';

export const Avatar = ({ avatar }) => {
  const { display, setDisplay, url, setUrl, handleSubmit } = useAvatar();

  const renderForm = display ? (
    <div>
      <input
        type='text'
        value={url}
        onChange={({ target }) => setUrl(target.value)} />
      <button onClick={handleSubmit}>Update</button>
      <button onClick={() => {
        setDisplay(false);
        setUrl('');
      }}>Cancel</button>
    </div>
  ) : (
    <></>
  );

  const renderAvatar = avatar ? (
    <img style={{ width: '200px' }} onClick={() => setDisplay(true)} src={avatar} />
  ) : (
    <div>
      <h5 onClick={() => setDisplay(true)}>+ Set avatar</h5>
    </div>
  );
  
  return (
    <div>
      {renderAvatar}
      {renderForm}
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string
};
