import React from "react";
import "./Home.scss";
import Profile from "../../img/Profile.jpg";
import Fade from 'react-reveal/Fade';

function Home() {
    return (
        <div id="homePage">
            <header>
                <div id="headerContent">
                    <div id="leftSideHeader">
                        <Fade left>
                            <div>
                                <p id="tittleIdPage1">{"Font-end Developer"}</p>
                                <h1 id="tittleIdPage2">{"Armando Hernandez Rivera"}</h1>
                                <div id="Tittle-Line"></div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <p id="headerDesc">Descripcion mamalonamente mamalosuki de placeholder en lo que se me ocurre que escribir,
                                skfhskfjhskfdhkfh relleno, patas, mondongo, puto el que lo lea jsjsj</p>
                            <div id="headerButtonWrap">
                                <button id="headerButton">About me!</button>
                            </div>
                        </Fade>
                    </div>
                    <Fade right>
                        <div id="rightSideHeader">
                            <div id="imgWrap">
                                <img id="profileImg" src={Profile}></img>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div id="headerBotton">
                            <div id="headerBottonContent">
                                q
                            </div>
                        </div>
                    </Fade>
                </div>
            </header>
        </div>
    );
}

export default Home;