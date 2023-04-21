import React, { useState } from 'react'
import Card from './Card'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'



function Testimonial(props) {


  let reviews = props.reviews

  const[index, setIndex] = useState(0);

  function leftShiftHandler(){
    if(index-1>0){
      setIndex(reviews.length-1);
    }
    else
    setIndex(index-1);

  }

  function rightShiftHandler(){
    if(index + 1 >=reviews.length){
      setIndex(0)
    }
    else
    setIndex(index+1);

  }

  function surpriseHandler(){
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="w-[85vw] md:w-[700px] mx-auto bg-white flex flex-col justify-center items-center transition-all duration-700 mt-10 p-10 hover:shadow-xl rounded-md">
      <Card review = {reviews[index]} />

      <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center items-center'>

        <button onClick={leftShiftHandler}
        className='cursor-pointer hover: text-violet-500'>
          <FiChevronLeft/>
        </button>

        <button onClick={rightShiftHandler}
         className='cursor-pointer hover: text-violet-500'>
          <FiChevronRight/>
        </button>
      </div>

      <button onClick={surpriseHandler}
      className='bg-violet-400 hover: bg-violet-500 cursor-pointer rounded-md text-center capitalize px-[11px] py-[9px] w-[150px] mx-auto mt-[25px] font-bold text-lg text-white'>surprise me</button>

    </div>
  )
}

export default Testimonial
