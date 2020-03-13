import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorizeUser, SET_SESSION_ERROR } from '../actions/authActions';
import { getSignupUser, getLoginUser } from '../services/authServices';

export const useAuth = (type) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, userName, password };
    const authFunction = (type === 'signup') ? getSignupUser : getLoginUser;

    return dispatch(authorizeUser(user, authFunction))
      .then(res => {
        if(res.type === SET_SESSION_ERROR) {
          throw new Error('Singup/Login NOPE!');
        } else {
          console.log('SUCCESSFUL!');
        }
      });
  };

  return { userName, setUserName, email, setEmail, password, setPassword, handleSubmit };
};
