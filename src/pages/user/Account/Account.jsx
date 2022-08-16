import React from 'react'
import Navbar from '../../../components/user/Navbar/Navbar'
import Footer from '../../../components/user/Footer/Footer'
const Account = () => {
  return (
    <>
    <Navbar/>
      <div className='container mx-auto'>
        <div className="flex ">
          <div className="overview w-96 h-96 bg-gray-600">
            <span className='text-2xl font-bold'>Account Overview</span>
          </div>
          <div className="summary w-full h-96 bg-gray-400">
            <span className='text-2xl font-bold'>Account Summary</span>
          </div>

        </div>

      </div>
    <Footer/>

    </>
  )
}

export default Account