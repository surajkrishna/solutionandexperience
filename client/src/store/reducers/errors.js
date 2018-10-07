import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  errors: {},
  loading: false
};

const errors = (state, action) => {
  return updateObject(state, {
    errors: action.errors,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ERRORS:
      return errors(state, action);
    default:
      return state;
  }
};

export default reducer;
