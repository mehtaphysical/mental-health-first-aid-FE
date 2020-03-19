import React from 'react';
import PropTypes from 'prop-types';

export const Positive = ({ message, author }) => (
  <>
    <p>&quot;{message}&quot;</p>
    <p>- {author}</p>
  </>
);

Positive.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};
