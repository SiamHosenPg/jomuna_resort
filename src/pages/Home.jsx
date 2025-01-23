import React from 'react'
import Nav from '../components/navbar/Nav'
import Header from '../components/header/Header'
import Benefits from '../components/benefits/Benefits'
import Footer from '../components/footer/Footer'
import Comfortexp from '../components/comfortexp/Comfortexp'
import Guidelines from '../components/guidelines/Guidelines'
import Testimonial from '../components/testimonial/Testimonial'

const Home = () => {
  return (
    <> 
      <Nav />
      <Header />
      <Benefits />
      <Comfortexp />
      <Guidelines/>
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home
