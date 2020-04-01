import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchPostPositive, SET_POSITIVE_ERROR } from '../actions/positiveActions';
import { useLocation } from 'react-router-dom';

export const usePositiveForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const friendCodeFromURL = searchParams.get('friendcode');
  const usernameFromURL = searchParams.get('username');

  const [message, setMessage] = useState('');
  const [friendCode, setFriendCode] = useState(friendCodeFromURL ? friendCodeFromURL : '');
  const [author, setAuthor] = useState(usernameFromURL ? usernameFromURL : '');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    return dispatch(fetchPostPositive({ message, friendCode, author }))
      .then(res => {
        if(res.type === SET_POSITIVE_ERROR) {
          throw new Error(res.payload.message);
        } else {
          setMessage('');
          setFriendCode(friendCodeFromURL ? friendCodeFromURL : '');
          setAuthor(usernameFromURL ? usernameFromURL : '');
          setSuccess(true);
        }
      });
  };

  return { message, setMessage, friendCode, setFriendCode, author, setAuthor, success, setSuccess, handleSubmit, friendCodeFromURL, usernameFromURL };
};
