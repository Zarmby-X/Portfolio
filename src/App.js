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
          <Route path="/home" element={<Navigate to="/Portfolio/"/>}/>
          <Route path="/" element={<Navigate to="/Portfolio/"/>}/>
          <Route path="About" element={<Meme></Meme>} />
          <Route path="Proyects" element={<h1>Puta Madre March por que no jala?</h1>} />
          <Route path="Playground" element={<Meme></Meme>} />
          <Route path="Contact" element={<Meme></Meme>} />
          <Route path="NotFound" element={<Link to="/Portfolio/">error 404 no encontrado</Link>} />
          <Route path="/*" element={<Navigate to="/NotFound"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
