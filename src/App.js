import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from "./Pages/HomePage";
import Signin from "./Pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/sign-in" element={<Signin />}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
