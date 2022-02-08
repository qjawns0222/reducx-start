import { createStore } from "redux";
import todoApp from "./reduce";

const store = createStore(todoApp);

export default store;
