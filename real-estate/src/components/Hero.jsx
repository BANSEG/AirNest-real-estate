import React from 'react'
import hero_img from '../assets/hero2.png'

const Hero = () => {
  return (
    <div>
      <div className='grid h-screen w-full place-items-center bg-cyan-300 rounded-br-[30%] rounded-bl-[30%]'>
        <div className='text-center'>
          <h3 className='text-5xl font-semibold mt-14'>Find Your Dream Home <br /> with Ease</h3>
          <img src={hero_img} alt="" className= 'w-[1200px] h-[650px] object-contain -mt-2'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
