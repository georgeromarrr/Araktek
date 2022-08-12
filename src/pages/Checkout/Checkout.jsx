import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {BrandLogo} from '../../components/Navbar/NavbarComponents'
const Checkout = () => {
  return (
    <div>
    <Navbar/>
        <div className='container mx-auto'>
            <div className='flex justify-center mt-20'><BrandLogo/></div>
            <div className="flex justify-between bg-black py-2">
                <span className='text-white px-5'>Order Summary</span>
                <div className=''>
                    <span className='text-white mx-7'>Quantity</span>
                    <span className='text-white mx-7'>Price</span>
                </div>
                <span className='text-white px-5'>Total</span>
            </div>
            <div className='my-40'>
                <span className=''>PRODUCTS</span>
            </div>
            {/* BILLING DETAILS */}
            <div className="bill-details flex justify-between">
                <div>
                    <div className="address bg-black py-2">
                        <span className='text-white mx-3'>Billing Address</span>
                    </div>

                    <div className='flex justify-between my-5'>
                        <span className='mt-2'>First Name</span>
                        <input className='w-96 h-10 border-gray-300' type="text" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <span className='mt-2'>Last Name</span>
                        <input className='w-96 h-10 border-gray-300' type="text" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <span className='mt-2'>Email</span>
                        <input className='w-96 h-10 border-gray-300' type="text" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <span className='mt-2'>Phone Number</span>
                        <input className='w-96 h-10 border-gray-300' type="text" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <span className='mt-2'>Address</span>
                        <input className='w-96 h-10 border-gray-300' type="text" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <span className='mt-2'>State</span>
                        <input className='w-96 h-10 border-gray-300' type="text" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <span className='mt-2'>City</span>
                        <input className='w-96 h-10 border-gray-300' type="text" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <span className='mt-2'>Zip Code</span>
                        <input className='w-96 h-10 border-gray-300' type="text" />
                    </div>
                    
                </div>

                <div>
                    <div className="delivery  bg-black py-2">
                        <span className='text-white mx-3 text-start'>Delivery Address</span>
                    </div>
                    
                    <div class="flex items-center mt-5 mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default(same as billing address)</label>
                    </div>
                    <div class="flex items-center mt-5 mb-4">
                        <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add an alternative delivery address</label>
                    </div>
                </div>     
            {/* Shipping details */}
            </div>
            <div className="shipping my-5">
                <div className="bg-black w-full py-2">
                    <span className='text-white mx-3'>Shipping Method</span>
                </div>
                <div className='bg-gray-100 my-5 py-4 flex justify-between'>
                    <div>
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class=" ml-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Free Shipping</label>
                    </div>
                    <span>Express Courier(Air)</span>
                    <span className='mx-3'>Up to 4 business day(s)</span>   
                </div>
            </div>

            {/* Payment */}
            <div className="my-5 flex justify-between">
                <div>
                    <div className="payment bg-black py-2 my-5">
                        <span className='text-white mx-3'>Payment</span>
                    </div>
                    <div className='mx-4'>
                   <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" border="0" alt="PayPal Logo"/>
                    </div>
                    <div className='paypal-text'>
                        <span className='text-xs '>Click the button below to be directed to the selected payment method website to make this payment</span>
                    </div>
                </div>
                <div>
                    <div className="billing bg-black py-2 my-5 ">
                        <span className='text-white mx-3'>Billing Summary</span>
                    </div>
                </div>

            </div>

        </div>

    <Footer/>
    </div>
  )
}

export default Checkout;


