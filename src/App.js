import logo from "./logo.svg";
import "./App.css";
import Todolistcontainer from "./container/Todolistcontainer";
import Addtodocontainer from "./container/Addtodocontainer";
import Userlistcontainser from "./container/Userlistcontainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Userlistcontainser />
        <Todolistcontainer />
        <Addtodocontainer />
      </header>
    </div>
  );
}

export default App;
