import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { authUserSaga, loginUserSaga } from "./auth";

export function* watchAuth() {
  yield all([takeEvery(actionTypes.AUTH_USER, authUserSaga)]);
}

export function* watchLogin() {
  yield all([takeEvery(actionTypes.START_USER_LOGIN, loginUserSaga)]);
}

//export function* watchOrder() {
// yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
//}
