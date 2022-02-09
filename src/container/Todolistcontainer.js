import { useSelector } from "react-redux";
import Toddolist from "../component/Todolist";

// const Todolistcontainer = connect(
//   (state) => {
//     return { todos: state.todos };
//   },
//   (dispatch) => {
//     return {};
//   }
// )(Toddolist);
// export default Todolistcontainer;
export default function Todolistcontainer() {
  const todos = useSelector((state) => state.todos);
  return <Toddolist todos={todos} />;
}
