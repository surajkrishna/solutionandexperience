import { delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/index";

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  let url = "api/users/register";

  try {
    //const response = yield axios.post(url, authData);

    // const expirationDate = yield new Date(
    // new Date().getTime() + response.data.expiresIn * 1000
    //);
    // yield localStorage.setItem("token", response.data.idToken);
    //yield localStorage.setItem("expirationDate", expirationDate);
    // yield localStorage.setItem("userId", response.data.localId);
    yield put(actions.authSuccess({ user: "Suraj Krishna" }));
    //yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    // yield put(actions.authFail(error.response.data.error));
  }
}
