import {SESSION_SET, SESSION_INVAID} from "../actions/types";

const session = {
  isAuthenticated : false
};

export default function sessionReducer(state = session, action){
  switch (action.type) {
    case SESSION_SET:
      return Object.assign({}, ...state, {
        isAuthenticated : true
      });
    case SESSION_INVAID:
      return Object.assign({}, ...state, {
        isAuthenticated : false
      });
    default:
      return state;
  }
}
