import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { positiveReducer } from './positiveReducer';
import { moodReducer } from './moodReducer';
import { eventReducer } from './eventReducer';

export default combineReducers({
  authReducer,
  positiveReducer,
  moodReducer,
  eventReducer
});
