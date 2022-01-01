import "./Event.scss"

export function EventUp(props) {
    return (
        <div className="eventGrid">
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
    return (
        <div className="eventGrid">
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
