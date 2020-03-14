import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';
import { useVerifyUser } from '../../hooks/useVerifyUser';

export const PrivateRoute = ({ component, path }) => {
  const { user, loading } = useSelector(toGetAuth);

  useVerifyUser();
  if(loading) return null;
  if(!user) {
    window.location.href = '/auth';
    return null;
  }
  return <Route path={path} component={component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string.isRequired
};
