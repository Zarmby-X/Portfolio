import Home from "./pages/home/Home";
import Navbar from "./components/appConsts/navBar/Navbar";
import { BrowserRouter, Route, Routes, Navigate, Link} from "react-router-dom";
import Meme from "./pages/meme/Meme";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Portfolio/" element={<Home></Home>}/>
          <Route path="/Portfolio/home" element={<Navigate to="/Portfolio/"/>}/>
          <Route path="/" element={<Navigate to="/Portfolio/"/>}/>
          <Route path="/Portfolio/About" element={<Meme></Meme>} />
          <Route path="/Portfolio/Proyects" element={<Meme></Meme>} />
          <Route path="/Portfolio/Playground" element={<Meme></Meme>} />
          <Route path="/Portfolio/Contact" element={<Meme></Meme>} />
          <Route path="/Portfolio/NotFound" element={<Link to="/Portfolio/">error 404 no encontrado</Link>} />
          <Route path="/Portfolio/*" element={<Navigate to="/NotFound"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
