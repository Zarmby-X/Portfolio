import { useEffect } from "react";
import "./About.scss"
import Experience from "./experience/Experience";
import TimeLine from "./timeLine/TimeLine";

function About(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return(
        <div>
            <TimeLine></TimeLine>
            <Experience></Experience>
            
        </div>
    );
}

export default About;