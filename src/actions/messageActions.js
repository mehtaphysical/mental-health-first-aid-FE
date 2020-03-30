import { postMessage, getMessages, updateMessage } from '../services/messageServices';

export const SET_MESSAGE_LOADING = 'SET_MESSAGE_LOADING';
export const SET_MESSAGE_DONE = 'SET_MESSAGE_DONE';
export const SET_ALL_MESSAGES = 'SET_ALL_MESSAGES';
export const SET_CURRENT_MESSAGE = 'SET_CURRENT_MESSAGE';
export const SET_MESSAGE_ERROR = 'SET_MESSAGE_ERROR';
export const SET_UNREAD_COUNT = 'SET_UNREAD_COUNT';

export const setMessageLoading = () => ({ type: SET_MESSAGE_LOADING });

export const setMessageDone = () => ({ type: SET_MESSAGE_DONE });

export const setAllMessages = messages => ({ 
  type: SET_ALL_MESSAGES,
  payload: messages 
});

export const setCurrentMessage = message => ({ 
  type: SET_CURRENT_MESSAGE,
  payload: message 
});

export const setMessageError = error => ({ 
  type: SET_MESSAGE_ERROR,
  payload: error
});

export const setUnread = unread => ({
  type: SET_UNREAD_COUNT,
  payload: unread
});

export const sendMessage = (message) => dispatch => {
  if(!message.author) message.author = 'anonymous';
  dispatch(setMessageLoading());
  return postMessage(message)
    .then(() => {
      return dispatch(setMessageDone());
    })
    .catch(messageError => dispatch(setMessageError(messageError)));
};

const initialCurrent = {
  _id: null
};

export const chooseNextCurrentPositive = (positives, current = initialCurrent) => dispatch => {
  const unreadPositive = positives.find(positive => !positive.seen);
  if(unreadPositive) {
    dispatch(setCurrentMessage(unreadPositive));
  } else {
    let index = Math.floor(Math.random() * positives.length);
    while(current._id === positives[index]._id) index = Math.floor(Math.random() * positives.length);
    dispatch(setCurrentMessage(positives[index]));
  }
};

export const updateCurrentPositive = (id, body) => dispatch => {
  return updateMessage(id, body)
    .then(() => {
      dispatch(getAllPositives());
    });
};

export const getAllPositives = () => dispatch => {
  dispatch(setMessageLoading());
  return getMessages()
    .then(positives => {
      dispatch(setAllMessages(positives));
      if(positives[0]) {
        const countUnread = positives.reduce((acc, positive) => {
          if(!positive.seen) acc = acc + 1;
          return acc;
        }, 0);
        dispatch(setUnread(countUnread));
        dispatch(chooseNextCurrentPositive(positives));
      }
      
      return dispatch(setMessageDone());
    });
};

