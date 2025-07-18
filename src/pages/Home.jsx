import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from '../components/Header'
import coupleImage1 from '../assets/Images/Hero.png'
import coupleImage2 from '../assets/Images/Hero 1.png'
import coupleImage3 from '../assets/Images/Hero 2.png'

import About from './About'
import Gifting from './Gifting'
import Gallery from './Gallery'
import Schedule from './Schedule'
import FavouriteMoment from './FavouriteMoment'
import CountdownTimer from '../components/CountdownTimer'
import Video from '../components/Video'

const Home = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,            
  autoplaySpeed: 3000,    
  arrows: false
};

  return (
    <div className='max-w-[430px] flex flex-col gap-[64px] bg-[#F6FFF5] m-auto scroll-smooth'>
      <section id="Home" className='w-full flex flex-col space-y-4'>
        <Header />
        <div className="w-full pb-[64px]">
          <Slider {...settings}>
            <div>
              <img src={coupleImage1} alt='Ayobami & Chuks' className='w-full object-cover' />
            </div>
            <div>
              <img src={coupleImage2} alt='Ayobami & Chuks' className='w-full object-cover' />
            </div>
            <div>
              <img src={coupleImage3} alt='Ayobami & Chuks' className='w-full object-cover' />
            </div>
          </Slider>
        </div>
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
