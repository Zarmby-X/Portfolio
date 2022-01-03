import "./Event.scss"
import { useRef } from "react";

export function EventUp(props) {

    let eventAppears = useRef(null);

    setTimeout(() => {
        eventAppears.current.classList.replace("hidde","inAnimation")
    }, props.delayTime);

    return (
        <div id={props.id} ref={eventAppears} className="eventGrid hidde">
            <div className="eventContainer">
                <p className="eventTittle">{props.eventName}</p>
                {props.secondaryName ? <p className="eventAchivement">{props.secondaryName}</p> : null}
            </div>
            <div className="lineBranchUp">
                <div className="underStickLine"></div>
                <div className="stickLine"></div>
                <div className="pointLine"></div>
            </div>
        </div>
    );
}

export function EventDown(props) {

    let eventAppears = useRef(null);

    setTimeout(() => {
        eventAppears.current.classList.replace("hidde","inAnimation")
    }, props.delayTime);

    return (
        <div id={props.id} ref={eventAppears} className="eventGrid hidde">
            <div className="lineBranchDown">
                <div className="pointLine"></div>
                <div className="stickLine"></div>
                <div className="underStickLine"></div>
            </div>
            <div className="eventContainer">
                <p className="eventTittle">{props.eventName}</p>
                {props.secondaryName ? <p className="eventAchivement">{props.secondaryName}</p> : null}
            </div>
        </div>
    );
}

export function DateUp(props){

    let dateAppears = useRef(null);

    setTimeout(() => {
        dateAppears.current.classList.replace("hidde","inAnimation")
    }, props.delayTime);

    return(
        <div ref={dateAppears} className="dateContainerUp hidde">
            <p className="date">{props.Date}</p>
        </div>
    );
}


export function DateDown(props){
    let dateAppears = useRef(null);

    setTimeout(() => {
        dateAppears.current.classList.replace("hidde","inAnimation")
    }, props.delayTime);

    return(
        <div ref={dateAppears} className="dateContainerDown hidde">
            <p className="date">{props.Date}</p>
        </div>
    );
}

