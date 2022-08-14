import React from 'react'
import Navbar from "../../../components/user/Navbar/Navbar";
import Footer from "../../../components/user/Footer/Footer";
import Shopify from "../../../components/user/Shopify/Shopify";
const Wishlist = () => {
  return (
    <>
        <Navbar/>
            <div className='container mx-auto mt-10 pb-52'>
                <div className=''>
                    <p className='text-center text-2xl font-medium text-gray-700'>Wishlist</p>
                    <p className='text-center text-xl font-medium text-gray-700'>Your wishlist is empty!</p>
                </div>
            </div>
            


        <Shopify/>
        <Footer/>
    </>
  )
}

export default Wishlist