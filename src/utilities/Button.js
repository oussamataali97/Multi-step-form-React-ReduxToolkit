import React from 'react'

const Button = ({children}) => {
  return (
    <div className='bg-blue-900 text-white font-[500] rounded-md cursor-pointer hover:bg-blue-700 w-fit px-5 py-3'>
        {children}
    </div>
  )
}

export default Button