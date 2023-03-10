import  {
  LOGIN_SEND_DATA,
  LOGIN_RECEIVE_DATA_SUCCESS,
  LOGIN_RECEIVE_DATA_FAILURE,
} from '../actions/types';

const initState = {
  username: ''
};

export default function loginReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_SEND_DATA:
      return Object.assign({}, ...state, {
        username : action.data.username
      });
     
    case LOGIN_RECEIVE_DATA_SUCCESS:
      return [...state, action.data];
    case LOGIN_RECEIVE_DATA_FAILURE:
      return [ ...state, action.data ];
    default:
      return state;
  }
}