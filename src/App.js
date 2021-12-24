import Home from "./pages/home/Home";
import Navbar from "./components/appConsts/navBar/Navbar";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Meme from "./pages/meme/Meme";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/home" element={<Navigate to="/"/>}/>
          <Route path="/About" element={<Meme></Meme>} />
          <Route path="/Proyects" element={<Meme></Meme>} />
          <Route path="/Playground" element={<Meme></Meme>} />
          <Route path="/Contact" element={<Meme></Meme>} />
          <Route path="/NotFound" element={<a href="http://localhost:3000">error 404 no encontrado</a>} />
          <Route path="*" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
