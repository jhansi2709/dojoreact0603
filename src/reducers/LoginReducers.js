import  {
  LOGIN_SEND_DATA,
  LOGIN_RECEIVE_DATA_SUCCESS,
  LOGIN_RECEIVE_DATA_FAILURE,
} from '../actions/types';

const initState = {
  user: []
};

export default function loginReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_SEND_DATA:
        return {
            ...state,
            user: action.payload
        };
     
    default:
      return state;
  }
}