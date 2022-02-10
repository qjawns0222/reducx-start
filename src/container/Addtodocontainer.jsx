import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Addtodo from "../component/Addtodo";
import { addTodo } from "../redux/action";

// const Addtodocontainer = connect(
//   (state) => {
//     return {};
//   },
//   (dispatch) => {
//     return {
//       add: (text) => {
//         dispatch(addTodo(text));
//       },
//     };
//   }
// )(Addtodo);

// export default Addtodocontainer;
export default function Addtodocontainer() {
  const dispatch = useDispatch();
  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );
  return <Addtodo add={add} />;
}
