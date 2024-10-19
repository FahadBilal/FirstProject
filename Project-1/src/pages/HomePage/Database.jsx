import React from 'react'

function Database() {
  return (
    <div className='bg-[url("/images/unsplash_SfDofjXtxHE.png")] bg-no-repeat bg-center bg-cover  sm:px-12 px-6 py-12 duration-200'>  
      <div className=' bg-[#c4c4c4] bg-opacity-5 rounded-xl md:h-[330px] h-[400px] duration-200 '>
        <div className='w-full bg-[#c4c4c4] bg-opacity-10 rounded-t-xl duration-200 '>
            <p className='md:py-6 md:px-24 text-white md:text-[24px] sm:text-[20px] text-[16px] font-sans font-bold py-1 duration-200 md:text-left text-center '>Check your COVID-19 result on our Database</p>
        </div>
        <div className='md:mt-12 mt-6 md:px-24 px-6 md:flex md:justify-between md:items-center md:gap-4 duration-200'>
            <input type="text" className='md:w-[465px] w-full md:mb-0 mb-5 pl-6 py-3 rounded-xl placeholder:text-white  outline-none border-2 border-[#17C2EC] duration-200   bg-[#c4c4c4] bg-opacity-0 text-white ' placeholder='Okeowo'  />
            <input type="text" className='md:w-[465px] w-full md:mb-0 mb-5 pl-6 py-3 rounded-xl placeholder:text-white  outline-none border-2 border-[#fff] border-opacity-50 duration-200 placeholder-opacity-50 bg-[#c4c4c4] text-white bg-opacity-0 ' placeholder='NIK Number'  />
            <button className='bg-[#c4c4c4] bg-opacity-5 rounded-xl sm:px-10 px-16 duration-200 py-2 text-[#17C2EC] border-2 border-[#17C2EC] font-sans font-bold text-[20px]'>Check</button>
        </div>
        <div className='md:px-24 px-6 mt-12 duration-200'>
          <p className='bg-[#c4c4c4] duration-200 bg-opacity-10 rounded-xl px-2  sm:py-3 py-2 text-center text-[#17C2EC] font-sans font-semibold md:text-[20px] sm:text-[18px] text-[16px]'>Need a certificate for your COVID-19 result? Please click <button className=' underline'>here</button></p>
        </div>

      </div>
    </div>
  )
}

export default Database
