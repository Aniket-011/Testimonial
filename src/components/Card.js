import React from 'react'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa';


function Card(props) {

  let review = props.review
  return (
    <div className='flex flex-col md:relative'>

      <div className='absolute top-[-7rem] z-[10] mx-auto'>
        <img className ="rounded-full w-[140px] h-[140px]aspect-square z-[25]" src = {review.image}></img>
        <div className='w-[140px] h-[140px] absolute top-[-6px] z-[-10] left-[10px] bg-violet-500 rounded-full'></div>
    </div>

      <div className='text-center mt-7'>
        <p className=' tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
      </div>

      <div className='text-center'>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>

      <div className='text-violet-400 mt-5 mx-auto'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

      <div className='text-violet-400 mt-5 mx-auto'>
        <FaQuoteRight/>
      </div>

    </div>
  )
}

export default Card
