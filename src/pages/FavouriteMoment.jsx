import React, { useState } from 'react';
import image1 from '../assets/Images/Image 1.png';
import image2 from '../assets/Images/Image 2.png';
import image3 from '../assets/Images/Image 3.png';
import image4 from '../assets/Images/Image 4.png';  // <-- give img4 its own file
import image5 from '../assets/Images/Image 5.png';

const moments = [
    // image 1
  {
    image: image1,
    title: 'Our First Trip Together',
    date:  '05‑01‑2020',
    text:  `After we met in 2019, Chuks travelled that same week, and what followed was weeks of us talking and getting to know each other as friends, all online.

Fast forward to January 5th, we had both spent the holidays with our families and were meant to return to Ibadan. We decided to travel together from Ogun State to Oyo State. It was simple, but so special.

That trip became one of our most unforgettable bonding moments — lots of gist, laughs, and quiet glances. Nothing fancy, just the beginning of something we didn’t even know was growing.`,
  },

// image 2
  {
    image: image2,
    title: 'Our First Real Hangout',
    date:  '23‑02‑2020',
    text:  `It was the night after an election at the corper’s lodge, Ayobami had just contested for ACLO and didn’t win. Naturally, She wasn’t feeling the best.

        Then Chuks, with his usual calm presence, suggested we take one of our aimless strolls around the barracks. (Something we had already made a habit of)

        Somehow, that stroll led us all the way to Chicken Republic in Mokola, both of us in flip-flops, unbothered and just enjoying each other's company.

        No fancy plans, no pressure,  just two people walking, talking, and laughing their way into something special.
        Definitely a night to remember. 💚
    `,
  },

//   image 3
   {
    image: image3,
    title: 'Our First Party Together',
    date:  '07‑03‑2020',
    text:  `Our first “party” together wasn’t anything fancy. Just a dinner organized for one of the NYSC batches. We arrived late and ended up sitting outside.

        Honestly? We didn’t enjoy the party much. But somehow, having each other there made it bearable.

        It wasn’t about the music or the crowd. It was just us, sharing glances, inside jokes, and another quiet memory that became part of our story. 💚
    `,
  },

//   image 4
  {
    image: image4,
    title: 'Our Introduction',
    date:  '22‑02‑2025',
    text:  `The moment we knew we were ready for a lifetime commitment to each other, we also knew it was time to bring our families into the journey.

        On February 22nd, 2025, we had our introduction ceremony — a beautiful, heartfelt day surrounded by our families and loved ones.

        It was filled with laughter, prayers, and warm embraces — a celebration of not just our love, but the two families becoming one. 💚
    `,
    linkLabel: 'see picture',
    linkUrl:   'https://drive.google.com/drive/folders/1cxT_Ky0Tm5a8jwDQjVfpY7YI3hGnbpDT',
  },

//   image 5
{
    image: image5,
    title: 'Our Wedding',
    date:  '09‑08‑2025',
    text:  `If you got to this point, we guess you already know we’re getting married on the 9th of August, 2025. We look forward to celebrating and sharing our special day with you.`,
  },
];

const LineDot = () => (
  <div className="flex items-center justify-center gap-2">
    <span className="flex-1 h-[1.5px] bg-[#0E7C29]" />
    <span className="w-[6px] h-[6px] rounded-full bg-green-700" />
    <span className="flex-1 h-[1.5px] bg-[#0E7C29]" />
  </div>
);

export default function FavouriteMoment() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? moments : moments.slice(0, 1);

  return (
    <section className="max-w-[391px] mx-auto text-center space-y-6">
      {/* heading */}
      <LineDot />
      <h2 className="px-4 text-[24px] text-[#121817] font-bold leading-tight tracking-wide">
        SOME OF OUR FAVORITE<br />MOMENTS
      </h2>
      <LineDot />

      {/* moment cards */}
      {visible.map(({ image, title, date, text, linkLabel, linkUrl }) => (
        <div key={title} className="flex flex-col gap-[24px] relative overflow-hidden">
          {/* If this moment has linkUrl, wrap the <img> in <a> */}
        
            <div>
                <img
                    src={image}
                    alt={title}
                    className="w-[218px] h-[291px] mx-auto object-cover"
                />
            </div>

          {/* story box */}
           <div className="flex flex-col gap-[16px] bg-[#E7F2EA] rounded-md p-4">
                <div className='flex flex-col gap-[8px] text-[14px]'>
                    <h3 className="text-[#707A79] font-semibold">
                        ⭐ {title}
                    </h3>
                    <p className="text-[] text-[#9DA3A3] text-center italic">
                        {date}
                    </p>
                </div>

                <div className="flex flex-col text-[12px] leading-relaxed text-center">
                    {/* main story text */}
                    <span className="whitespace-pre-line">{text}</span>

                    {/* see‑picture link (only for the moment that has linkUrl) */}
                    {linkLabel && linkUrl && (
                        <a
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-2 py-2 border-b-2 border-green-600 text-[12px] font-medium self-center mb-4"
                        >
                        {linkLabel}
                        </a>
                    )}
                </div>
            </div>
        </div>
      ))}

      {/* toggle button */}
      <button
        onClick={() => setShowAll((p) => !p)}
        className="mb-6 bg-[#0D7125] px-6 py-2 text-white text-sm font-semibold tracking-wide hover:bg-green-800 active:scale-95 transition"
      >
        {showAll ? 'View Less' : 'View More'}
      </button>
    </section>
  );
}
