import React, { useEffect, useState } from 'react'
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
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  if (!isMobile) {
    return (
      <div className="h-screen flex items-center justify-center text-center px-4 bg-[#F6FFF5]">
        <p className="text-xl font-semibold text-gray-700">
          This website is only available on mobile devices. <br />
          Please view it on your phone.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className='overflow-x-hidden'>
        <Header /> 

        <section id="Home" className="w-full flex flex-col space-y-4">
            <div className="w-full pb-[64px]">
              <Slider {...settings}>
                <div>
                  <img
                    src={coupleImage1}
                    alt="Ayobami & Chuks"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <img
                    src={coupleImage2}
                    alt="Ayobami & Chuks"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <img
                    src={coupleImage3}
                    alt="Ayobami & Chuks"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Slider>
            </div>
            <CountdownTimer />
          </section>
        <div className="w-full max-w-[375px] mx-auto flex flex-col gap-[64px] bg-[#F6FFF5] scroll-smooth pt-[120px]">

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
      </div>
    </>
  )
}

export default Home
