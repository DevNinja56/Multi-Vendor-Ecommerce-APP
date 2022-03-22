import { combineReducers } from "redux";
import {
  AUTH_LOADING,
  IS_FIRST,
  TOKKEN
} from "./action";

const initialUserState = {
  AuthLoading: false,
  isFirst: false,
  token:""
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
  return state;
};


const reducer = combineReducers({
  user: userReducer,
});
export default reducer;