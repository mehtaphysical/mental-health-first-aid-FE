import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { messageReducer } from './messageReducer';
import { moodReducer } from './moodReducer';

export default combineReducers({
  authReducer,
  messageReducer,
  moodReducer
});
