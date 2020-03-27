import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Event } from './Event';
import { Positives } from './Positives';

export const Option = ({ componentName }) => {
  const [display, setDisplay] = useState(false);

  const componentDictionary = { 
    Event: <Event />, 
    Positives: <Positives /> };

  const renderOptions = display ? (
    <>
      <button>Collection</button>
      <button>Notes</button>
      <button onClick={() => setDisplay(false)}>Cancel</button>
    </>
  ) : (
    <>
    </>
  );

  return componentName ? (
    componentDictionary[componentName]
  ) : (
    <div>
      <h5 onClick={() => setDisplay(true)}>+ Click to add collection +</h5>
      {renderOptions}
    </div>);
};

Option.propTypes = {
  componentName: PropTypes.string,
};
