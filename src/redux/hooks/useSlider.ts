
import { useState } from 'react';



export interface Slider{
    country?:string
    avatar?:string|null
    name?:string;
    text?:string
    count?:number
}


export const useSlider = (slider:Slider[],count:number) => {
  
  const [activeSlide, setActiveSlide] = useState(0);


   const handlePrevClick = () => {
    setActiveSlide((prev)=>prev-1);
    if(activeSlide>count){
        setActiveSlide(1)
    }
    if(activeSlide===1){
        setActiveSlide(count)
    }
  };

   const handleNextClick = () => {
    setActiveSlide((prev)=>prev+1);
    if(activeSlide>count||activeSlide===count){
        setActiveSlide(1)
    }

  };
    return { handleNextClick, handlePrevClick, slider,activeSlide};

  };
