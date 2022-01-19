import "./Header.scss"
import austronaut from "../../../img/svg/astronaut.png"
import moon from "../../../img/svg/moon.png"
import star from "../../../img/svg/estrella.png"

import { Fade } from "react-reveal";

function Header() {
    return (
        <div id="playgroundHeaderContainer">
            <Fade left>
                <div id="playgroundDesc">
                    <p id="playgroundDescTittle">Playground</p>
                    <div id="playgroundDescTittleSeparator"></div>
                    <p id="playgroundDescText">Welcome to my playground, always i like a some effect to develop or just to play and try my skills
                        i'm come here to practice, enjoy it.</p>
                </div>
            </Fade>
            <Fade right>
                <div id="playgroundArt">
                    <img alt="moonIcon" src={moon} id="moon"></img>
                    <img alt="starIcon" src={star} id="star1" className="star"></img>
                    <img alt="astronautIcon" src={austronaut} id="astronaut"></img>
                    <img alt="starIcon" src={star} id="star2" className="star"></img>
                    <img alt="starIcon" src={star} id="star3" className="star"></img>
                </div>
            </Fade>
        </div>
    );
}

export default Header;