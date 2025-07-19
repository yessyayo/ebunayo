import React from 'react'
import groomImage from '../assets/Images/Groom.png'
import brideImage from '../assets/Images/Bride.png'

const About = () => {
  return (
    <section className='max-w-[400px] mx-auto flex flex-col gap-[40px] text-gray-800 px-4 pb-10'>
      {/* Groom */}
      <div className='flex flex-col items-center text-center gap-[24px]'>
        <h1 className='text-[24px] font-bold'>MEET THE GROOM</h1>
        <img src={groomImage} alt='Chuks Okoh' className='w-40 h-40 object-cover rounded-full' />
        <div className='text-[13px] text-[#707A79] leading-relaxed space-y-3'>
          <p>Hi, Chuks Okoh. An IT specialist who enjoys working behind the scenes to make things run smoothly. I’m passionate about problem-solving and finding quiet joy in the simple things.</p>
          <p>I’m naturally calm and reserved, but being around people I love keeps me going.</p>
          <p>This wedding is more than a ceremony for me. It’s a celebration of love, friendship, faith, and choosing someone over and over again.</p>
          <p>I’m grateful you’re here to share in this special moment with us. 💚</p>
        </div>
      </div>

      {/* Bride */}
      <div className='flex flex-col items-center text-center gap-[24px]'>
        <h1 className='text-[24px] font-bold'>MEET THE BRIDE</h1>
        <img src={brideImage} alt='Ayobami Samuel' className='w-40 h-40 object-cover rounded-full' />
        <div className='text-[13px] text-[#707A79] leading-relaxed space-y-3'>
          <p>Hi, I’m Ayobami Samuel. A product designer who loves good design, good art, and deep, meaningful conversations.</p>
          <p>I’m passionate about creating beautiful things and making memories with the people I love.</p>
          <p>This website is a little piece of our story — and I’m so glad you’re part of it. 💚</p>
        </div>
      </div>
    </section>
  )
}

export default About
