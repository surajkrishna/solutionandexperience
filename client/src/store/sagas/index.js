import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { authUserSaga } from "./auth";

export function* watchAuth() {
  yield all([takeEvery(actionTypes.AUTH_USER, authUserSaga)]);
}

//export function* watchOrder() {
// yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
//}
