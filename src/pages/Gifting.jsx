import React from 'react'
import image from '../assets/Images/bg.jpg'

const Gifting = () => {
  return (
    <section className='relative w-full py-10'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat z-0'
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Colored Overlay (semi-transparent) */}
      <div className='absolute inset-0 bg-[#EAEBEB]/90 z-0' />

      {/* Content Wrapper (must be positioned relative with z-10) */}
      <div className='relative z-10 max-w-[391px] mx-auto text-center space-y-6'>
        <div className='flex flex-col items-center gap-4'>
          {/* Top line with center dot */}
          <div className='flex items-center justify-center w-full max-w-md'>
            <div className='flex-grow h-[2px] bg-[#0E7C29]' />
            <div className='h-2 w-2 rounded-full bg-[#0E7C29] mx-2' />
            <div className='flex-grow h-[2px] bg-[#0E7C29]' />
          </div>

          {/* Centered Heading */}
          <h2 className='uppercase text-lg font-semibold text-gray-800 text-center'>
            with love, from us
          </h2>

          {/* Bottom line with center dot */}
          <div className='flex items-center justify-center w-full max-w-md'>
            <div className='flex-grow h-[2px] bg-[#0E7C29]' />
            <div className='h-2 w-2 rounded-full bg-[#0E7C29] mx-2' />
            <div className='flex-grow h-[2px] bg-[#0E7C29]' />
          </div>
        </div>

        <div className='text-[14px] text-[#2A3837]'>
            {/* Gratitude Text */}
            <p>
            We’re so grateful to have you celebrate this special moment in our lives. Your love, prayers, and presence mean everything to <br /> us — and that’s truly the greatest gift.
            <br />But if you’d like to go a step further and give a gift, we’ve put together a small wish list to make it easier. Every kind gesture, no matter how small, is deeply appreciated. 💚
            Thank you for being part of our story.
            </p>

            {/* Optional Gift Info */}
            <p>
            If you’d like to send us a gift, we’ve created a little wishlist—or you can send us a cash gift using the account <br /> below:
            </p>

            {/* Account Info */}
            <div>
            <p className='font-bold'>0148409041</p>
            <p className='font-bold'>Guaranty Trust Bank</p>
            <p className='font-bold'>Samuel Ayobami Mauyon</p>
            </div>
        </div>

        {/* Wishlist Button */}
        <div className='text-center mt-4'>
          <a
            href='https://wishgum.com/w/ebunayo-25'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-[#0D7125] text-white text-[14px] font-semibold px-4 py-2'
          >
            View our Wishlist
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gifting
