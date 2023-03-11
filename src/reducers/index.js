import { combineReducers } from 'redux';
import postReducer from './postReducer';
import loginReducer  from './LoginReducers';

export default combineReducers({
  posts: postReducer,
  login: loginReducer
});
