import React, { useState } from 'react';
import { animated, useTransition } from '@react-spring/web';
import images from "../../constants/images";
import "./PinBoard.css";
import Masonry from 'react-masonry-css';
import ImageSlider from "../../components/ImageSlider/imageSlider";
import {IoCloseCircle} from "react-icons/io5";



const slides = [
    { id: 0, url: images.halloween_flash1 },
    { id: 1, url: images.halloween_flash2},
    { id: 2, url: images.sushi_cat_flash },
    { id: 3, url: images.howl_flash1 },
  ];

function getRandomRotation() {
    return Math.random() * 30 -15; }


const ImageCard = ({ src, onClick }) => {

    const rotation = getRandomRotation();

    const style = {
        transform: `rotate(${rotation}deg)`,
      };

    return(
        <div className="image-card" style={style} onClick={onClick}>
            <img src={src} alt="slide" />
        </div>
    );
};

// Function to generate a random position
function getRandomPosition(element) {
    const x = window.innerWidth - element.clientWidth;
    const y = window.innerHeight - element.clientHeight;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX,randomY];
}

// Function to generate a random size based on the number of images
function getRandomSize(numImages) {
    const size = Math.max(50, 200 - numImages); // Assuming 200 is the max size and 50 is the min size
    return size;
}

// Apply random positions and sizes to images
const imagesFit = document.querySelectorAll('.image-card img'); // Select all images
imagesFit.forEach((img, index, arr) => {
    const [randomX, randomY] = getRandomPosition(img);
    img.style.left = `${randomX}px`;
    img.style.top = `${randomY}px`;

    const size = getRandomSize(arr.length);
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
});


const PinBoard = () => {
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(null);

    const handleImageClick = (slide) => {
        setCurrentSlide(slide);
        setIsSliderOpen(true);
    };

    const closeSlider = () => {
        setIsSliderOpen(false);
        setCurrentSlide(null);
    };

        
    const breakpointColumnsObj = {
        default: 3,
        1100: 3, 
        700: 2,
        500: 1
    };

    return (
        <div className='pin-board'>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonary-grid"
                columnClassName="masonry-grid_column">
                {slides.map((slide, index) => {
                    const rotation = getRandomRotation(); // Declare 'rotation' here
                    return(
                        <div
                            key={index} 
                            onClick={() => handleImageClick(slide)}>
                            <img src={slide.url} alt="slide" style={{width:'100%', display:"block", transform: `rotate(${rotation}deg)`}}/> 
                        </div>
                    );
                })}
            </Masonry>

            {isSliderOpen && currentSlide && (
                <div className='enlarged-image-overlay' onClick={closeSlider}>
                    <div className='enlarged-image-container'>
                        <ImageSlider currentSlide={currentSlide} slides={slides} alt="test_slide"/>
                        <button className='close-enlarged-image'>
                            <IoCloseCircle size={30} onClick={closeSlider} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default PinBoard;
