import React from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';
import { useVerifyUser } from '../../hooks/useVerifyUser';

export const PrivateRoute = ({ component, path }) => {
  const history = useHistory();
  const { user, loading } = useSelector(toGetAuth);

  useVerifyUser();
  if(loading) return null;
  if(!user) {
    history.replace('/auth');
    return null;
  }
  return <Route path={path} component={component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string.isRequired
};
