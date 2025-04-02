import React from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'
import EstateList from '../components/EstateList'
import Mission from '../components/Mission'
import Contact from '../components/Contact'



const Home = () => {

    
  return (
    <div>
      <Hero />
      <Search />
      <EstateList />
      <Mission />
      <Contact />
    </div>
  )
}

export default Home;