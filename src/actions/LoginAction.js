import  {
  LOGIN_SEND_DATA,
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

