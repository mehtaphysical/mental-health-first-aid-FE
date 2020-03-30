import { SET_ALL_MESSAGES, SET_MESSAGE_ERROR, SET_MESSAGE_LOADING, SET_MESSAGE_DONE, SET_CURRENT_MESSAGE, SET_UNREAD_COUNT } from '../actions/messageActions';

const initialState = {
  currentMessage: null,
  allMessages: null,
  unread: 0,
  loading: true,
  error: null
};

export const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ALL_MESSAGES: 
      return { ...state, allMessages: action.payload };
    case SET_UNREAD_COUNT:
      return { ...state, unread: action.payload };
    case SET_CURRENT_MESSAGE: 
      return { ...state, currentMessage: action.payload };
    case SET_MESSAGE_LOADING: return { ...state, loading: true, error: null };
    case SET_MESSAGE_DONE: return { ...state, loading: false };
    case SET_MESSAGE_ERROR: return { ...state, loading: false, error: action. payload };
    default: return state;
  }
};
