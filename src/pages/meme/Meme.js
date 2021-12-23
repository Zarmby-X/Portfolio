import "./Meme.scss"
import cheems from "../../img/cheems.png"


function Meme() {
    return (
        <div id="nav">
            <p>Que hace aqui joven? esta pagina sigue en construccion</p>
            <p>Orale siga con lo suyo</p>
            <img src={cheems}></img>
            <a id="memebtn" href="https://www.youtube.com/watch?v=RRRtPoxr3dE">Regresar</a>
        </div>
    );
}

export default Meme;