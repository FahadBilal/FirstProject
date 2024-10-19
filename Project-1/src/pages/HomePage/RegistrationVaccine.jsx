import React from 'react'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'


function RegistrationVaccine() {

  const [value, setValue] = useState()
  return (
    <div className='bg-[#FFFFFF] bg-[url("images/unsplash_Y4MKctPwIrw.png")] bg-no-repeat bg-center bg-cover bg-opacity-50 sm:px-12 px-6 mt-8 md:relative duration-200 md:h-[550px] md:min-h-0 min-h-screen'>
      <h2 className='text-[#000000] font-sans font-bold sm:text-[48px] text-[36px] leading-tight mb-8 text-center sm:text-left duration-200'>Get your vaccine <br />
      registration today</h2>
     <div className='md:absolute md:right-32 md:bottom-24 text-center  duration-200 '>
     <div className='relative md:w-[300px] md:h-[440px] sm:w-[400px] sm:h-[567px] w-[300px] h-[430px] duration-200 ' >
        <img src="images/Group 40 (1).png" alt="" className='pt-5 pl-5 w-full h-full' />
        <img src="images/unsplash_k0KRNtqcjfw.png" alt="" className='absolute left-0 top-0 w-20'/>
        <p className='absolute text-white left-[50%] translate-x-[-35%] top-16 leading-tight font-sans font-bold text-[20px]'>COVID-19 <br /> Vaccine </p>
        <button className='absolute left-[50%] translate-x-[-35%] bottom-16 bg-[#c4c4c4] bg-opacity-25 text-white px-6 py-2 rounded-xl'>Verify Status</button>
      </div>
     </div>
      <div className='mt-8 sm:w-[500px] w-[330px] duration-200'>
        <h4 className='text-[#000000] font-sans font-bold text-[18px] leading-tight mb-3'>Patient’s Full Name</h4>
        <input type="text" className=' w-full  mb-5 pl-6 py-2 rounded-xl placeholder:text-black placeholder-opacity-25  outline-none  duration-200   bg-[#c4c4c4] bg-opacity-15 text-black ' placeholder='Full Name'  />
        <h4 className='text-[#000000] font-sans font-bold text-[18px] leading-tight mb-3'>Mobile Number</h4>
        <p className='font-sans text-opacity-50 text-[16px] mb-4 text-black'>Notifications for appointment and reminders will be sent to this 
        provided number</p>


        <div className='w-full mb-6'>
        <PhoneInput
        className='w-8 inline-block mr-40'
      defaultCountry="RU"
      value={value}
      onChange={setValue}
    />

            <button className='px-12 py-2 text-white bg-[#17C2EC] rounded-xl sm:ml-[90px] sm:mt-0 mt-6'>Verify</button>
        </div>
        <button className='w-full px-3 py-2 text-white bg-[#17C2EC] rounded-xl mb-6 text-center'>Submit</button>
        <p className='font-sans text-[16px] text-center text-black text-opacity-75'>Already registered ? <span className='text-[#17C2EC] text-opacity-100 sm:ml-16 ml-8 '>Check your status</span></p>
      </div>
    </div>
  )
}

export default RegistrationVaccine
