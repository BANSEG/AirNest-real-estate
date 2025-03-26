import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-24 py-3 bg-cyan-400'>

      {/* Logo */}
      <Link to='/'>
      <div className='text-2xl font-bold'>
        <h2>AirNest</h2>
      </div>
      </Link>


      {/* Navlink */}
      <div>
        <ul className='flex space-x-8 text-lg font-semibold'>
          <li className='hover:text-cyan-500 cursor-pointer'>Home</li>
          <li className='hover:text-cyan-500 cursor-pointer'>About</li>
          <li className='hover:text-cyan-500 cursor-pointer'>Properties</li>
          <li className='hover:text-cyan-500 cursor-pointer'>Mission</li>
        </ul>
      </div>


      {/* button */}
      <div>
        <button className= 'border border-cyan-400 px-10 py-4 font-semibold rounded-full hover:bg-sky-500'>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar

