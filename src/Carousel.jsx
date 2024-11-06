import React from "react";
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
  }, [props.offset]);

  const handleSlideChange = (index) => {
    setGoToSlide(index);
  };
  let handlePrevious=()=>{
    setGoToSlide((sajib)=>(sajib-1+cards.length)%cards.length)
    
  }
  let handleNext=()=>{
    setGoToSlide((sajib)=>(sajib+1) % cards.length)
  }

  return (
    <div 
      style={{ width: props.width, height: props.height, margin: props.margin }}
      className="relative"
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        animationConfig={config.gentle}
      />
     <div onClick={handlePrevious}
        className="absolute top-1/2 left-[60px] transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-700 transition">+</div>

      
      <div onClick={handleNext}
        className="absolute top-1/2 right-[60px] transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-700 transition">-</div>
    </div>
  );
}
