import { postPositive, getPositives, updatePositive, deletePositive } from '../services/positiveServices';

export const SET_POSITIVE_LOADING = 'SET_POSITIVE_LOADING';
export const SET_POSITIVE_DONE = 'SET_POSITIVE_DONE';
export const SET_ALL_POSITIVES = 'SET_ALL_POSITIVES';
export const SET_CURRENT_POSITIVE = 'SET_CURRENT_POSITIVE';
export const SET_POSITIVE_ERROR = 'SET_POSITIVE_ERROR';
export const SET_UNREAD_COUNT = 'SET_UNREAD_COUNT';

export const setPositiveLoading = () => ({ type: SET_POSITIVE_LOADING });

export const setPositiveDone = () => ({ type: SET_POSITIVE_DONE });

export const setAllPositives = positives => ({ 
  type: SET_ALL_POSITIVES,
  payload: positives 
});

export const setCurrentPositive = positive => ({ 
  type: SET_CURRENT_POSITIVE,
  payload: positive 
});

const initialCurrent = {
  _id: null
};

export const chooseNextCurrentPositive = (positives, current = initialCurrent) => dispatch => {
  const unreadPositive = positives.find(positive => !positive.seen);
  if(unreadPositive) {
    dispatch(setCurrentPositive(unreadPositive));
  } else {
    let index = Math.floor(Math.random() * positives.length);
    while(current._id === positives[index]._id) index = Math.floor(Math.random() * positives.length);
    dispatch(setCurrentPositive(positives[index]));
  }
};

export const setPositiveError = error => ({ 
  type: SET_POSITIVE_ERROR,
  payload: error
});

export const setUnread = unread => ({
  type: SET_UNREAD_COUNT,
  payload: unread
});

export const fetchPostPositive = (positive) => dispatch => {
  if(!positive.author) positive.author = 'anonymous';
  dispatch(setPositiveLoading());
  return postPositive(positive)
    .then(() => {
      return dispatch(setPositiveDone());
    })
    .catch(positiveError => dispatch(setPositiveError(positiveError)));
};

export const fetchPatchPositive = (id, body) => dispatch => {
  return updatePositive(id, body)
    .then(() => dispatch(fetchGetAllPositives()))
    .catch(positiveError => setPositiveError(positiveError));
};

export const fetchGetAllPositives = () => dispatch => {
  dispatch(setPositiveLoading());
  return getPositives()
    .then(positives => {
      dispatch(setAllPositives(positives));
      if(positives[0]) {
        const countUnread = positives.reduce((acc, positive) => {
          if(!positive.seen) acc = acc + 1;
          return acc;
        }, 0);
        dispatch(setUnread(countUnread));
        dispatch(chooseNextCurrentPositive(positives));
      }
      
      return dispatch(setPositiveDone());
    })
    .catch(positiveError => dispatch(setPositiveError(positiveError)));
};

export const fetchDeletePositive = (id) => dispatch => {
  dispatch(setPositiveLoading());
  return deletePositive(id)
    .then(() => dispatch(setCurrentPositive()))
    .then(() => dispatch(fetchGetAllPositives()))
    .then(() => dispatch(setPositiveDone()))
    .catch(positiveError => dispatch(setPositiveError(positiveError)));
};


