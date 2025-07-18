import React from 'react'
import Header from '../components/Header'
import coupleImage from '../assets/Images/Coupleimage.png'
import About from './About'
import Gifting from './Gifting'
import Gallery from './Gallery'
import Schedule from './Schedule'
import FavouriteMoment from './FavouriteMoment'
import CountdownTimer from '../components/CountdownTimer'
import Video from '../components/Video'

const Home = () => {
  return (
    <div className='max-w-[430px] flex flex-col gap-[64px] bg-[#F6FFF5] m-auto scroll-smooth'>
      <section id="Home" className='w-full flex flex-col space-y-4'>
        <Header />
        <img src={coupleImage} alt='Ayobami & Chuks' className='w-full object-cover pb-[64px]' />
        <CountdownTimer />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="FavouriteMoment">
        <FavouriteMoment />
      </section>

      <section id="Schedule">
        <Schedule />
      </section>

      <section>
        <Video />
      </section>

      <section id="Gallery">
        <Gallery />
      </section>

      <section id="Gifting">
        <Gifting />
      </section>
    </div>
  )
}

export default Home
