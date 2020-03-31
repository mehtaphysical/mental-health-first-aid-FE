import { SET_ALL_MOODS, SET_MOOD_ERROR, SET_MOOD_LOADING, SET_MOOD_DONE, SET_CURRENT_MOOD, SET_MOOD_UPDATED } from '../actions/moodActions';

const initialState = {
  currentMood: null,
  allMoods: [],
  updated: true,
  loading: true,
  error: null
};

export const moodReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ALL_MOODS: return { ...state, allMoods: action.payload };
    case SET_CURRENT_MOOD: return { ... state, currentMood: action.payload };
    case SET_MOOD_LOADING: return { ...state, loading: true, error: null };
    case SET_MOOD_DONE: return { ...state, loading: false };
    case SET_MOOD_UPDATED: return { ...state, updated: action.payload };
    case SET_MOOD_ERROR: return { ...state, loading: false, error: action. payload };
    default: return state;
  }
};
