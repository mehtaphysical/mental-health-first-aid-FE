import { postMessage } from '../services/messageServices';

export const SET_MESSAGE_LOADING = 'SET_MESSAGE_LOADING';
export const SET_MESSAGE_DONE = 'SET_MESSAGE_DONE';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_MESSAGE_ERROR = 'SET_MESSAGE_ERROR';

export const setMessageLoading = () => ({ type: SET_MESSAGE_LOADING });

export const setMessageDone = () => ({ type: SET_MESSAGE_DONE });

export const setMessage = user => ({ 
  type: SET_MESSAGE,
  payload: user 
});

export const setMessageError = error => ({ 
  type: SET_MESSAGE_ERROR,
  payload: error
});

export const sendMessage = (message) => dispatch => {
  dispatch(setMessageLoading());
  return postMessage(message)
    .then(() => {
      return dispatch(setMessageDone());
    })
    .catch(messageError => dispatch(setMessageError(messageError)));
};

