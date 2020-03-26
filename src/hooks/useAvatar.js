import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser, SET_SESSION_ERROR } from '../actions/authActions';

export const useAvatar = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [url, setUrl] = useState('');

  const handleSubmit = () => url ? dispatch(updateUser({ avatar: url }))
    .then(res => {
      if(res.type === SET_SESSION_ERROR) throw new Error(res.payload.message);
    }) : url;


  return { display, setDisplay, url, setUrl, handleSubmit };
};
