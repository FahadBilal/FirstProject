import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[url("/images/unsplash_SfDofjXtxHE.png")] bg-no-repeat bg-center bg-cover px-12 h-[500px]'>  
      <div className='flex md:flex-row flex-col md:justify-between justify-end md:items-end md:py-8 sm:h-[400px] h-[450px] md:gap-0 gap-6'>

            <h2 className='font-bold text-[32px] leading-3 font-sans text-[#ffffff]  relative after:content-[""] after:block after:sm:w-20 w-8 after:h-[3px] after:bg-[#17C2EC] after:mt-4 after:rounded-full'>
            Vaccination.ng
             </h2>
            <div>
                    <ul className={`sm:flex sm:gap-7 sm:items-center  duration-700 transition-all ease-in-out 
                        `}>
                    <li className='mb-3 sm:mb-0'>
                         <NavLink
                            to="/"
                                className={({isActive}) =>
                                `text-white lg:text-[24px] text-[20px]  font-sans  duration-200 ${isActive?"opacity-100 font-bold":"opacity-50"}`
                               }
                                 >
                            Home
                        </NavLink>            
                    </li>
                    <li className='mb-3 sm:mb-0'>
                         <NavLink
                            to="/service"
                                className={({isActive}) =>
                                    `text-white lg:text-[24px] text-[20px]  font-sans  duration-200 ${isActive?"opacity-100 font-bold":"opacity-50"}`
                            }
                                 >
                            Services
                        </NavLink>            
                    </li>
                    <li className='mb-3 sm:mb-0'>
                         <NavLink
                            to="/sechedule"
                                className={({isActive}) =>
                                    `text-white lg:text-[24px] text-[20px]  font-sans  duration-200 ${isActive?"opacity-100 font-bold":"opacity-50"}`
                            }
                                 >
                            Schedule
                        </NavLink>            
                    </li>
                    <li className='mb-3 md:mb-0'>
                         <NavLink
                            to="/contact-us"
                                className={({isActive}) =>
                                    `text-white lg:text-[24px] text-[20px]  font-sans  duration-200 ${isActive?"opacity-100 font-bold":"opacity-50"}`
                            }
                                 >
                            Contact us
                        </NavLink>            
                    </li>
                    </ul>
              </div>
            <div className='flex items-center gap-2'>
                <img src="images/youtube.png" alt="" className='sm:w-10 w-8'/>
                <img src="images/instagram.png" alt="" className='sm:w-10 w-8' />
                <img src="images/twitter.png" alt="" className='sm:w-10 w-8'/>
                <img src="images/facebook.png" alt="" className='sm:w-10 w-8' />
            </div>
      </div>
    </div>
  )
}

export default Footer
