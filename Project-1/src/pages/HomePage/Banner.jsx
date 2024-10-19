import React from 'react'

import Header from './Header'

function Banner() {
  return (
  <div className='w-full mb-6'>
     <div className='bg-[url("/images/unsplash_SfDofjXtxHE.png")] bg-no-repeat bg-center bg-cover min-h-screen'>  
        <Header/>
        <div>
          {/* Banner */}
          <div className='md:px-12 px-6 pt-20 flex justify-between items-center  flex-wrap relative md:gap-0 gap-6  '>
            {/* left-side */}
            <div>
              <p className='text-[#17C2EC] lg:text-[24px] md:text-[20px] text-[16px] font-sans mb-6 font-bold duration-200 '>Get Vaccinated. Boost your Immune System</p>
              <h1 className='text-white lg:text-[48px] md:text-[36px] sm:text-[30px] text-[24px]  font-sans font-extrabold leading-tight mb-6 duration-200 '>COVID-19 Vaccination <br /> Got Easier With,<br /> <span className='text-[#17C2EC]'>Vaccination.ng</span></h1>
              <p className='text-white opacity-50 font-sans font-bold lg:text-[24px] md:text-[20px] text-[16px] mb-6 duration-200  ' >Vaccination.ng will help you find the nearest <br /> centre for vaccination, in all 36 states in Nigeria.</p>
              <div>
                <button className='sm:px-6 px-8 py-3 sm:rounded-xl rounded-full border mr-5 mb-6 bg-[#17C2EC] text-white font-sans font-bold md:text-[24px] sm:text-[20px] text-[16px]   border-[#17C2EC] 
                  duration-200 hover:bg-none
                '>Get Vaccine</button>
                <button className='sm:px-6 px-8 py-3 sm:rounded-xl rounded-full border text-white font-sans font-bold md:text-[24px] sm:text-[20px] text-[16px] border-[#17C2EC]
                  duration-200 hover:bg-[#17C2EC]
                '>Help Center</button>
              </div>
            </div>
            <div>
              {/* right-side */}
              <div className='relative w-500px  sm:px-10 px-4 sm:mr-17  md:mt-0 mt-6 duration-200 '>
                <img src="images/unsplash_wnSEwHMhxho.png" alt="" 
                className='lg:w-[500px] lg:h-[500px] md:w-[450px] md:h-[450px] sm:w-[400px] sm:h-[400px] w-[330px] h-[330px] duration-200 '
                />
                <img src="images/Group 17.png" alt="" 
                  className='absolute top-[50%] sm:left-[-8px] left-[-22px] translate-y-[-50%] sm:w-24 w-20 duration-200 '                
                />
                <img src="images/Group 18.png" alt="" 
                  className='absolute top-[50%] translate-y-[-50%] sm:w-24 w-20 right-[-20px] duration-200 '
                />
                <div className=' px-4 py-2 flex gap-2 items-center rounded-xl bg-[#C4C4C4] bg-opacity-20 absolute bottom-[-30px] left-[-4px]'>
                <img src="images/Group 20.png" alt=""
                 className='sm:w-32 w-24 duration-200 '
                />
                <p className='text-white text-[18px] leading-tight font-sans font-bold'>20+ <br /><span className='text-[#17C2EC]'>Specialists</span></p>
                </div>
              </div>
            </div>
          </div> 
          {/* Banner-end */}
          <div className='sm:px-12 px-6'>
            <div className='flex gap-4 items-center md:mt-5 sm:mt-10 mt-20  '>
            <img src="images/Group 5.png" alt="" className='w-[36px] ' />
            <p className='text-white font-sans text-[18px] font-bold'>Schedule your Vaccination</p>
            </div>
            <div className='pt-2 bg-[#C4C4C4] bg-opacity-10 rounded-t-lg sm:mt-0  mt-10 '  >
              <div className='px-8 py-8 sm:pb-0 pb-3  bg-[#C4C4C4] bg-opacity-5 rounded-t-xl  sm:flex sm:justify-between sm:items-center sm:flex-wrap sm:gap-6' >
                <div className='flex items-center gap-4 mb-6'>
                  <img src="images/Group 6.png" alt="" className='w-[36px] object-cover'/>
                  <div className='leading-tight'>
                  <p className='text-white font-semibold font-sans text-[16px] opacity-50'>Location</p>
                  <p className='text-white font-semibold font-sans text-[16px] '>Ikeja Lagos, Nigeria</p>
                  </div>
                </div>
                <div className='flex items-center gap-4 mb-6'>
                  <img src="images/Group 7.png" alt="" className='w-[36px] object-cover'/>
                  <div className='leading-tight'>
                  <p className='text-white font-semibold font-sans text-[16px] opacity-50'>Date</p>
                  <p className='text-white font-semibold font-sans text-[16px] '>10 October, 2024</p>
                  </div>
                </div>
                <div className='flex items-center gap-4 mb-6'>
                  <img src="images/Group 9.png" alt="" className='w-[36px] object-cover'/>
                  <div className='leading-tight'>
                  <p className='text-white font-semibold font-sans text-[16px] opacity-50'>Vaccine Type</p>
                  <p className='text-white font-semibold font-sans text-[16px] '>Mordena</p>
                  </div>
                </div>
              <button className='md:px-3 px-14  md:ml-20 mb-6 py-2 rounded-xl bg-[#17C2EC] text-white font-bold font-sans text-[18px]'>Submit</button>
              </div>
            </div>
          </div>
        </div>
   </div>
  </div>
  )
}

export default Banner
