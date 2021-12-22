import Home from "./components/home/Home";
import Navbar from "./components/appConsts/navBar/Navbar";
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home> 
    </div>   
  );
}

export default App;
