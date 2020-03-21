import { updateEvent } from '../services/eventServices';

export const SET_EVENT_LOADING = 'SET_EVENT_LOADING';
export const SET_EVENT_DONE = 'SET_EVENT_DONE';
export const SET_EVENT = 'SET_EVENT';
export const SET_EVENT_ERROR = 'SET_EVENT_ERROR';

export const setEventLoading = () => ({ type: SET_EVENT_LOADING });

export const setEventDone = () => ({ type: SET_EVENT_DONE });

export const setEvent = user => ({ 
  type: SET_EVENT,
  payload: user 
});

export const setEventError = error => ({ 
  type: SET_EVENT_ERROR,
  payload: error
});

export const sendEvent = (event) => dispatch => {
  dispatch(setEventLoading());
  return updateEvent(event)
    .then(() => {
      return dispatch(setEventDone());
    })
    .catch(messageError => dispatch(setEventError(messageError)));
};