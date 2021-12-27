import "./Meme.scss";
import cheems from "../../img/cheems.png";

function Meme() {
    return (
        <div id="nav">
            <p>Que hace aqui joven? esta pagina sigue en construccion</p>
            <p>Orale siga con lo suyo</p>
            <img src={cheems} alt="builderCheems"></img>
            <a  style={{display: "table-cell"}} id="memebtn" href="https://www.youtube.com/watch?v=RRRtPoxr3dE" target = "_blank" rel = "noopener noreferrer">Regresar</a>
        </div>
    );
}

export default Meme;