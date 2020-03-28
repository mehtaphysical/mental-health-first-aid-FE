import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { sendMessage, SET_MESSAGE_ERROR } from '../actions/messageActions';
import { useLocation } from 'react-router-dom';

export const useMessageForm = () => {
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

    return dispatch(sendMessage({ message, friendCode, author }))
      .then(res => {
        if(res.type === SET_MESSAGE_ERROR) {
          throw new Error(res.payload.message);
        } else {
          setMessage('');
          setFriendCode('');
          setAuthor('');
          setSuccess(true);
        }
      });
  };

  return { message, setMessage, friendCode, setFriendCode, author, setAuthor, success, setSuccess, handleSubmit, friendCodeFromURL, usernameFromURL };
};
