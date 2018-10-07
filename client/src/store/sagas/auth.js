import { delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import axios from "../../axios";
import setAuthToken from "../../utility/setAuthToken";
import * as actions from "../actions/index";
import jwt_decode from "jwt-decode";

export function* authUserSaga(action) {
  yield put(actions.startLoader());
  /*const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };*/

  try {
    const response = yield axios.post("/api/users/register", action.payload);

    // const expirationDate = yield new Date(
    // new Date().getTime() + response.data.expiresIn * 1000
    // );
    // yield localStorage.setItem("token", response.data.idToken);
    //  yield localStorage.setItem("expirationDate", expirationDate);
    // yield localStorage.setItem("userId", response.data.localId);
    yield put(actions.authSuccess(response.data));
    //yield put(actions.checkAuthTimeout(response.data.expiresIn));
    yield put(actions.stopLoader());
  } catch (error) {
    yield put(actions.authFail(error.response.data));
    yield put(actions.stopLoader());
  }
}

export function* loginUserSaga(action) {
  yield put(actions.startLoader());

  try {
    const response = yield axios.post("/api/users/login", action.payload);

    // yield put(actions.loginUserSuccess(response.data));
    const { token } = response.data;

    // Set token to ls
    yield localStorage.setItem("jwtToken", token);

    // Set token to Auth header
    yield setAuthToken(token);
    yield put(actions.stopLoader());
    // Decode token to get user data
    const decoded = jwt_decode(token);

    // Set current user
    yield put(actions.setCurrentUser(decoded));
  } catch (error) {
    yield put(actions.authFail(error.response.data));
    yield put(actions.stopLoader());
  }
}
