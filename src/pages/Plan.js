import React, { useState } from 'react'
import arcade from './../assets/images/icon-arcade.svg'
import advanced from './../assets/images/icon-advanced.svg'
import pro from './../assets/images/icon-pro.svg'
import Button from '../utilities/Button'
import Sidbar from './../components/Sidbar'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { updatePlan } from '../reduxtoolkit/CatalogueSlice'


const Plan = () => {
  const [toggles, setToggles] = useState(false)
  const [selected,setSelected]=useState('')
  const history = useNavigate()
  const dispatch=useDispatch()
  const {userInfo} = useSelector((state)=>state.catalogue)
  const planchosen = useSelector((state)=>state.catalogue.plan)
  window.localStorage.setItem('plans',planchosen)
  if(!toggles){
    window.localStorage.setItem('Method','Yearly')
  }else{
    window.localStorage.setItem('Method','Monthly')
  }

  console.log(userInfo)
  window.localStorage.setItem('users',JSON.stringify(userInfo))

  const arcadeRef=useRef()
  const advancedRef=useRef()
  const proRef=useRef()

  const handlePlan =(e)=>{
 const type = e.target.childNodes[1].innerText

    console.log(e)
 dispatch(updatePlan(type))

    setSelected(type)




}



  return (

    <div className='grid grid-cols-[400px,1fr] p-5'>
      <Sidbar plan={true} />
      <div className='pr-16 pt-12 flex flex-col'>
        <p className='text-[30px] font-bold text-neutral-600'>Select Your Plan</p>
        <p className='font-light text-[20px] text-gray-500'>Please Provide your reel informations !</p>
        <div className="grid grid-cols-6 gap-5 mt-8">
          <div onClick={handlePlan

          }
        className={localStorage.getItem('plans') ==='Arcade' ? "box bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-lg p-4 flex flex-col border-[1px] border-purple-800" : "box hover:bg-gray-100 hover:cursor-pointer rounded-lg p-4 flex flex-col border-[1px] border-purple-800"}>
            <img src={arcade} alt="Arcsade" className='w-12 mb-8' />
            <p className='font-[700] text-blue-900  ' ref={arcadeRef}>Arcade</p>
            <p className='font-[300] text-neutral-500 text-[13px]'>{!toggles ? '$9 /Mo' : '$120/yr'}</p>
            {toggles && <p className='font-[500] text-blue-900  text-[13px]'> 2 months free </p>}

          </div>
          <div onClick={handlePlan

        } className={localStorage.getItem('plans') ==='Advanced' ? "box bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-lg p-4 flex flex-col border-[1px] border-purple-800" : "box hover:bg-gray-100 hover:cursor-pointer rounded-lg p-4 flex flex-col border-[1px] border-purple-800"}>
            <img src={advanced} alt="Arcsade" className='w-12 mb-8' />
            <p className='font-[700] text-blue-900  ' ref={advancedRef}>Advanced</p>
            <p className='font-[300] text-neutral-500 text-[13px]'>{!toggles ? '$9 /Mo' : '$120/yr'}</p>
            {toggles && <p className='font-[500] text-blue-900  text-[13px]'> 2 months free </p>}

          </div>
          <div onClick={handlePlan

        } className={localStorage.getItem('plans') ==='Pro' ? "box bg-gray-200 hover:bg-gray-100 hover:cursor-pointer rounded-lg p-4 flex flex-col border-[1px] border-purple-800" : "box hover:bg-gray-100 hover:cursor-pointer rounded-lg p-4 flex flex-col border-[1px] border-purple-800"}>
            <img src={pro} alt="Arcsade" className='w-12 mb-8' />
            <p className='font-[700] text-blue-900  ' ref={proRef}>Pro</p>
            <p className='font-[300] text-neutral-500 text-[13px]'>{toggles ? '$9 /Mo' : '$120/yr'}</p>
            {toggles && <p className='font-[500] text-blue-900  text-[13px]'> 2 months free </p>}
          </div>
        </div>
        <div className="flex items-center space-x-5 bg-gray-100 justify-center p-3 mt-10">
          <p className={toggles ? 'font-bold' : ''}>Monthly</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox"  checked={window.localStorage.getItem('Method') ==='Yearly'} className="sr-only peer" onClick={() => setToggles(!toggles)} />

            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <p className={toggles ? '' : 'font-bold'}>Yearly</p>
        </div>
        <div className="flex justify-between items-center mt-16">
        <div className="">
            <button onClick={() => history(-1)} className='font-bold text-gray-500 hover:text-blue-900'> Go Back</button>

          </div>
          <div className="btn  ">
          <Link to='/addons'><Button >
           Next Step
        </Button></Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Plan