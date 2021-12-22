import Home from "./components/home/Home";
import Navbar from "./components/appConsts/navBar/Navbar";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/home" element={<Navigate to="/"/>}/>
          <Route path="/About" element={<h1>Under construction</h1>} />
          <Route path="/NotFound" element={<h1>Error: 404 not found</h1>} />
          <Route path="*" element={<Navigate to="/NotFound"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
