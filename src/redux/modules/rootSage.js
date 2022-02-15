import { all } from "redux-saga/effects";
import { userSaga } from "./users";
export default function* rootSage() {
  yield all([userSaga()]);
}
