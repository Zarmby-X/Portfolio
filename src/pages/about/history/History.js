import "./History.scss";
import avatarIcon from "../../../img/svg/avatarIcon.png";
import gameBoy from "../../../img/svg/gameboy.png"
import guitar from "../../../img/svg/guitar.png"
import cube from "../../../img/svg/rubik.png"
import tablet from "../../../img/svg/tablet.png"

import { Fade } from "react-reveal";

function History() {
    return (
        <div id="historyContainer">
            <Fade>
                <div id="leftSideHistory">
                    <img id="historyAvatarIcon" src={avatarIcon} alt="developerImg"></img>
                </div>
            </Fade>
            <Fade right cascade>
                <div id="rightSideHistory">
                    <div className="personalCaracteristic2">
                        <p className="PersonalTittle">Learning</p>
                        <p className="historyDesc">I acept that i dont know all and thats helped me to inprove my knowlage of all technologies,
                            lenguages of programation and skills always asking and be autodidact when i need learn or use a new tool that i dont
                            know.</p>
                    </div>
                    <div className="personalCaracteristic2">
                        <p className="PersonalTittle">Working</p>
                        <p className="historyDesc">Since i was in my first job i always worked with teammates, its very important to me, provide help
                            when someone is in troubles and ask for it when i think i need it, the priority is do the task without delays</p>
                    </div>
                    <div className="personalCaracteristic2">
                        <p className="PersonalTittle">Hobbies</p>
                        <p className="historyDesc">I have a lot of hobbies the most part of them are creatives and the other part
                            is the kind of jigsaws and things to train my brain and sure some are only to relax and rest my mind.</p>
                        <div className="historyIconsWrap">
                            <div className="historyIconContainer">
                                <img alt="gameboyIcon" className="historyIcon" src={gameBoy}></img>
                                <div className="historyIconDesc">
                                    <p className="historyIconDescText">Videogames</p>
                                </div>
                            </div>
                            <div className="historyIconContainer">
                                <img alt="guitarIcon" className="historyIcon" src={guitar}></img>
                                <div className="historyIconDesc">
                                    <p className="historyIconDescText">Guitar</p>
                                </div>
                            </div>
                            <div className="historyIconContainer">
                                <img alt="cubeIcon" className="historyIcon" src={cube}></img>
                                <div className="historyIconDesc">
                                    <p className="historyIconDescText">Puzzles</p>
                                </div>
                            </div>
                            <div className="historyIconContainer">
                                <img alt="tabletIcon" className="historyIcon" src={tablet}></img>
                                <div className="historyIconDesc">
                                    <p className="historyIconDescText">Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default History;