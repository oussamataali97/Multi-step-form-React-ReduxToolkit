import React, { useState } from 'react'
import arcade from './../assets/images/icon-arcade.svg'
import advanced from './../assets/images/icon-advanced.svg'
import pro from './../assets/images/icon-pro.svg'
import Button from '../utilities/Button'
import Sidbar from './../components/Sidbar'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Plan = () => {
  const [toggles, setToggles] = useState(false)
  const history = useNavigate()
  const addons =useSelector((state)=>state.catalogue.addons)
  const plan =useSelector((state)=>state.catalogue.plan)


  console.log(addons)
  return (

    <div className='grid grid-cols-[400px,1fr] p-5'>
      <Sidbar summary={true} />
      <div className='pr-16 pt-12 flex flex-col'>
        <p className='text-[30px] font-bold text-neutral-600'>Finishing Up</p>
        <p className='font-light text-[20px] text-gray-500'>Double check everything OK before validate</p>

            <div className=" w-[27rem] mt-8">
                <ul className='bg-gray-100 p-5'>
                    <li className='flex justify-between items-center border-b-[1px]  border-gray-300 py-3 mb-3'>
                        <div className="text">
                            <p className='font-bold text-blue-900'>{plan} ({window.localStorage.getItem('Method')}) </p>
                            <Link to='/plan' className='text-blue-600 underline'>Change</Link>
                        </div>
                        <p className='text-gray-900'>9$/Mo</p>
                    </li>
                    {addons && addons.map((add,index)=>(
                    <li className='flex justify-between' key={index}><p className='text-gray-500'>{add}</p> <span className='text-gray-900'>+1$/Mo</span></li>

                    ))}


                </ul>
                <div className='flex justify-between p-5'><p className='text-gray-500'>Total</p> <span className='font-bold text-blue-900'>+12$/Mo</span></div>

            </div>



        <div className="flex justify-between items-center mt-16">
        <div className="">
            <button onClick={() => history(-1)} className='font-bold text-gray-500 hover:text-blue-900'> Go Back</button>

          </div>
          <div className="btn  ">
            <Link to='/thanks'><Button >
              Finalize
            </Button></Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Plan