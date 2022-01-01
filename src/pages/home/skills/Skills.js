import "./Skills.scss";
import certificate from "../../../img/svg/certificate.png";
import medal from "../../../img/svg/medal.png";
import certificate2 from "../../../img/svg/diploma.png";
import { Fade } from "react-reveal";

function Skills() {
    return (
        <div id="skillsContainer">
                <div id="skillsRightSide">
                    <Fade right>
                    <div id="certificate1" className="academyIcon">
                        <img className="certificateIcon" src={certificate} alt="certificate.Icon"></img>
                        <p className="achivementTittle">TSU - TICS</p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div id="medal1" className="academyIcon">
                        <img className="medalIcon" src={medal} alt="certificate.Icon"></img>
                        <p className="achivementTittle">Master in CSS: Learn Responsive, SASS, Flexbox, Grid y Bootstrap</p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div id="certificate2" className="academyIcon">
                        <img className="certificateIcon" src={certificate2} alt="certificate.Icon"></img>
                        <p className="achivementTittle">Arkus-Nexus Bootcamp certificate:</p>
                        <p className="achivementTittle">Web Developer</p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div id="medal2" className="academyIcon">
                        <img className="medalIcon" src={medal} alt="certificate.Icon"></img>
                        <p className="achivementTittle">Master in JavaScript: Learn JS, jQuery, Angular, NodeJS</p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div id="certificate3" className="academyIcon">
                        <img className="certificateIcon" src={certificate} alt="certificate.Icon"></img>
                        <p className="achivementTittle">Engineering graduate - TI</p>
                    </div>
                    </Fade>
                </div>
        </div>
    );
}

export default Skills;