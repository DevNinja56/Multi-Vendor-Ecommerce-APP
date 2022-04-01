import { combineReducers } from "redux";
import {
  AUTH_LOADING,
  IS_FIRST,
  TOKKEN,
  USER_TOKKEN
} from "./action";

const initialUserState = {
  AuthLoading: false,
  isFirst: false,
  token: "",
  userToken: ""
};

const userReducer = (state = initialUserState, action) => {

  if (action.type === AUTH_LOADING) {
    return {
      ...state,
      AuthLoading: action.payload
    };
  }
  if (action.type === IS_FIRST) {
    return {
      ...state,
      isFirst: action.payload.isFirst
    };
  }
  if (action.type === TOKKEN) {
    return {
      ...state,
      token: action.payload.token
    };
  }
  if (action.type === USER_TOKKEN) {
    return {
      ...state,
      userToken: action.payload.userToken
    };
  }
  return state;
};


const reducer = combineReducers({
  user: userReducer,
});
export default reducer;