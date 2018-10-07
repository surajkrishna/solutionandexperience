import * as actionTypes from "./actionTypes";

export const stopLoader = () => {
  return {
    type: actionTypes.STOP_LOADER
  };
};

export const startLoader = () => {
  return {
    type: actionTypes.START_LOADER
  };
};
