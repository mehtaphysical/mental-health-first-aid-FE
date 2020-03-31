import { postEvent, getEvent, patchEvent } from '../services/eventServices'; 

export const SET_EVENT_LOADING = 'SET_EVENT_LOADING';
export const SET_EVENT_DONE = 'SET_EVENT_DONE';
export const SET_EVENT = 'SET_EVENT';
export const SET_EVENT_ERROR = 'SET_EVENT_ERROR';

export const setEventLoading = () => ({ type: SET_EVENT_LOADING });

export const setEventDone = () => ({ type: SET_EVENT_DONE });

export const setEvent = event => ({ 
  type: SET_EVENT,
  payload: event 
});

export const setEventError = error => ({ 
  type: SET_EVENT_ERROR,
  payload: error
});

export const fetchPostEvent = event => dispatch => {
  dispatch(setEventLoading());
  return postEvent(event)
    .then(event => {
      dispatch(setEvent(event));
      return dispatch(setEventDone());
    })
    .catch(eventError => dispatch(setEventError(eventError)));
};

export const fetchGetEvent = () => dispatch => {
  dispatch(setEventLoading());
  return getEvent()
    .then(event => {
      dispatch(setEvent(event));
      return dispatch(setEventDone());
    })
    .catch(eventError => dispatch(setEventError(eventError)));
};

export const fetchPatchEvent = (body) => dispatch => {
  dispatch(setEventLoading());
  return patchEvent(body)
    .then(event => {
      dispatch(setEvent(event));
      return dispatch(setEventDone());
    })
    .catch(eventError => dispatch(setEventError(eventError)));
};

