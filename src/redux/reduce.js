import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
const redu = combineReducers({ todos, filter });

export default redu;
