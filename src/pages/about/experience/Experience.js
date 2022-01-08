import { Fade } from "react-reveal";
import axaLogo from "../../../img/svg/Axxa.png";
import arkusNexusLogo from "../../../img/svg/ArkusNexus.png";
import banorteLogo from "../../../img/svg/Banorte.png";
import "./Experience.scss"
import { DevIcon } from "../../../components/appConsts/icons/Icons";

function Experience() {
    return (
        <div id="aboutExperienceContainer">
            <div id="experienceTittle">
                <Fade bottom>
                    <p id="experienceTittleText">MY</p>
                    <DevIcon className="experienceIcon"></DevIcon>
                    <p id="experienceTittleText">Experience </p>
                </Fade>
            </div>
            <div id="experiencesWrap">
                <div className="experienceGrid">
                    <Fade bottom>
                        <div className="logoExperienceWrap">
                            <img className="experienceLogo" src={axaLogo} alt="AxaLogo"></img>
                        </div>
                        <div className="textExperienceWrap">
                            <div className="experienceSeparator"></div>
                            <p className="experienceDesc"><span className="experienceTittle">AXA: </span>
                                I assist in development and maintenance of the new version of the aplication AXA for the insurance team ,
                                my work consisted in implements diferent solutions that the client needs at the same time i was consultor
                                in of the aplication solving defects and working together with my teamMates Testers.
                            </p>
                        </div>
                    </Fade>
                </div>
                <div className="experienceGrid">
                    <Fade bottom>
                        <div className="logoExperienceWrap">
                            <img className="experienceLogo" src={arkusNexusLogo} alt="ArkusNexusLogo"></img>
                        </div>
                        <div className="textExperienceWrap">
                            <div className="experienceSeparator"></div>
                            <p className="experienceDesc"><span className="experienceTittle">ArkusNexus: </span>
                                I develop a aplication to manage the equipement of the company including technology components, cellphones,
                                and peripherals, the application consists in scan the BarCode of the components and register it the database,
                                the aplication have a sistem of auto asign, add categoriees of components and check the assignments.
                            </p>
                        </div>
                    </Fade>
                </div>
                <div className="experienceGrid">
                    <Fade bottom>
                        <div className="logoExperienceWrap">
                            <img className="experienceLogo" src={banorteLogo} alt="BanorteLogo"></img>
                        </div>
                        <div className="textExperienceWrap">
                            <div className="experienceSeparator"></div>
                            <p className="experienceDesc"><span className="experienceTittle">Banorte: </span>
                                I used diferent aplications of the Banorte company to test the correct functioning of these tools,
                                I read the diferent requerimients, business rules and other kind of documents to test the aplications
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Experience;