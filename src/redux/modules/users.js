import axios from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";

const DATA_START = "redux-start/users/DATA_START";
const DATA_END = "redux-start/users/DATA_END";
const DATA_ERROR = "redux-start/users/DATA_ERROR";
const GET_USERS = "redux-start/users/GET_USERS";
const GET_USERS_FULFILED = "redux-start/users/GET_USERS_FULFILLED";
const GET_USERS_PENDING = "redux-start/users/GET_USERS_PENDING";
const GET_USERS_REJECTED = "redux-start/users/GET_USERS_REJECTED";

export function datastart() {
  return {
    type: DATA_START,
  };
}

export function dataend(text) {
  return {
    type: DATA_END,
    text,
  };
}

export function dataerror(error) {
  return {
    type: DATA_ERROR,
    error,
  };
}

export default function reducer(
  state = { loading: false, data: [], error: null },
  action
) {
  if (action.type === DATA_ERROR)
    return { ...state, loading: false, error: action.error };
  if (action.type === GET_USERS_REJECTED)
    return { ...state, loading: false, error: action.payload };
  if (action.type === DATA_START || action.type === GET_USERS_PENDING)
    return { ...state, loading: true, error: null };
  if (action.type === DATA_END)
    return { ...state, loading: false, data: action.text };
  if (action.type === GET_USERS_FULFILED) {
    return { ...state, loading: false, data: action.payload };
  }

  return state;
}
function Sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("sleep");
      resolve();
    }, ms);
  });
}

export function ElectThunk() {
  return async (dispatch, getstate, { history }) => {
    try {
      console.log(history);
      dispatch(datastart());
      Sleep(2000);

      const res = await axios.get("https://api.github.com/users");

      dispatch(dataend(res.data));
      history.push("/");
    } catch (error) {
      dispatch(dataerror(error));
    }
  };
}
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");

      return res.data;
    },
  };
}
const GET_USERS_SAGA_START = "GET_USERS_SAGA_START";
function* getUserSage(action) {
  try {
    yield delay(2000);

    const res = yield call(axios.get, "https://api.github.com/users");
    yield put(dataend(res.data));
  } catch (error) {
    yield put(dataerror(error));
  }
}
export function getUsersSagaStart() {
  return {
    type: GET_USERS_SAGA_START,
  };
}

export function* userSaga() {
  yield takeEvery(GET_USERS_SAGA_START, getUserSage);
}
