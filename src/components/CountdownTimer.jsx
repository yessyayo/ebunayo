import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('2025-08-09T00:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.ceil(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div className='w-[390px] h-[465px] flex flex-col gap-[30px] rounded-[36px] bg-[#063411] py-6 m-auto shadow'>
      {/* Countdown Text */}
      <h3 className='w-[342px] text-lg font-semibold text-white m-auto text-center'>
        LET THE COUNTDOWN BEGIN! <br /> 9TH AUG, 2025
      </h3>

      {/* Countdown Timer */}
      <div className='w-[342px] h-[294px] grid grid-cols-2 gap-4 text-center m-auto'>
        {[
          { value: timeLeft.days, label: 'DAYS' },
          { value: timeLeft.hours, label: 'HOURS' },
          { value: timeLeft.minutes, label: 'MINUTES' },
          { value: timeLeft.seconds, label: 'SECONDS' },
        ].map((item, index) => (
          <div key={index} className='w-[135px] h-[135px] flex flex-col justify-center gap-[8px] bg-[#0E7C29] rounded-[20px] m-auto'>
            <div className='text-[48px] font-bold text-white'>{String(item.value).padStart(2, '0')}</div>
            <div className='text-[16px] text-[#EAEBEB]'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
