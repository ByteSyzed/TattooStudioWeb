import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className = "app__navbar">
            <div className = "app__navbar-logo">
                <img src = {images.main_logo} alt = "app logo" />
            </div>
            <ul className = "app__navbar-links">
                <li className = "p__opensans"><a href="#intro">Intro</a></li>
                <li className = "p__opensans"><a href="#about">About</a></li>
                <li className = "p__opensans"><a href="#gallery">Gallery</a></li>
                <li className = "p__opensans"><a href="#contact">Contact</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">Log In / Registration</a>
                <div />
                <a href="/" className="p__opensans">Book Slot</a>
            </div>

            <div className = "app__navbar-smallscreen">
                <GiHamburgerMenu color = "#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                    <div className = "app__navbar-smallscreen_overlay flex_center slide-bottom">

                        <VscChromeClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href="#intro" onClick={() => setToggleMenu(false)}>Intro</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
                            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};
export default Navbar;