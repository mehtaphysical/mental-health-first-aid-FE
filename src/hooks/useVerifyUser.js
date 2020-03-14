import { useEffect } from 'react';
import { authorizeUser } from '../actions/authActions';
import { getVerifyUser } from '../services/authServices';
import { useDispatch } from 'react-redux';

export const useVerifyUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authorizeUser('', getVerifyUser));
  }, []);
};
