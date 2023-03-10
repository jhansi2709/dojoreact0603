import  {
  LOGIN_SEND_DATA,
  LOGIN_RECEIVE_DATA_SUCCESS,
  LOGIN_RECEIVE_DATA_FAILURE,
} from './types';

export default class LoginActions {
  static sendLoginData(cred) {
    return { type: LOGIN_SEND_DATA, data: cred };
  }

  static responseLoginSuccess(cred) {
    return { type: LOGIN_RECEIVE_DATA_SUCCESS, data: cred };
  }

  static responseLoginFailure(cred) {
    return { type: LOGIN_RECEIVE_DATA_FAILURE, data: cred };
  }

}