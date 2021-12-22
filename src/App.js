import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/*" element={<h1>404 not fOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
