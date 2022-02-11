import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import todoApp from "./modules/todos";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

// function middleware1(store) {
//   console.log("1-1");
//   return (next) => {
//     console.log("1-2");
//     return (action) => {
//       console.log("1-3", next);
//       const returnvalue = next(action);
//       console.log("1-4");
//       return returnvalue;
//     };
//   };
// }
// function middleware2(store) {
//   console.log("2-1");
//   return (next) => {
//     console.log("2-2");
//     return (action) => {
//       console.log("2-3");
//       const returnvalue = next(action);
//       console.log("2-4");
//       return returnvalue;
//     };
//   };
// }

const store = createStore(
  todoApp,
  composeWithDevTools(applyMiddleware(thunk, promise))
);

export default store;
