import { SET_MOOD, SET_MOOD_ERROR, SET_MOOD_LOADING, SET_MOOD_DONE } from '../actions/moodActions';

const initialState = {
  mood: null,
  loading: true,
  error: null
};

export const moodReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MOOD: return { ...state, loading: false, mood: action.payload };
    case SET_MOOD_LOADING: return { ...state, loading: true, error: null };
    case SET_MOOD_DONE: return { ...state, loading: false };
    case SET_MOOD_ERROR: return { ...state, loading: false, error: action. payload };
    default: return state;
  }
};
