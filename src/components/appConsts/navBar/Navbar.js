import { useRef } from "react";

import "./Navbar.scss";

function Navbar(){

    const navRef = useRef();

    const toggleMenuShow = (e) => {
        if(e.currentTarget.classList.contains("hamburguerBtn")){
            e.currentTarget.classList.replace("hamburguerBtn","closeBtn")
            navRef.current.classList.replace("closedMenu","openMenu")
        }else{
            if(e.currentTarget.classList.contains("closeBtn")){
                e.currentTarget.classList.replace("closeBtn","hamburguerBtn")
                navRef.current.classList.replace("openMenu","closedMenu")
            }
        }
    }

    return(
        <nav ref={navRef} className="closedMenu">
            <div id="logoContainer">
                <p id="logo">Portfolio</p>
                <p id="logoHover">Portfolio</p>
            </div>  
            <div id="menuButton" className="hamburguerBtn" onClick={toggleMenuShow}>
                <div className="lineBtn"></div>
            </div>
            <div className="test">

            </div>
        </nav>
    );
}

export default Navbar;