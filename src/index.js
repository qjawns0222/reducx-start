import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";

//import { addTodo, completeTodo, showAll, showComplete } from "./redux/action";
// const sub = store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(addTodo("안녕하세요"));
// store.dispatch(completeTodo(0));
// store.dispatch(addTodo("안녕하세요"));
// store.dispatch(completeTodo(1));
// store.dispatch(addTodo("안녕하세요"));
// store.dispatch(completeTodo(2));
// store.dispatch(showComplete());
// store.dispatch(showAll());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
