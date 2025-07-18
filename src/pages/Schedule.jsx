import React from 'react'
import leave from '../assets/Images/Leave.png';


const events = [
  { title: 'TRADITIONAL WEDDING', time: '08:00 AM' },
  { title: 'CHURCH WEDDING',      time: '11:00 AM' },
  { title: 'RECEPTION',           time: '01:00 PM' },
];

const Divider = () => (
  <div className="flex items-center justify-center gap-2">
    <span className="flex-1 h-px bg-green-700" />
    <span className="w-2 h-2 rounded-full bg-green-700" />
    <span className="flex-1 h-px bg-green-700" />
  </div>
);

const Schedule = () => {
  return (
    <section className="relative max-w-[391px] flex flex-col gap-[24px] mx-auto overflow-hidden bg-[#F8FAF8] text-center text-gray-900">
    
        {/* header */}
        <div className="bg-[#F6FFF5]">
        <Divider />
        <h2 className="text-2xl font-bold tracking-widest py-4">SCHEDULE</h2>
        <Divider />
        </div>

        <div className='flex flex-col gap-10'>
            {/* top and bottom thick bars */}
            <div className="h-4 bg-green-900" />

            {/* timeline */}
            <div className="space-y-10 pb-14 px-6">
                {events.map(({ title, time }) => (
                    <div key={title} className="flex flex-col gap-4">
                        <h3 className="text-xl italic tracking-wide">{title}</h3>
                        <p className="text-sm font-semibold">{time}</p>
                        <Divider />
                    </div>
                ))}
            </div>

            {/* leaves decoration */}
            <img
            src={leave}
            alt=""
            className="absolute bottom-0 left-1/2 w-[120%] max-w-none -translate-x-1/2 pointer-events-none select-none"
            />

            {/* bottom thick bar */}
            <div className="h-4 bg-green-900" />
        </div>
    </section>

  )
}

export default Schedule
