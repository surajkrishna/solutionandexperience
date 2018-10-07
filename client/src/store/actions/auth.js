import * as actionTypes from "./actionTypes";
import setAuthToken from "../../utility/setAuthToken";

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: token.name
  };
};

export const authFail = errors => {
  return {
    type: actionTypes.GET_ERRORS,
    errors: errors
  };
};

export const logout = () => {
  // Remove item from local storage
  localStorage.removeItem("jwtToken");

  // Remove auth header from future requests
  setAuthToken(false);

  // Set current user to {} which will set isAuthenticated to false
  return {
    type: actionTypes.SET_CURRENT_USER
  };
};

export const logoutSucceed = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime
  };
};

export const auth = userdata => {
  return {
    type: actionTypes.AUTH_USER,
    payload: userdata
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE
  };
};

export const setCurrentUser = decoded => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded
  };
};

export const loginUserStart = userLoginData => {
  return {
    type: actionTypes.START_USER_LOGIN,
    payload: userLoginData
  };
};
