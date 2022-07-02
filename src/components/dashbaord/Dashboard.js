import React from 'react'
import { BsWallet } from 'react-icons/bs'
import { BiTransferAlt } from 'react-icons/bi'
import { TbNumbers } from 'react-icons/tb'
import { AiOutlineHistory } from 'react-icons/ai'
const Dashboard = () => {
  return (
    <div className='h-screen w-full pt-16'>

      {/* Stats  */}
      <div className="flex items-center px-3 gap-x-4">
        <div className='bg-error rounded-lg  shadow-lg hover:shadow-xl duration-200 p-3 gap-x-2 w-full'>
          <div className='bg-base-200 w-16 h-16 p-4 rounded-full'>
            <BsWallet className='mx-auto text-3xl text-accent-content' />
          </div>
          <div>
            <h4 className=' mt-2 text-base-200'>Current Balance</h4>
            <p className='text-2xl text-base-200'>$2500</p>
          </div>
        </div>
        <div className='bg-warning rounded-lg hover:shadow-xl shadow-lg duration-200 p-3 gap-x-2 w-full'>
          <div className='bg-base-200 w-16 h-16 p-4 rounded-full'>
            <BiTransferAlt className='text-3xl text-accent-content mx-auto' />
          </div>
          <div>
            <h4 className=' mt-2 text-base-200'>Current Balance</h4>
            <p className='text-2xl text-base-200'>$2500</p>
          </div>
        </div>
        <div className='bg-success rounded-lg hover:shadow-xl shadow-lg duration-200 p-3 gap-x-2 w-full'>
          <div className='bg-base-200 w-16 h-16 p-4 rounded-full'>
            <TbNumbers className='text-3xl text-accent-content mx-auto' />
          </div>
          <div>
            <h4 className=' mt-2 text-base-200'>Current Balance</h4>
            <p className='text-2xl text-base-200'>$2500</p>
          </div>
        </div>
        <div className='bg-info rounded-lg hover:shadow-xl shadow-lg duration-200 p-3 gap-x-2 w-full'>
          <div className='bg-base-200 w-16 h-16 p-4 rounded-full'>
            <AiOutlineHistory className='text-3xl text-accent-content mx-auto' />
          </div>
          <div>
            <h4 className=' mt-2 text-base-200'>Current Balance</h4>
            <p className='text-2xl text-base-200'>$2500</p>
          </div>
        </div>
      </div>

      <div className="flex items-center p-2 gap-x-4 ">
        {/* wallet  */}

        {/* activity  */}

        {/* transactions  */}
        </div>
    </div>
  )
}

export default Dashboard