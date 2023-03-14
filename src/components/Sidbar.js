import { useState } from 'react'
import sidbar from './../assets/images/bg-sidebar-desktop.svg'
const Sidbar = ({info,plan,addons,summary}) => {
  return (
    <div>

        <img src={sidbar} alt="" className='relaltive' />
        <ul className='Links flex items-center md:block absolute top-0 left-0 p-12 md:space-y-4'>
            <li className='flex items-center text-gray-300'> <p className={info ? 'bg-cyan-300  px-4 text-white py-2 rounded-full mr-5' :'outline outline-[1px] outline-cyan-300 px-4 text-white py-2 rounded-full mr-5'}>1</p> <span className='md:flex  flex-col uppercase hidden'>Step 1 <span className='text-white font-[500]  '>YOUR INFO</span></span>   </li>
            <li className='flex  items-center  text-gray-300'>  <p className={plan ? 'bg-cyan-300  px-4 text-white py-2 rounded-full mr-5' :'outline outline-[1px] outline-cyan-300 px-4 text-white py-2 rounded-full mr-5'}>2</p><span className='md:flex  flex-col uppercase hidden'>Step 2 <span className='text-white font-[500]  '>SELECT PLAN</span></span> </li>
            <li className='flex   items-center  text-gray-300'>  <p className={addons ? 'bg-cyan-300  px-4 text-white py-2 rounded-full mr-5' :'outline outline-[1px] outline-cyan-300 px-4 text-white py-2 rounded-full mr-5'}>3</p><span className='md:flex  flex-col uppercase hidden'>Step 3 <span className='text-white font-[500]  '>ADD-ONS</span></span> </li>
            <li className='flex  items-center  text-gray-300'>  <p className={summary ? 'bg-cyan-300  px-4 text-white py-2 rounded-full mr-5' :'outline outline-[1px] outline-cyan-300 px-4 text-white py-2 rounded-full mr-5'}>4</p><span className='md:flex  flex-col uppercase hidden'>Step 4 <span className='text-white font-[500]  '>SUMMARY</span></span> </li>

        </ul>
    </div>
  )
}

export default Sidbar