export const SET_SESSION_LOADING = 'SET_SESSION_LOADING';
export const SET_SESSION_DONE = 'SET_SESSION_DONE';
export const SET_SESSION = 'SET_SESSION';
export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';

export const setSessionLoading = () => ({ type: SET_SESSION_LOADING });

export const setSessionDone = () => ({ type: SET_SESSION_DONE });

export const setSession = user => ({ 
  type: SET_SESSION,
  payload: user 
});

export const setSessionError = error => ({ 
  type: SET_SESSION_ERROR,
  payload: error
});

export const authorizeUser = (user, authFunction) => dispatch => {
  dispatch(setSessionLoading());
  return authFunction(user)
    .then(user => {
      dispatch(setSession(user));
      return dispatch(setSessionDone());
    })
    .catch(authError => dispatch(setSessionError(authError)));
};

