import { useRef } from "react";
import "./Navbar.scss";
import NavBarContent from "./navBarContent/NavBarContent";

function Navbar() {

    const navRef = useRef();
    const InfoIcons = useRef();

    const toggleMenuShow = (e) => {
        if (e.currentTarget.classList.contains("hamburguerBtn")) {
            e.currentTarget.classList.replace("hamburguerBtn", "closeBtn")
            navRef.current.classList.replace("closedMenu", "openMenu")
            InfoIcons.current.classList.replace("navInfoHidden", "navInfoShow")
        } else {
            if (e.currentTarget.classList.contains("closeBtn")) {
                e.currentTarget.classList.replace("closeBtn", "hamburguerBtn")
                navRef.current.classList.replace("openMenu", "closedMenu")
                InfoIcons.current.classList.replace("navInfoShow", "navInfoHidden")
            }
        }
    }

    return (
        <div id="navbarContainer">
            <nav ref={navRef} className="closedMenu">
                <div id="logoContainer">
                    <p id="logo">Portfolio</p>
                    <p id="logoHover">Portfolio</p>
                </div>
                <div id="menuButton" className="hamburguerBtn" onClick={toggleMenuShow}>
                    <div className="lineBtn"></div>
                </div>
                <NavBarContent InfoIconsRef={InfoIcons}></NavBarContent>
            </nav>
        </div>
    );
}

export default Navbar;