import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Solution = ({ intialSolution, solutions, setSolutions, index }) => {
  const [solution, setSolution] = useState(intialSolution === 'new' ? '' : intialSolution);

  const handleChange = (value) => {
    const editedSolutions = solutions;
    editedSolutions[index] = value;
    setSolutions(editedSolutions);
    setSolution(value);
  };

  return (
    <label>
      <input
        type="text"
        value={solution}
        onChange={({ target }) => handleChange(target.value)} />
    </label>
  );
};

Solution.propTypes = {
  intialSolution: PropTypes.string.isRequired,
  solutions: PropTypes.array.isRequired,
  setSolutions: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
