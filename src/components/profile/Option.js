import React from 'react';
import PropTypes from 'prop-types';
import { Event } from './Event';
import { Positives } from './Positives';

export const Option = ({ componentName }) => {

  const components = { 
    Event: <Event />, 
    Positives: <Positives /> };

  return componentName ?
    components[componentName]
    :
    (<div>
      <h5>Click to add collection</h5>
    </div>);
};

Option.propTypes = {
  componentName: PropTypes.string,
};
