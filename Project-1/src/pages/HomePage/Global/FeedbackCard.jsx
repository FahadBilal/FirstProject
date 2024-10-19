import React from 'react'

function FeedbackCard({image,title,text,detail,className}) {

  return (
    <div className={`bg-[url("images/unsplash_ZeMRI9vO71o.png")] bg-no-repeat bg-contain bg-center `}>
      <div className={`px-8 py-6 rounded-2xl bg-[#c4c4c4] bg-opacity-50 w-[350px] h-[200px] ${className}`}>
      <div className='flex items-center gap-4'>
        <img src={image} alt="" className='w-12'/>
        <div>
            <h4 className='font-sans font-bold text-black text-[20px]'>{title}</h4>
            <span className='font-sans  text-black text-opacity-50 text-[14px]'>{text}</span>
        </div>
      </div>
      <p className='mt-10 text-center'>{detail}</p>
      </div>
    </div>
  )
}

export default FeedbackCard
