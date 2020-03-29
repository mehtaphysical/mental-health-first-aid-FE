import { postMood } from '../services/moodServices';

export const SET_MOOD_LOADING = 'SET_MOOD_LOADING';
export const SET_MOOD_DONE = 'SET_MOOD_DONE';
export const SET_MOOD = 'SET_MOOD';
export const SET_MOOD_ERROR = 'SET_MOOD_ERROR';

export const setMoodLoading = () => ({ type: SET_MOOD_LOADING });

export const setMoodDone = () => ({ type: SET_MOOD_DONE });

export const setMood = user => ({ 
  type: SET_MOOD,
  payload: user 
});

export const setMoodError = error => ({ 
  type: SET_MOOD_ERROR,
  payload: error
});

export const sendMood = (mood) => dispatch => {
  dispatch(setMoodLoading());
  return postMood(mood)
    .then(() => {
      return dispatch(setMoodDone());
    })
    .catch(moodError => dispatch(setMoodError(moodError)));
};