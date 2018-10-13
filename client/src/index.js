import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "./store/reducers/auth";
import errorReducer from "./store/reducers/errors";
import lodingReducer from "./store/reducers/loading";
import { watchAuth, watchLogin } from "./store/sagas";
import registerServiceWorker from "./registerServiceWorker";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utility/setAuthToken";
import * as actionTypes from "./store/actions";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  errors_obj: errorReducer,
  loadingState: lodingReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);

  // Set user and isAuthenticated
  store.dispatch(actionTypes.setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now * 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(actionTypes.logout());

    // ToDo: Clear Current Profile
    // Redirect to login
    window.location.href = "/login";
  }
}

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchLogin);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
