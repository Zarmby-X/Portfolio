import { useEffect } from "react";
import "./About.scss"
import Experience from "./experience/Experience";
import TimeLine from "./timeLine/TimeLine";
import History from "./history/History";

function About(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return(
        <div>
            <TimeLine></TimeLine>
            <Experience></Experience>
            <History></History>
        </div>
    );
}

export default About;