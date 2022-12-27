import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/sign-in" element={<Signin />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
