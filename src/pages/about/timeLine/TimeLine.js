import { useRef, useState, useEffect } from "react";
import "./TimeLine.scss"
import { DirectionCartelIcon } from "../../../components/appConsts/icons/Icons"
import { DateDown, DateUp, EventDown, EventUp } from "./eventLine/Event";


function TimeLine() {

    const [width, setWidth] = useState(window.innerWidth);
    const [cellMode, setCellMode] = useState(window.innerWidth);

    let line = useRef(null);
    let line2 = useRef(null);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    const ToogleCellMode = () => {
        if (width <= 1011) {
            setCellMode(true);
        } else {
            setCellMode(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        ToogleCellMode();
    }, [width]);

    setTimeout(() => {
        (!cellMode)? line.current.classList.remove("hidde") : line2.current.classList.remove("hidde");
    }, 300);

    return (
        <div id="aboutGeneralWrap">
            <div id="timeLineContainer" className={cellMode? "quit" : null}>
                <div id="cardelContainer">
                    <p id="leftTittle" className="tittleMap">My</p>
                    <DirectionCartelIcon className="cartelAbout"></DirectionCartelIcon>
                    <p id="rightTittle" className="tittleMap">Path</p>
                </div>
                <div id="lineContainer">
                    <EventUp eventName="CBTC" secondaryName="programming technician" delayTime={350}></EventUp>
                    <DateDown Date="2014-2017" delayTime={700}></DateDown>
                    <EventUp eventName="UTA" secondaryName="engineering graduate IT" delayTime={1050}></EventUp>
                    <DateDown Date="2016-2017" delayTime={1400}></DateDown>
                    <EventUp eventName="Arkus Nexus" secondaryName="Web Developer - Fontend" delayTime={1750}></EventUp>
                    <DateDown Date="2021-2021" delayTime={2050}></DateDown>
                    <div id="lineWrap">
                        <div ref={line} id="line" className="hidde"></div>
                    </div>
                    <DateUp Date="2011-2014" delayTime={350}></DateUp>
                    <EventDown eventName="UTA" secondaryName="advanced technician" delayTime={700}></EventDown>
                    <DateUp Date="2017-2021" delayTime={1050}></DateUp>
                    <EventDown eventName="Capgemini" secondaryName="Developer and consultor" delayTime={1400}></EventDown>
                    <DateUp Date="2020-2021" delayTime={1750}></DateUp>
                    <EventDown eventName="Capgemini" secondaryName="QA - Tester" delayTime={2050}></EventDown>
                </div>
            </div>

            <div id="timeLineContainer" className={!cellMode? "quit" : null}>
                <div id="cardelContainer">
                    <p id="leftTittle" className="tittleMap">My</p>
                    <DirectionCartelIcon className="cartelAbout"></DirectionCartelIcon>
                    <p id="rightTittle" className="tittleMap">Path</p>
                </div>
                <div id="lineContainer">
                    <DateUp Date="2011 - 2014" delayTime={350}></DateUp>
                    <DateDown Date="2014 - 2017" delayTime={700}></DateDown>
                    <DateUp Date="2017 - 2021" delayTime={1050}></DateUp>
                    <DateDown Date="2016 - 2017" delayTime={1400}></DateDown>
                    <DateUp Date="2020 - 2021" delayTime={1750}></DateUp>
                    <DateDown Date="2021 - 2021" delayTime={2050}></DateDown>
                    <div id="lineWrap">
                        <div ref={line2} id="line" className="hidde"></div>
                    </div>
                    <EventUp id="event1" eventName="CBTC" secondaryName="programming technician" delayTime={350}></EventUp>
                    <EventDown id="event2" eventName="UTA" secondaryName="advanced technician" delayTime={700}></EventDown>
                    <EventUp id="event3" eventName="UTA" secondaryName="engineering graduate IT" delayTime={1050}></EventUp>
                    <EventDown id="event4" eventName="Capgemini" secondaryName="Developer and consultor" delayTime={1400}></EventDown>
                    <EventUp id="event5" eventName="Arkus Nexus" secondaryName="Web Developer - Fontend" delayTime={1750}></EventUp>
                    <EventDown id="event6" eventName="Capgemini" secondaryName="QA - Tester" delayTime={2050}></EventDown>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;