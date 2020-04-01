import { SET_ALL_POSITIVES, SET_POSITIVE_ERROR, SET_POSITIVE_LOADING, SET_POSITIVE_DONE, SET_CURRENT_POSITIVE, SET_UNREAD_COUNT } from '../actions/positiveActions';

const initialState = {
  currentPositive: null,
  allPositives: null,
  unread: 0,
  loading: true,
  error: null
};

export const positiveReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ALL_POSITIVES: 
      return { ...state, allPositives: action.payload };
    case SET_UNREAD_COUNT:
      return { ...state, unread: action.payload };
    case SET_CURRENT_POSITIVE: 
      return { ...state, currentPositive: action.payload };
    case SET_POSITIVE_LOADING: return { ...state, loading: true, error: null };
    case SET_POSITIVE_DONE: return { ...state, loading: false };
    case SET_POSITIVE_ERROR: return { ...state, loading: false, error: action. payload };
    default: return state;
  }
};
