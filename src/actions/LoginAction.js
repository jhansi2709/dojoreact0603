import  {
  LOGIN_SEND_DATA,LOGIN_SEND_SESSION,LOGIN_RESET_DATA,
} from './types';


export const fetchUser = (id) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users?username='+id)
      .then(res => res.json())
      .then(user =>
          dispatch({
              type: LOGIN_SEND_DATA,
              payload: user
          })
      );
};

export const resetUser = (id) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user =>
          dispatch({
              type: LOGIN_RESET_DATA,
              payload: []
          })
      );
};

export const sessionOut = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user =>
          dispatch({
              type: LOGIN_SEND_SESSION,
              payload: []
          })
      );
};

