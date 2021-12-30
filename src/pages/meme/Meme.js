import "./Meme.scss";
import cheems from "../../img/cheems.png";

function Meme() {
    return (
        <div id="nav">
            <p>Que hace aqui joven? esta pagina sigue en construccion</p>
            <p>Tome este video por las molestias</p>
            <img src={cheems} alt="builderCheems"></img>
            <a  style={{display: "table-cell"}} id="memebtn" href="https://www.youtube.com/watch?v=Tm7G4P0TBag" target = "_blank" rel = "noopener noreferrer">Video del dia</a>
        </div>
    );
}

export default Meme;