import authReducer from "./auth";
import errorReducer from "./errors";
import lodingReducer from "./loading";
import profileReducer from "./profileReducer"
import {
  combineReducers
} from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  errors_obj: errorReducer,
  loadingState: lodingReducer,
  profile: profileReducer
});

export default rootReducer;