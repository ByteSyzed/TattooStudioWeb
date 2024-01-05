import React, { useState, useEffect } from 'react';
import { animated, useTransition } from '@react-spring/web';
import images from "../../constants/images";
import "./imageSlider.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const ImageSlider = ({currentSlide, slides}) => {
  const currentIndex = slides.findIndex(slide => slide.id === currentSlide.id);
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  const handleSliderClick = (e) => {
    e.stopPropagation();
  };


  // Transitions
  const transitions = useTransition(slides[index], {
    key: slides[index].id,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 120 },
  });

  // Go to the next slide
  const increment = () => setIndex((state) => (state + 1) % slides.length);

  // Go to the previous slide
  const decrement = () => setIndex((state) => (state - 1 + slides.length) % slides.length);

  return (
    <div className="slider" onClick={handleSliderClick}>
      {transitions((style, item) => (
        <animated.img
          style={{ ...style, position: 'absolute' }} 
          src={item.url}
          alt={`slide-${item.id}`}
        />
      ))}
      <button className="slider-button prev" onClick={decrement}>
        <BsChevronLeft />
      </button>
      <button className="slider-button next" onClick={increment}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
