import  {
  LOGIN_SEND_DATA,LOGIN_SEND_SESSION,LOGIN_RESET_DATA,
} from '../actions/types';

const initState = {
  user: []
};

export default function loginReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_RESET_DATA: 
        return {
          ...initState,
          user: action.payload
        };
    case LOGIN_SEND_DATA:
        return {
            ...state,
            user: action.payload
        };
    case LOGIN_SEND_SESSION:
        return {
            undefined
        };

     default:
      return state;
  }
}


