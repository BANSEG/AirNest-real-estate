import React from 'react'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedin from '../assets/linkedin_icon.png'

const Footer = () => {
  return (

    <div className='bg-cyan-400 text-black flex flex-col items-center gap-5 px-8 py-20 mt-8'>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-6xl'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-semibold'>AirNest</h2>
          <p className='text-base leading-relaxed'>AirNest is an independent team of innovative of architects, builders, realtors, interior designers, construction and real estate professionals in Nigeria and beyond.</p>
          <div className='flex items-center gap-4 mt-3'>
            <img src={facebook} alt="" className='w-10 cursor-pointer' />
            <img src={twitter} alt="" className='w-10 cursor-pointer' />
            <img src={linkedin} alt="" className='w-10 cursor-pointer' />
          </div>
        </div>


        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-semibold'>COMPANY</h2>
          <ul className='spec-y-2 text-base'>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-semibold'>GET IN TOUCH</h2>
          <ul className='space-y-2 text-base'>
            <li>Phone: 07034703814</li>
            <li>Email: support@AirNestproperties.com</li>
            <li>Address: 15, Admiralty way, Lekki, Lagos state</li>
          </ul>
        </div>
      </div>

      <hr className='w-full border-t-2 border-b-gray-600 my-5 max-w-6xl' />
      <div className='text-center font-xl'>
        <p>Copyright 2025 AirNest....All right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
