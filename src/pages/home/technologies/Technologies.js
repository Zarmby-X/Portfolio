import "./Technologies.scss"
import { GitIcon, SassIcon, ReactIcon, JsIcon, JQueryIcon, NodeJSIcon, NpmIcon, CssIcon, HtmlIcon, GitHubIcon, MysqlNameIcon, BootStraoIcon, PythonIcon } from "../../../components/appConsts/icons/Icons"
import { Fade } from "react-reveal";


function Technologies() {
    return (
        <div id="TechnologiesContainer">
            <div id="TechnologiesContent">
                <div id="TechnologiesTittles">
                    <Fade bottom>
                        <p id="TechnologiesTittle">Work Tools</p>
                        <div id="TittleSeparator"></div>
                        <div id="TechnologiesDescContainer">
                            <p id="TechnologiesDesc">This are a some technologies that i used in projects,
                                practices or that i studied with general knowledge in different courses and documentation to improve my Skills
                                and have diferent solutions to problems.</p>
                        </div>
                    </Fade>
                </div>
                <div id="iconsWrap">
                    <div id="TechnologiesIcons">
                        <Fade bottom>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <GitIcon className="technologiesIcon"></GitIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">Git</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <SassIcon className="technologiesIcon"></SassIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">Sass</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <ReactIcon className="technologiesIcon"></ReactIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">React</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <JsIcon className="technologiesIcon"></JsIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">Javascript</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <MysqlNameIcon className="technologiesIcon"></MysqlNameIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">Mysql</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <NodeJSIcon className="technologiesIcon"></NodeJSIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">Node JS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <NpmIcon className="technologiesIcon"></NpmIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">npm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <HtmlIcon className="technologiesIcon"></HtmlIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">HTML</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <CssIcon className="technologiesIcon"></CssIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">CSS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <BootStraoIcon className="technologiesIcon"></BootStraoIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">Bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <JQueryIcon className="technologiesIcon"></JQueryIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">JQuery</p>
                                    </div>
                                </div>
                            </div>
                            <div className="technologiesIconWraper">
                                <div className="iconContainer">
                                    <PythonIcon className="technologiesIcon"></PythonIcon>
                                    <div className="technologieMessageWrap">
                                        <p className="technologieMessage">Python</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;