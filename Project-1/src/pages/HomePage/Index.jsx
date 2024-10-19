import React from 'react'
import Banner from './Banner'
import Figure from './Figure'
import Database from './Database'
import Vaccine from './Vaccine'
import RegistrationVaccine from './RegistrationVaccine'
import Symptoms from './Symptoms'
import Feedback from './Feedback'
import Footer from './Footer'
import Quote from './Quote'

function Homepage() {
  return (
    <div className='relative border-2 border-black'>
    <Banner/>
    <Figure/>
    <Database/>
    <Vaccine/>
    <RegistrationVaccine/>
    <Symptoms/>
    <Feedback/>
    <Footer/>
    <Quote/>
    </div>
  )
}

export default Homepage
