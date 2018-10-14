import * as actionTypes from "./actionTypes";

export const getCurrentProfile = () => {
  return {
    type: actionTypes.PROFILE_LOADING
  };
};

export const getProfile = data => {
  return {
    type: actionTypes.GET_PROFILE,
    payload: data
  };
};

export const getProfileError = () => {
  return {
    type: actionTypes.GET_PROFILE,
    payload: {}
  };
};

export const clearCurrentProfile = () => {
  return {
    type: actionTypes.CLEAR_CURRENT_PROFILE
  };
};
