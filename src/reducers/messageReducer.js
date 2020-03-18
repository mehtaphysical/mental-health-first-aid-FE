import { SET_MESSAGE, SET_MESSAGE_ERROR, SET_MESSAGE_LOADING, SET_MESSAGE_DONE } from '../actions/messageActions';

const initialState = {
  message: null,
  loading: true,
  error: null
};

export const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MESSAGE: return { ...state, loading: false, message: action.payload };
    case SET_MESSAGE_LOADING: return { ...state, loading: true, error: null };
    case SET_MESSAGE_DONE: return { ...state, loading: false };
    case SET_MESSAGE_ERROR: return { ...state, loading: false, error: action. payload };
    default: return state;
  }
};
