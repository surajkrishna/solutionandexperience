import * as actionTypes from "../actions/actionTypes";

const intialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = intialState, action) {
  switch (action.type) {
    case actionTypes.PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case actionTypes.CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
