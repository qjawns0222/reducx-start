import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import users from "./users";

const redu = combineReducers({ todos, filter, users });

export default redu;
