import React from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'
import EstateList from '../components/EstateList'
import Mission from '../components/Mission'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Search />
      <EstateList />
      <Mission />
    </div>
  )
}

export default Homepage
