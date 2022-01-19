import { useRef } from "react";
import { Fade } from "react-reveal";
import "./Buttons.scss"

function Butons() {

    let deform1 = useRef();
    let deform2 = useRef();
    let deform3 = useRef();
    let deform4 = useRef();

    let deform1HandleClick = () => {
        if (deform1.current.classList.contains("deform1Off")) {
            deform1.current.classList.replace("deform1Off", "deform1On");
        } else {
            deform1.current.classList.replace("deform1On", "deform1Off");
        }
    }

    let deform2HandleClick = () => {
        if (deform2.current.classList.contains("deform2Off")) {
            deform2.current.classList.replace("deform2Off", "deform2On");
        } else {
            deform2.current.classList.replace("deform2On", "deform2Off");
        }
    }

    let deform3HandleClick = () => {
        if (deform3.current.classList.contains("deform3Off")) {
            deform3.current.classList.replace("deform3Off", "deform3On");
        } else {
            deform3.current.classList.replace("deform3On", "deform3Off");
        }
    }

    let deform4HandleClick = () => {
        if (deform4.current.classList.contains("deform4Off")) {
            deform4.current.classList.replace("deform4Off", "deform4On");
        } else {
            deform4.current.classList.replace("deform4On", "deform4Off");
        }
    }

    return (
        <div id="ButtonsContainer">
            <Fade bottom>
                <div className="PracticeWrapp">
                    <p className="ExperimentTittle">Slides</p>
                    <div className="buttonsWrap">
                        <button className="Button1" id="Slide1">Left</button>
                        <button className="Button1" id="Slide4">Up</button>
                        <button className="Button1" id="Slide2">Right</button>
                        <button className="Button1" id="Slide3">Down</button>
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="separator"></div>
            </Fade>
            <Fade bottom>
                <div className="PracticeWrapp">
                    <p className="ExperimentTittle" id="underlineTittle">Underlines</p>
                    <div className="buttonsWrap">
                        <div className="button2Wrap">
                            <button className="button2" id="underLine1">Left</button>
                        </div>
                        <div className="button2Wrap">
                            <button className="button2" id="underLine2">expand</button>
                        </div>
                        <div className="button2Wrap">
                            <button className="button2" id="underLine3">Right</button>
                        </div>
                    </div>
                </div>
            </Fade>
            <div className="separator"></div>
            <Fade bottom>
                <div className="PracticeWrapp">
                    <p className="ExperimentTittle">Deform</p>
                    <div className="buttonsWrap">
                        <div ref={deform1} onClick={deform1HandleClick} id="deform1" className="button3Wrap deform1Off">
                            <div className="button3"></div>
                        </div>
                        <div ref={deform2} onClick={deform2HandleClick} id="deform2" className="button3Wrap deform2Off">
                            <div className="button3"></div>
                        </div>
                        <div ref={deform3} onClick={deform3HandleClick} id="deform3" className="button3Wrap deform3Off">
                            <div className="button3"></div>
                        </div>
                        <div ref={deform4} onClick={deform4HandleClick} id="deform4" className="button3Wrap deform4Off">
                            <div className="button3"></div>
                        </div>
                    </div>
                </div>
            </Fade>
            <div className="separator"></div>
        </div>
    );
}

export default Butons;