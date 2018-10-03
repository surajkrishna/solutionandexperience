import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {}
};

const authSuccess = (state = initialState, action) => {
  return {
    ...state,
    user: action.data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    // case actionTypes.AUTH_FAIL: return authFail(state, action);
    // case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
    default:
      return state;
  }
};

const authFail = (state, action) => {
  return {
    ...state,
    user: action.data
  };
};

export default reducer;
