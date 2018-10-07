import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  loading: false
};

const startLoading = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const stopLoading = (state, action) => {
  return updateObject(state, { error: null, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STOP_LOADER:
      return stopLoading(state, action);
    case actionTypes.START_LOADER:
      return startLoading(state, action);
    default:
      return state;
  }
};

export default reducer;
