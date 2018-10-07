import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
import isEmpty from "../../utility/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

const authSuccess = (state = initialState, action) => {
  return {
    ...state,
    user: {
      name: action.idToken.name,
      email: action.idToken.email,
      avatar: action.idToken.avatar
    }
  };
};

const setCurrentUser = (state, action) => {
  return {
    ...state,
    isAuthenticated: !isEmpty(action.payload),
    user: action.payload
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.SET_CURRENT_USER:
      return setCurrentUser(state, action);
    // case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
    default:
      return state;
  }
};

export default reducer;
