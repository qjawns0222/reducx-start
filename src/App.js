import logo from "./logo.svg";
import "./App.css";
import Todolistcontainer from "./container/Todolistcontainer";
import Addtodocontainer from "./container/Addtodocontainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todolistcontainer />
        <Addtodocontainer />
      </header>
    </div>
  );
}

export default App;
