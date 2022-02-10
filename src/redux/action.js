import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";
export const DATA_START = "DATA_START";
export const DATA_END = "DATA_END";
export const DATA_ERROR = "DATA_ERROR";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export function showAll() {
  return { type: SHOW_ALL };
}
export function showComplete() {
  return { type: SHOW_COMPLETE };
}
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

export function electThunk() {
  return async (dispatch) => {
    try {
      dispatch(datastart());
      const res = await axios.get("https://api.github.com/users");
      console.log(res);
      dispatch(dataend(res));
    } catch (error) {
      dispatch(dataerror(error));
    }
  };
}
