import React from 'react'
import groomImage from '../assets/Images/groom.png'
import brideImage from '../assets/Images/Bride.png'

const About = () => {
  return (
    <section className='w-[391px] mx-auto flex flex-col gap-[40px] text-gray-800'>
  {/* Groom */}
    <div className='w-full flex flex-col text-center gap-[24px]'>
        <h1 className='text-[24px] font-bold'>MEET THE GROOM</h1>
        <div className='flex flex-col gap-[16px] justify-center items-center'>
            <img src={groomImage} alt='Chuks Okoh' className='w-40 h-40 object-cover rounded-full' />
            <p className='w-full text-[13px] text-[#707A79] leading-relaxed'>
                Hi, Chuks Okoh. An IT specialist who enjoys working behind the scenes to make things run smoothly.
                I’m passionate about <br />problem-solving, and finding quiet joy in the simple things.
                <br />I’m naturally calm and reserved, but being around people I love <br />keeps me going.
                <br />This wedding is more than a ceremony for me. It’s a celebration of love, friendship, faith, and choosing someone over and over <br />again.
                I’m grateful you’re here to share in this special moment with us. <br />💚
            </p>
        </div>
    </div>

  {/* Bride */}
    <div className='flex flex-col items-center text-center gap-[24px]'>
        <h1 className='text-[24px] font-bold'>MEET THE BRIDE</h1>
        <div className='flex flex-col gap-[16px] justify-center items-center'>
            <img src={brideImage} alt='Ayobami Samuel' className='w-40 h-40 rounded-full object-cover shadow-md' />
            <p className='text-sm leading-relaxed text-[#707A79]'>
                Hi, I’m Ayobami Samuel. A product designer who loves good design, good art, and deep, meaningful conversations.
                <br /> I’m passionate about creating beautiful things and making memories with the people I love.
                <br />This website is a little piece of our story — and I’m so glad you’re part of it. 💚
            </p>
        </div>
    </div>
</section>

  )
}

export default About



