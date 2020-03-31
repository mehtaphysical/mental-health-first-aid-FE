import { SET_EVENT, SET_EVENT_ERROR, SET_EVENT_LOADING, SET_EVENT_DONE } from '../actions/eventActions';

const initialState = {
  event: null,
  loading: true,
  error: null
};

export const eventReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_EVENT: return { ...state, event: action.payload };
    case SET_EVENT_LOADING: return { ...state, loading: true, error: null };
    case SET_EVENT_DONE: return { ...state, loading: false };
    case SET_EVENT_ERROR: return { ...state, loading: false, error: action. payload };
    default: return state;
  }
};
