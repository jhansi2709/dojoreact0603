import {SESSION_SET, SESSION_INVAID} from "./types";

export default class SessionActions {
  static saveSessionData() {
    return { type: SESSION_SET };
  }

  static resetSessionData() {
    return { type: SESSION_INVAID };
  }

}