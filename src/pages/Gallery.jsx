import React from 'react'

const Gallery = () => {
  return (
   <section className="max-w-[391px] mx-auto text-center  space-y-6">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
      {/* Top line with center dot */}
      <div className="flex items-center justify-center w-full max-w-md">
        <div className="flex-grow h-[2px] bg-[#0E7C29]" />
        <div className="h-2 w-2 rounded-full bg-[#0E7C29] mx-2" />
        <div className="flex-grow h-[2px] bg-[#0E7C29]" />
      </div>

      {/* Centered Heading */}
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        OUR WEDDING PHOTO GALLERY
      </h2>

      {/* Bottom line with center dot */}
      <div className="flex items-center justify-center w-full max-w-md">
        <div className="flex-grow h-[2px] bg-[#0E7C29]" />
        <div className="h-2 w-2 rounded-full bg-[#0E7C29] mx-2" />
        <div className="flex-grow h-[2px] bg-[#0E7C29]" />
      </div>
      </div>
      
      {/* Message */}
      <p className="text-sm text-[#707A79] leading-relaxed">
        Our wedding day was filled with joy, love, and unforgettable moments — and we know some of the best memories were captured by <strong>you</strong>.
        <br /><br />
        We’d love to see the day from your perspective — the candid laughs, the dance floor magic, and the beautiful chaos in between.
        <br />  We’ve created a simple Google Drive upload folder where you can drop your favorite photos and videos from the day.
      </p>


      {/* Upload Button */}
      <div>
        <a
          href="https://drive.google.com/drive/folders/1Cqsrzy4cCL9Qq9JmyvUkKwqCZGsETtNP" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block  text-green-600 text-sm font-semibold"
        >
          👉 <span className='underline'>Click here to upload to our wedding album</span>
        </a>
      </div>

      {/* Upload Description */}
      <p className="text-[14px] text-[#9DA3A3]">
        No sign-in required. You can upload directly from your phone — as many photos as you like!
      </p>

    </section>
  )
}

export default Gallery
