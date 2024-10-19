import React from 'react'

function Quote() {
  return (
    <div className='bg-[#c4c4c4] bg-opacity-15 p-4 rounded-3xl md:w-[700px] sm:w-[500px] w-[360px] absolute left-[50%] translate-x-[-50%] md:bottom-80 sm:bottom-[350px] bottom-[370px] duration-200'>
      <div className='bg-[#17C2EC] rounded-3xl  text-center md:py-16 sm:py-12 py-8 w-full'>
        <h1 className='font-sans font-bold md:text-[48px] sm:[36px] text-[30px] text-white mb-2 duration-200 '>Get a quote</h1>
        <p className='font-sans  sm:text-[18px] text-[16px] text-white mb-6'>Please do enter your email address below</p>
        <input type="text" className=' sm:w-[350px] w-[230px] pl-6 py-3 rounded-l-3xl  placeholder:text-black placeholder-opacity-25  outline-none  duration-200  text-black ' placeholder='lenux.ng@gmail.com'  />
        <img src="images/Group 76.png" alt="" className='w-[69px] inline-block'/>
      </div>
    </div>
  )
}

export default Quote
