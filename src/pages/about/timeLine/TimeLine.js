import { useRef } from "react";
import "./TimeLine.scss"
import { DirectionCartelIcon } from "../../../components/appConsts/icons/Icons"
import { EventDown, EventUp } from "./eventLine/Event";


function TimeLine() {

    let line = useRef(null);
    let numberEvents = 6;
    let currentEvent = 0;

    setTimeout(() => {
        line.current.classList.remove("hidde")
    }, 500);

    return (
        <div id="timeLineContainer">
            <div id="cardelContainer">
                <p id="leftTittle" className="tittleMap">My</p>
                <DirectionCartelIcon className="cartelAbout"></DirectionCartelIcon>
                <p id="rightTittle" className="tittleMap">Path</p>
            </div>
            <div id="lineContainer">
                <EventUp eventName="CBTC" secondaryName="programming technician"></EventUp>
                <div className="lineplaceholder"></div>
                <EventUp eventName="UTA" secondaryName="engineering graduate IT"></EventUp>
                <div className="lineplaceholder"></div>
                <EventUp eventName="Arkus Nexus" secondaryName="Web Developer - Fontend"></EventUp>
                <div className="lineplaceholder"></div>
                <div id="lineWrap">
                    <div ref={line} id="line" className="hidde"></div>
                </div>
                <div className="lineplaceholder"></div>
                <EventDown eventName="UTA" secondaryName="advanced technician"></EventDown>
                <div className="lineplaceholder"></div>
                <EventDown eventName="Capgemini" secondaryName="Developer and consultor"></EventDown>
                <div className="lineplaceholder"></div>
                <EventDown eventName="Capgemini" secondaryName="QA - Tester"></EventDown>
            </div>
        </div>
    );
}

export default TimeLine;