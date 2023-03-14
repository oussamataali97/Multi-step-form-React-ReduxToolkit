import Sidbar from "../components/Sidbar"

import thnx from './../assets/images/icon-thank-you.svg'

const Thanks = () => {




  return (
    <div className='grid grid-cols-[400px,1fr] p-5 overflow-hidden'>
<Sidbar summary={true}/>
        <div className=" flex justify-center flex-col  items-center">
            <img src={thnx} alt="" className="w-32" />
            <p className='text-[30px] font-bold text-neutral-600 pt-4'>Thank you</p>
        <p className='font-light text-[20px] text-gray-500 py-5'>Thanks for confirming your suscription! we hope you have fun using our platform. if you ever need support,please feel free to email us at support@test.fr</p>
        </div>

    </div>
  )
}

export default Thanks