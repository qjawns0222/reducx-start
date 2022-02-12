import "./App.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/User";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
