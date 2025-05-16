import React from 'react'
import {assets}from '../assets/assets'
const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
           <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
         <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto, where compassion meets technology.
Established in 2010, Lifeline is committed to providing world-class healthcare with a human touch. Our mission is to deliver patient-centered care using the latest medical advancements and a team of dedicated healthcare professionals.</p>
          <p>With a team of experienced doctors, certified nurses, and skilled technicians, we ensure quality and safety in every aspect of our care.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>To become a center of excellence in healthcare and to ensure that every patient receives affordable, timely, and effective treatment.</p>
         </div>
        </div>

      <div className='text-xl my-4'>
       <p>WHY <span className='text-gray-700 font-semibold'></span>CHOOSE US</p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
           <b>Efficiency:</b>
           <p>At Prescripto, we understand that in healthcare, time is critical. That’s why efficiency is at the heart of everything we do—from diagnosis to discharge.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
           <b>Convenience:</b>
           <p>At Prescripto, we believe that quality healthcare should be easy to access, stress-free, and patient-friendly. That’s why we’ve designed every part of your healthcare journey with convenience in mind.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Personalization:</b>
          <p>At Prescripto, we treat more than just symptoms—we treat you. Every patient is different, and so is our approach. Our personalized care model ensures that every treatment plan is tailored to your specific health needs, preferences, and lifestyle.</p>
        </div>
      </div>

    </div>
  )
}

export default About