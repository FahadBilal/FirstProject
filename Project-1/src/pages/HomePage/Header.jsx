import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Header() {

    const[isOpen, setIsOpen] =useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
      <nav className='md:px-12 pt-10 md:flex md:justify-between md:items-center relative'>
                <div>
                <h2 className='font-bold text-[32px] md:pl-0 sm:pl-11 pl-6 leading-3 font-sans text-[#ffffff]  relative after:content-[""] after:block after:w-20 after:h-[3px] after:bg-[#17C2EC] after:mt-4 after:rounded-full'>
                Vaccination.ng
                    </h2>
                </div>
                <div>
                    <ul className={`md:flex md:gap-7 md:items-center md:static w-full  absolute  duration-700 transition-all ease-in-out 
                        ${isOpen?"top-20 w-full bg-[url('/images/unsplash_SfDofjXtxHE.png')] bg-no-repeat bg-center bg-cover z-40 flex flex-col gap-5 ":"top-[-498px]"}
                        `}>
                    <li className='mb-3 md:mb-0'>
                         <NavLink
                            to="/"
                                className={({isActive}) =>
                                `text-white lg:text-[24px] text-[20px] pr-2 pl-3 font-sans  duration-700 transition-all ease-in-out ${isActive?"opacity-100 font-bold after:content-[''] after:block relative after:w-[7px] after:h-[7px] after:absolute after:mt-[4px] after:left-[50%] after:translate-x-[-50%] after:rounded-3xl md:after:bg-[#17C2EC]":"opacity-50"}`
                               }
                                 >
                            Home
                        </NavLink>            
                    </li>
                    <li className='mb-3 md:mb-0'>
                         <NavLink
                            to="/service"
                                className={({isActive}) =>
                                `text-white lg:text-[24px] text-[20px] pr-2 pl-3 font-sans duration-700 transition-all ease-in-out ${isActive?"opacity-100 font-bold after:content-[''] after:block relative after:w-[7px] after:h-[7px] after:absolute after:mt-[4px] after:left-[50%] after:translate-x-[-50%] after:rounded-3xl md:after:bg-[#17C2EC]":"opacity-50"}`
                            }
                                 >
                            Services
                        </NavLink>            
                    </li>
                    <li className='mb-3 md:mb-0'>
                         <NavLink
                            to="/sechedule"
                                className={({isActive}) =>
                                    `text-white lg:text-[24px] text-[20px] pr-2 pl-3 font-sans duration-700 transition-all ease-in-out ${isActive?"opacity-100 font-bold after:content-[''] after:block relative after:w-[7px] after:h-[7px] after:absolute after:mt-[4px] after:left-[50%] after:translate-x-[-50%] after:rounded-3xl md:after:bg-[#17C2EC]":"opacity-50"}`
                            }
                                 >
                            Schedule
                        </NavLink>            
                    </li>
                    <li className='mb-3 md:mb-0'>
                         <NavLink
                            to="/contact-us"
                                className={({isActive}) =>
                                    `text-white lg:text-[24px] text-[20px] pr-2 pl-3 font-sans duration-700 transition-all ease-in-out ${isActive?"opacity-100 font-bold after:content-[''] after:block relative after:w-[7px] after:h-[7px] after:absolute after:mt-[4px] after:left-[50%] after:translate-x-[-50%] after:rounded-3xl md:after:bg-[#17C2EC]":"opacity-50"}`
                            }
                                 >
                            Contact us
                        </NavLink>            
                    </li>
                    </ul>
                </div>
                <div>
                    <button className='lg:flex hidden px-3 py-2 rounded-[15px] font-sans text-[24px] text-[#17C2EC] bg-[#C4C4C4] bg-opacity-10'>Check Status</button>
                </div>
                <div className='md:hidden absolute top-8 sm:right-12  right-8'  >
                        <button onClick={toggleMenu} className='text-white focus:outline-none'>
                        {isOpen ? (
                        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                        </svg>
                        ) : (
                        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                        )}
                    </button>
        </div>
             </nav>
    </div>
  )
}

export default Header
