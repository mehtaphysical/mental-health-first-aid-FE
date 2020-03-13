import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorizeUser, SET_SESSION_ERROR } from '../actions/authActions';
import { getSignupUser, getLoginUser } from '../services/authServices';

export const useAuth = (type) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, userName, password };
    const authFunction = (type === 'signup') ? getSignupUser : getLoginUser;

    if(password !== retypePassword) {
      console.log('Passwords must match');
    } else {
      return dispatch(authorizeUser(user, authFunction))
        .then(res => {
          if(res.type === SET_SESSION_ERROR) {
            throw new Error('Singup/Login NOPE!');
          } else {
            //change window.location.href
            console.log('SUCCESSFUL!');
          }
        });
    }
  };

  return { userName, setUserName, email, setEmail, password, setPassword, retypePassword, setRetypePassword, handleSubmit };
};
