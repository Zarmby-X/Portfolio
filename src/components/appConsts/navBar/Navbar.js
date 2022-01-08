import { useRef,useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import NavBarContent from "./navBarContent/NavBarContent";
import { useLocation } from 'react-router-dom';

function Navbar() {

    const navRef = useRef();
    const navBtnRef = useRef();
    const InfoIcons = useRef();
    const location = useLocation();
    const [showNavElements,setShowNavElements] = useState(null);

    const toggleMenuShow = () => {
        if (navBtnRef.current.classList.contains("hamburguerBtn")) {
            navBtnRef.current.classList.replace("hamburguerBtn", "closeBtn")
            navRef.current.classList.replace("closedMenu", "openMenu")
            InfoIcons.current.classList.replace("navInfoHidden", "navInfoShow")
            setShowNavElements(true);
        } else {
            if (navBtnRef.current.classList.contains("closeBtn")) {
                navBtnRef.current.scrollIntoView(false)
                navBtnRef.current.classList.replace("closeBtn", "hamburguerBtn")
                navRef.current.classList.replace("openMenu", "closedMenu")
                InfoIcons.current.classList.replace("navInfoShow", "navInfoHidden")
                setShowNavElements(false);
            }
        }
    }

    const toggleLogoFunction = () => {
        if (navBtnRef.current.classList.contains("closeBtn")) {
            navBtnRef.current.classList.replace("closeBtn", "hamburguerBtn")
            navRef.current.classList.replace("openMenu", "closedMenu")
            InfoIcons.current.classList.replace("navInfoShow", "navInfoHidden")
        }
    }

    return (
        <div id="navbarContainer" className={location.pathname === "/NotFound" ? "hidde" : null}>
            <nav ref={navRef} className="closedMenu">
                <div id="logoContainer" onClick={toggleLogoFunction}>
                    <NavLink to={"/Portfolio/"}>
                        <p id="logo">Portfolio</p>
                        <p id="logoHover">Portfolio</p>
                    </NavLink>
                </div>
                <div ref={navBtnRef} id="menuButton" className="hamburguerBtn" onClick={toggleMenuShow}>
                    <div className="lineBtn"></div>
                </div>
                <NavBarContent
                    InfoIconsRef={InfoIcons}
                    toggleMenuShow={toggleMenuShow}
                    showNavElements = {showNavElements}
                ></NavBarContent>
            </nav>
        </div>
    );
}

export default Navbar;