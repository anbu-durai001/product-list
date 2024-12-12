import { all, fork } from "redux-saga/effects";
import ProductSaga from "./ProductSaga";

export function* rootSaga() {
  yield all([
    fork(ProductSaga),
  ]);
}