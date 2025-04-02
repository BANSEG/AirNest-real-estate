import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-24 py-6 bg-cyan-400'>

      {/* Logo */}
      <Link to='/'>
      <div className='text-2xl font-bold'>
        <h2>AirNest</h2>
      </div>
      </Link>


      {/* Navlink */}
      <div>
        <ul className='flex space-x-8 text-lg font-semibold'>
          <Link to='/Hero' className='hover:text-cyan-500 cursor-pointer'>Home</Link>
          <Link to='/Search' className='hover:text-cyan-500 cursor-pointer'>About</Link>
          <Link to='/EstateList' className='hover:text-cyan-500 cursor-pointer'>Properties</Link>
          <Link to='/Mission' className='hover:text-cyan-500 cursor-pointer'>Mission</Link> 
        </ul>
      </div>


      {/* button */}
      <div className='flex space-x-2'>
        <div>
          <Link to='/Signup' className= 'border border-cyan-400 px-8 py-2 font-semibold rounded-full hover:bg-sky-500'>Sign Up</Link>
        </div>

        <div>
          <Link to='/Login' className= 'border border-cyan-400 px-8 py-2 font-semibold rounded-full hover:bg-sky-500'>Log in</Link>
        </div>
      </div>
      
    </div>

    
  )
}

export default Navbar;

