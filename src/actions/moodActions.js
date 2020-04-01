import { postMood, getMoods, deleteMood, updateMood } from '../services/moodServices';

export const SET_MOOD_LOADING = 'SET_MOOD_LOADING';
export const SET_MOOD_DONE = 'SET_MOOD_DONE';
export const SET_ALL_MOODS = 'SET_ALL_MOODS';
export const SET_CURRENT_MOOD = 'SET_CURRENT_MOOD';
export const SET_MOOD_ERROR = 'SET_MOOD_ERROR';
export const SET_MOOD_UPDATED = 'SET_MOOD_UPDATED';

export const setMoodLoading = () => ({ type: SET_MOOD_LOADING });

export const setMoodDone = () => ({ type: SET_MOOD_DONE });

export const moodsNeedToBeUpdate = (boolean) => ({ 
  type: SET_MOOD_UPDATED, 
  payload: boolean 
});

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

export const fetchPostMood = (mood) => dispatch => {
  dispatch(setMoodLoading());
  return postMood(mood)
    .then(() => {
      dispatch(moodsNeedToBeUpdate(true));
      return dispatch(setMoodDone());
    })
    .catch(moodError => dispatch(setMoodError(moodError)));
};

export const fetchGetAllMoods = () => dispatch => {
  dispatch(setMoodLoading());
  return getMoods()
    .then(moods => {
      dispatch(setAllMoods(moods));
      dispatch(moodsNeedToBeUpdate(false));
      return dispatch(setMoodDone());
    })
    .catch(moodError => dispatch(setMoodError(moodError)));
};

export const fetchPatchMood = (id, body) => dispatch => {
  dispatch(setMoodLoading());
  return updateMood(id, body)
    .then(() => {
      dispatch(moodsNeedToBeUpdate());
      return dispatch(setMoodDone());
    })
    .catch(moodError => dispatch(setMoodError(moodError)));
};

export const fetchDeleteMood = id => dispatch => {
  dispatch(setMoodLoading());
  return deleteMood(id)
    .then(() => {
      dispatch(setCurrentMood(null));
      dispatch(moodsNeedToBeUpdate(true));
      dispatch(setMoodDone());
    })
    .catch(moodError => dispatch(setMoodError(moodError)));
};
