import React from 'react';
import PropTypes from 'prop-types';
import { Event } from './Event';
import { Positives } from './Positives';

export const Option = ({ inPos }) => {

  const components = { 
    Event: <Event />, 
    Positives: <Positives /> };

  return components[inPos];
};

Option.propTypes = {
  inPos: PropTypes.string,
};
