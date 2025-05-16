import React from 'react'
import {assets} from '../assets/assets'
const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ---Left---*/ }
            <div>
                 <img className='mb-5 w-40'src={assets.logo} alt="" />
                 <p className='w-full md:w-2/3'>At Prescripto, your health is our priority. We invite you to explore our wide range of treatment services designed to meet the needs of every patient — from preventive care to advanced medical procedures.</p>
            </div>
             {/*---center---*/ }
             <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
             </div>

              {/*---Right---*/ }
             <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7578</li>
                    <li>greatstack@gmail.com</li>
                </ul>
             </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ prescripto-All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer