import React from 'react'

function Vaccine() {
  return (
    <div className='bg-[url("/images/unsplash_SfDofjXtxHE.png")] bg-no-repeat bg-center bg-cover sm:px-12 px-6 py-6 bg-[#0B153C] bg-opacity-20' >  
      <div className='flex justify-between gap-6 flex-wrap mb-8'>
        <h2 className='text-white md:text-[48px] sm:text-[36px] text-[30px] font-sans font-bold leading-tight duration-200'>Why get vaccinated <br /> today?</h2>
        <p className='text-white text-opacity-50 text-[16px] font-sans leading-tight'>Magna adipiscing at elit at ornare lectus nibh lorem. <br /> Ac, sed ac lorem pellentesque vestibulum risus matti. <br /> In molestie condimentum malesuada non.</p>
      </div>
      <div className='flex justify-between items-end flex-wrap gap-6 duration-200'>
    <div className='bg-[#c4c4c4] bg-opacity-10 p-8 pb-14  rounded-[50px] rounded-tr-[40%] '>
            <img src="images/Group 31.png" alt="" className='w-16 mb-5' />
            <p className='text-[#17C2EC] text-[20px] font-sans font-bold leading-tight mb-5'>Protects your immune <br />
            system against viruses</p>
            <p className='text-white font-sans leading-tight text-[14px] mb-8'>Velit ut consectetur mauris, orci amet, <br />
                faucibus. <br />
                Sit turpis fringilla ipsum pretium, <br />
                dictum. Dolor eget vel nulla lorem ac.</p>
            <button className='text-[#17C2EC]'>Read More <img src="images/arrow-right.png" alt="" className='inline-block w-6'/></button>
        </div>
            <div className='border-2 rounded-[40px] border-white border-opacity-50 pl-6 md:pr-20 pr-14 pt-6 sm:pb-12 pb-8 duration-200'>
               <img src="images/Group 31 (1).png" alt="" className='w-16 mb-8' /> 
               <p className='text-white font-bold font-sans text-[18px] mb-8'>Minimize the spread <br />
               of the Virus</p>
               <button className='text-white font-sans text-opacity-50'>Read More <img src="images/arrow-right (1).png" alt="" className='inline-block w-6' /></button>
            </div>
            <div className='border-2 rounded-[40px] border-white border-opacity-50 pl-6 md:pr-[118px] pr-24 pt-5 sm:pb-12 pb-8 duration-200'>
               <img src="images/Group 31 (2).png" alt="" className='w-16 mb-8' /> 
               <p className='text-white font-bold font-sans text-[18px] mb-16'>Protect yourself  </p>
               <button className='text-white font-sans text-opacity-50'>Read More <img src="images/arrow-right (1).png" alt="" className='inline-block w-6' /></button>
            </div>
      </div>
    </div>
  )
}

export default Vaccine
