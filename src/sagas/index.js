import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { fetchData } from "./data";

// main saga generators
export function* sagas() {
  console.log("saga index");
  yield [
    fork(takeLatest, 'FETCH_DATA', fetchData),
  ];
}
