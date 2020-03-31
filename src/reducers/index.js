import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { messageReducer } from './messageReducer';
import { moodReducer } from './moodReducer';
import { eventReducer } from './eventReducer';

export default combineReducers({
  authReducer,
  messageReducer,
  moodReducer,
  eventReducer
});
