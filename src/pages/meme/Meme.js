import "./Meme.scss";
import cheems from "../../img/cheems.png";
import {NavLink} from "react-router-dom";



function Meme() {
    return (
        <div id="nav">
            <p>Que hace aqui joven? esta pagina sigue en construccion</p>
            <p>Orale siga con lo suyo</p>
            <img src={cheems}></img>
            <NavLink id="memebtn" href="https://www.youtube.com/watch?v=RRRtPoxr3dE">Regresar</NavLink>
        </div>
    );
}

export default Meme;