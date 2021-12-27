import React from "react";
import "./Header.scss";
import Profile from "../../../img/Profile.jpg";
import Fade from 'react-reveal/Fade';
import { GitIcon, SassIcon, ReactIcon, JsIcon, NpmIcon, GitHubIcon } from "../../../components/appConsts/icons/Icons"
import { NavLink } from "react-router-dom";

function Headers() {
    return (
        <header>
            <div id="headerContent">
                <div id="leftSideHeader">
                    <Fade bottom>
                        <div>
                            <p id="tittleIdPage1">{"Font-end Developer"}</p>
                            <h1 id="tittleIdPage2">{"Armando Hernandez Rivera"}</h1>
                            <div id="Tittle-Line"></div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <p id="headerDesc">Hi i'm Armando, i love design and create awesome web pages,
                            I specialize in front-end development and i always want to learn new design techniques and technologies to improve my skills.</p>
                        <NavLink to={"/About"}>
                            <div id="headerButtonWrap">
                                <button id="headerButton">About me!</button>
                            </div>
                        </NavLink>
                    </Fade>
                </div>
                <div id="rightSideHeader">
                    <Fade right>
                        <div id="imgWrap">
                            <img id="profileImg" alt="Armando Hernandez Rivera" src={Profile}></img>
                        </div>
                    </Fade>
                </div>
                <Fade bottom>
                    <div id="headerBotton">
                        <div id="headerBottonContent">
                            <div id="leftLeftFooterSide">
                                <p>Core technologies...</p>
                            </div>
                            <div id="rigthLeftFooterSide">
                                <Fade>
                                    <div id="headerFooterIconsWrap">
                                        <JsIcon className={"navBarFooterIcon"}></JsIcon>
                                        <SassIcon className={"navBarFooterIcon"}></SassIcon>
                                        <ReactIcon className={"navBarFooterIcon"}></ReactIcon>
                                        <GitHubIcon className={"navBarFooterIcon"}></GitHubIcon>
                                        <NpmIcon className={"navBarFooterIcon"}></NpmIcon>
                                        <GitIcon className={"navBarFooterIcon"}></GitIcon>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </header>
    );
}

export default Headers;