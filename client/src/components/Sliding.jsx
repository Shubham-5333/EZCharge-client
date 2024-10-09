import React, { useState } from 'react';
import { FaCircleArrowRight, FaCircleArrowLeft } from 'react-icons/fa6';

const Sliding = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className='overflow-hidden relative w-full'>
      {/* The slide container */}
      <div 
        className='flex transition ease-out duration-500'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <img
            key={index} // Always add a unique key when mapping
            src={s}
            className='w-full flex-shrink-0 rounded-[30px]'
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className='absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl'>
        <button onClick={previousSlide}>
          <FaCircleArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <FaCircleArrowRight />
        </button>
      </div>

      <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
       {slides.map((s,i)=>{
         return (
          <div onClick={()=>setCurrent(i)} key={"circle" + i} className={`rounded-full w-5 h-5 cursor-pointer ${i==current?'bg-white':'bg-gray-400'}`}></div>
         )
       })}
      </div>
    </div>
  );
};

export default Sliding;
