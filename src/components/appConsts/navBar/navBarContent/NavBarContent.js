import "./navBarContent.scss"

function NavBarContent(){
    return(
        <div id="navMenuWrap">
            <ul>
                <li><p className="NavOptionText">Home</p></li>
                <li><p className="NavOptionText">About</p></li>
                <li><p className="NavOptionText">Proyects</p></li>
                <li><p className="NavOptionText">Contact</p></li>
            </ul>
        </div>
    );
}

export default NavBarContent;