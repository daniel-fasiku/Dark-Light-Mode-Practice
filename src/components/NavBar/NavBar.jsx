import NavLogo from "../../assets/react.svg";
import { MdLightMode } from "react-icons/md";
import "./NavBar.css";

const NavBar = ({colorMode, handleDarkModeSwitch}) => {
    return (
        <nav className={colorMode? 'nav-bar-container-dark-mode' : 'nav-bar-container'}>
            <div className="nav-section1">
                <img src={NavLogo} alt="nav-logo" className="nav-bar-logo" />
                <h1 className="nav-section1-text">React Facts</h1>
            </div>
            <div className="nav-section2">
                <p className={colorMode? "nav-section2-text1-dark-mode" : "nav-section2-text1"}>Light</p>
                <div onClick={handleDarkModeSwitch} className={colorMode? "color-slider-container-dark-mode" : "color-slider-container"}>
                    <div className={colorMode? "circle-button-dark-mode" : "circle-button"}></div>
                </div>
                <p className={colorMode? "nav-section2-text2-dark-mode" : "nav-section2-text2"}>Dark</p>
            </div>
        </nav>
    )
}

export default NavBar