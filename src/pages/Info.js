import React from 'react'
import Sidbar from '../components/Sidbar'
import Button from '../utilities/Button'
import {Link ,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { updateUserInfo } from '../reduxtoolkit/CatalogueSlice'
import { useRef } from 'react'


const Info = () => {

  const {userInfo} = useSelector((state)=>state.catalogue)

  console.log(userInfo)
  const history =useNavigate()
  const dispatch=useDispatch()
  const nameRef=useRef(null)
  const mailRef=useRef(null)
  const phoneRef=useRef(null)

  const handleSubmit = (e)=>{
    e.preventDefault()

    let username = nameRef.current.value;
    let usermail=mailRef.current.value
    let userphone=phoneRef.current.value

    dispatch(updateUserInfo({'name':username,'email':usermail,'phone':userphone}))
    console.log(userInfo)




    history('/plan')

  }


  return (
    <div className='grid grid-cols-1 md:grid-cols-[400px,1fr] p-5'>
<Sidbar info={true}/>
    <div className='pr-16 pt-12 flex flex-col'>
        <p className='text-[30px] font-bold text-neutral-600'>Personal Info</p>
        <p className='font-light text-[20px] text-gray-500'>Please Provide your reel informations !</p>
        <form action="" className='mt-5' onSubmit={handleSubmit}>

        <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="username">
        Name
      </label>
      <input className="shadow w-[500px] appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={nameRef} id="username" type="text" placeholder="Jhon Doe"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="username">
        Email adresse
      </label>
      <input className="shadow w-[500px] appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={mailRef} id="username" type="text" placeholder="Email@..fr"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="username">
        Phone
      </label>
      <input className="shadow w-[500px] appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={phoneRef} id="username" type="text" placeholder="+212682798739"/>
    </div>


        <div className="btn self-end mt-16">
        <button type='submit' ><Button >
           Next Step
        </Button></button>

        </div>
        </form>
    </div>
    </div>
  )
}

export default Info