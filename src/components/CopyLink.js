import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CopyLink = ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = ({ target }) => {
    target.select();
    document.execCommand('copy');
    setCopied(true);
  };

  return (
    <label>
      {copied ? 'Copied to clipboard: ' : 'Click to copy: '}
      <input readOnly onClick={handleClick}
        value={link} />
    </label>
  );
};

CopyLink.propTypes = {
  link: PropTypes.string.isRequired
};
