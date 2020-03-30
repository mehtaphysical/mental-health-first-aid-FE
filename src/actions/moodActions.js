import { postMood, getMoods } from '../services/moodServices';

export const SET_MOOD_LOADING = 'SET_MOOD_LOADING';
export const SET_MOOD_DONE = 'SET_MOOD_DONE';
export const SET_ALL_MOODS = 'SET_ALL_MOODS';
export const SET_CURRENT_MOOD = 'SET_CURRENT_MOOD';
export const SET_MOOD_ERROR = 'SET_MOOD_ERROR';

export const setMoodLoading = () => ({ type: SET_MOOD_LOADING });

export const setMoodDone = () => ({ type: SET_MOOD_DONE });

export const setAllMoods = moods => ({ 
  type: SET_ALL_MOODS,
  payload: moods 
});

export const setCurrentMood = mood => ({
  type: SET_CURRENT_MOOD,
  payload: mood
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

export const getAllMoods = () => dispatch => {
  dispatch(setMoodLoading());
  return getMoods()
    .then(moods => {
      dispatch(setAllMoods(moods));
      return dispatch(setMoodDone());
    })
    .catch(moodError => dispatch(setMoodError(moodError)));
};
