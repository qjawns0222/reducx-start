import Addtodocontainer from "../container/Addtodocontainer";
import Todolistcontainer from "../container/Todolistcontainer";

export default function Home() {
  return (
    <div>
      <h1>todos</h1>

      <Todolistcontainer />
      <Addtodocontainer />
    </div>
  );
}
