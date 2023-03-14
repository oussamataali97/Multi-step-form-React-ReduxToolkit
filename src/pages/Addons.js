import React, { useState } from 'react'
import { updateAddons } from '../reduxtoolkit/CatalogueSlice'
import Button from '../utilities/Button'
import Sidbar from './../components/Sidbar'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Addons = () => {
  const dispatch=useDispatch()
  const [toggles, setToggles] = useState(false)
  const [userChoi,setUserChoi]=useState([])


  const history = useNavigate()

const handleSub =(e)=>{
  e.preventDefault()

  dispatch(updateAddons(userChoi))

  history('/summary')

}


  return (

    <div className='grid grid-cols-[400px,1fr] p-5'>
      <Sidbar addons={true} />
      <div className='pr-16 pt-12 flex flex-col' >
        <p className='text-[30px] font-bold text-neutral-600'>Pick Add-Ons</p>
        <p className='font-light text-[20px] text-gray-500'>Addons help  enhance your game experience</p>
      <form onSubmit={handleSub}>
        <div className="flex items-center mt-5 hover:bg-gray-100 hover:cursor-pointer p-4 justify-between w-[430px] outline outline-[1px] rounded-md outline-blue-900">
            <input type="checkbox" value='Online Services' onClick={(e)=>{
              if(e.target.checked){
                setUserChoi([...userChoi,e.target.value])
              }
            }}/>
                <div className="text">
                    <p className='font-bold text-blue-900' >Online Services</p>
                    <p className='text-gray-500 font-[400] text-[16px]'>Access to multiplayer games</p>
                </div>
            <p className='font-semibold text-blue-600 text-[13px]'>+1$/Mo</p>
        </div>
        <div className="flex items-center my-6 hover:bg-gray-100 hover:cursor-pointer p-4 justify-between w-[430px] outline outline-[1px] rounded-md outline-blue-900">
            <input type="checkbox" value='Larger Storage' onClick={(e)=>{
              if(e.target.checked){
                setUserChoi([...userChoi,e.target.value])
              }
            }}/>
                <div className="text">
                    <p className='font-bold text-blue-900'  >Larger Storage</p>
                    <p className='text-gray-500 font-[400] text-[16px]'>Extra 1TB for cloud save</p>
                </div>
            <p className='font-semibold text-blue-600 text-[13px]'>+1$/Mo</p>
        </div>
        <div className="flex items-center hover:bg-gray-100 hover:cursor-pointer p-4 justify-between w-[430px] outline outline-[1px] rounded-md outline-blue-900">
            <input type="checkbox"  value='Customizable Profile' onClick={(e)=>{
              if(e.target.checked){
                setUserChoi([...userChoi,e.target.value])
              }else {
                setUserChoi([...userChoi])
              }
            }}/>
                <div className="text">
                    <p className='font-bold text-blue-900' >Customizable Profile</p>
                    <p className='text-gray-500 font-[400] text-[16px]'>Custom theme on your profile</p>
                </div>
            <p className='font-semibold text-blue-600 text-[13px]'>+1$/Mo</p>
        </div>



        <div className="flex justify-between items-center mt-16">
        <div className="">
            <button onClick={() => history(-1)} className='font-bold text-gray-500 hover:text-blue-900'> Go Back</button>

          </div>
          <div className="btn  " >
          {/* <Link to='/summary'> */}<Button >
         <button type='submit'>  Next Step</button>
        </Button>{/* </Link> */}
          </div>

        </div>
        </form>
      </div>

    </div>
  )
}

export default Addons