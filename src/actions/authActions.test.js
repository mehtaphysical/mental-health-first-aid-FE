import { setSessionLoading, setSessionDone, setSession, setSessionError } from './authActions';

describe('AUTH ACTIONS TEST', () => {
  it('functions return correct strings', () => {
    expect(setSessionLoading().type).toEqual('SET_SESSION_LOADING');
    expect(setSessionDone().type).toEqual('SET_SESSION_DONE');
  });

  it('Set Session returns correct string, and payload', () => {
    const user = 'Joel';
    expect(setSession(user)).toEqual({
      type: 'SET_SESSION',
      payload: 'Joel'
    });
  });

  it('Set Session Error returns correct string and payload', () => {
    const error = 'Something went wrong!';
    expect(setSessionError(error)).toEqual({
      type: 'SET_SESSION_ERROR',
      payload: 'Something went wrong!'
    });
  });
});
