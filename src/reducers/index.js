import { combineReducers } from 'redux';
import postReducer from './postReducer';
import loginReducer  from './LoginReducers';
import sessionReducer from './SessionReducer';

export default combineReducers({
  posts: postReducer,
  login: loginReducer,
  session: sessionReducer
});
