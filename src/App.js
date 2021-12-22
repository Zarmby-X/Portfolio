import Home from "./components/home/Home";
import Navbar from "./components/appConsts/navBar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/*" element={<h1>404 not fOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
