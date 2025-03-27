import React from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'
import EstateList from '../components/EstateList'
import Mission from '../components/Mission'

const Home = () => {
  return (
    <div>
      <Hero />
      <Search />
      <EstateList />
      <Mission />
    </div>
  )
}

export default Home;
