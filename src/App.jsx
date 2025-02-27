import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackgroundSlider from './components/BackgroundSlider'
import About from './components/About'
import Service from './components/Service'
import Gallerry from './components/Gallerry'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  

  return (
   <div className='scroll-smooth'>
   <BackgroundSlider/>
   <About/>
   <Service/>
   <Gallerry/>
   <Faq/>
   <Contact/>
   <Footer/>
   </div>
  )
}

export default App
