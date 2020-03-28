import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorizeUser, SET_SESSION_ERROR } from '../actions/authActions';
import { getSignupUser, getLoginUser } from '../services/authServices';
import { useHistory } from 'react-router-dom';

export const useAuth = (type) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, userName, password };

    if(password !== retypePassword) {
      console.log('Passwords must match');
    } else {
      return dispatch(authorizeUser(user, (type === 'signup') ? getSignupUser : getLoginUser))
        .then(res => {
          if(res.type === SET_SESSION_ERROR) {
            throw new Error(res.payload.message);
          } else {
            history.push(type === 'login' ? '/profile' : `/newuser?friendcode=${res.friendCode}&username=${res.userName}`);
          }
        });
    }
  };

  return { userName, setUserName, email, setEmail, password, setPassword, retypePassword, setRetypePassword, handleSubmit };
};
