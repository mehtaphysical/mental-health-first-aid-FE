import { setSession, setSessionError, setSessionLoading, setSessionDone } from '../actions/authActions';
import { authReducer } from './authReducer';


describe('AUTH REDUCER', () => {
  it('handle setting user session', () => {
    const action = setSession('Joel');
    const newState = authReducer(undefined, action);
    expect(newState).toEqual({
      user: 'Joel',
      loading: false,
      error: null
    });
  });

  it('handles an error action', () => {
    const action = setSessionError('NOPE!');
    const newState = authReducer(undefined, action);
    expect(newState).toEqual({
      user: null,
      loading: false,
      error: 'NOPE!'
    });
  });

  it('handles loading action', () => {
    const action = setSessionLoading();
    const newState = authReducer(undefined, action);
    expect(newState).toEqual({
      user: null,
      loading: true,
      error: null
    });
  });

  it('handles loading done', () => {
    const action = setSessionDone();
    const initialState = {
      user: null,
      loading: true,
      error: null
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual({
      user: null,
      loading: false,
      error: null
    });
  });

  it('handles unrecognized action', () => {
    const action = 'SET_NOTHING';
    const initialState = {
      user: 'JOEL',
      loading: false,
      error: null
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual({
      user: 'JOEL',
      loading: false,
      error: null
    });
  });
});
