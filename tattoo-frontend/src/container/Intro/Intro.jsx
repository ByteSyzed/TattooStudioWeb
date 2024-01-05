import React from "react";

import images from "../../constants/images";
import "./Intro.css";
import { SubHeading, HeroSection } from "../../components";
import { animated, useSpring, useTrail, useTransition } from '@react-spring/web';
import ImageSlider from "../../components/ImageSlider/imageSlider";
import PinBoard from "../../components/PinBoard/PinBoard";



const Intro = () => {
    const fade = useSpring({
        from: { opacity: 0, marginTop: -500 },
        to: { opacity: 1, marginTop: 0 },
        delay: 1000,
    });

    return (
        <animated.div style={fade} className="app__intro app__wrapper section__padding" id="home">
            <HeroSection />
            <PinBoard />

        {/*
            <div className="app__wrapper_info">
                <SubHeading title="Tester Text texttie"/>
                <h1 className="app__intro-h1">Cute Anime Tattoos</h1>
                <p className="p__opensans" style={{margin:'2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quos.</p>
                <button type="button" className="custom__button">Book Now</button>
            </div>
        */}
        
        </animated.div>
    );
};

export default Intro;