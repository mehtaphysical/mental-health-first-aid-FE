import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Solution = ({ solutions, setSolutions, index }) => {
  const [solution, setSolution] = useState('');

  return (
    <label>
      <input
        type="text"
        value={solution}
        onChange={({ target }) => {
          // setSolutions([solutions[index] = target.value, ...solutions]);
          console.log(index);
          setSolution(target.value);
        }} />
    </label>
  );
};

Solution.propTypes = {
  solutions: PropTypes.array.isRequired,
  setSolutions: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
