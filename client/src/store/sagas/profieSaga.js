import { put } from "redux-saga/effects";
import axios from "../../axios";
import * as actions from "../actions/index";

export function* profileLoadingSaga(action) {
  yield put(actions.startLoader());
  /*const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };*/

  try {
    const response = yield axios.get("/api/profile");

    // const expirationDate = yield new Date(
    // new Date().getTime() + response.data.expiresIn * 1000
    // );
    // yield localStorage.setItem("token", response.data.idToken);
    //  yield localStorage.setItem("expirationDate", expirationDate);
    // yield localStorage.setItem("userId", response.data.localId);
    yield put(actions.getProfile(response.data));
    //yield put(actions.checkAuthTimeout(response.data.expiresIn));
    yield put(actions.stopLoader());
  } catch (error) {
    yield put(actions.getProfileError());
    yield put(actions.stopLoader());
  }
}
