import React from 'react'
import FeedbackCard from './Global/FeedbackCard'

function Feedback() {
  return (
    <div className='bg-[#FFFFFF] bg-[url("images/unsplash_Y4MKctPwIrw.png")] bg-no-repeat bg-center bg-cover bg-opacity-50 md:h-[700px]  md:min-h-0 min-h-screen px-12 md:mb-0 mb-40'>
      <div className='text-center pt-10 '>
      <span className='text-[#17C2EC] mb-4 font-sans font-bold' >FEEDBACK</span>
      <h1 className='text-black font-bold font-sans text-[30px] mb-4' >What our Patients Think</h1>
      <p className='font-sans text-black text-opacity-50 text-[16px]'>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. <br />
      Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
      </div>
      <div className='flex md:flex-row flex-col md:justify-between md:flex-wrap gap-10 items-center  mt-10'>
        <FeedbackCard image={"images/Rectangle 25.png"} title={"Oyindamola Maja"} text={"Badagry, Lagos"} detail={"“Been stressing about a close centr to get the covid-19 vaccine, until i tried Vaccination.ng”"}/>
        <FeedbackCard image={"images/Rectangle 24.png"} title={"Okeowo Lekan"} text={"Ikeja, Lagos"} detail={"“Got my vaccine very close to my house. Was very easy scheduling an appointment.”"} className={' bg-[#33c3fc] bg-opacity-100 text-white' }/>
        <FeedbackCard image={"images/Rectangle 26.png"} title={"Kafaru Temitope"} text={"Obanikoro, Lagos"} detail={"“Been stressing about a close centrto get the covid-19 vaccine, untili tried Vaccination.ng”"}/>

    
    </div>
    </div>
  )
}

export default Feedback
