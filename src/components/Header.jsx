import React, { useState } from 'react';
import image from '../assets/Images/Frame 1.png';
import 'primeicons/primeicons.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className='w-full p-3 relative z-50'>
      {/* logo and hamburger */}
      <div className='flex items-center justify-between'>
        <div className='w-[270px] flex gap-[68px] items-center'>
          <img src={image} alt='AC Logo' className='w-full h-full object-contain' />
          <h1 className='text-xl font-bold text-gray-800'>Ebunayo'25</h1>
        </div>
        <button
          onClick={toggleMenu}
          className='text-2xl text-gray-700 hover:text-green-600 transition duration-300'
        >
          <i className='pi pi-bars'></i>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <nav className='absolute top-[125px] right-0 w-[393px] h-[89vh] bg-[#F6FFF5] shadow p-[20px] text-gray-700 font-medium'>
          <div className='flex justify-between items-center mb-[70px]'>
            <img src={image} alt='AC Logo' className='w-[78px]' />
            <button onClick={toggleMenu} className='text-2xl text-gray-700 hover:text-red-500'>
              <i className='pi pi-times'></i>
            </button>
          </div>

          <ul className='w-[228px] flex flex-col gap-[32px]'>
            <li><a href='#Home' onClick={toggleMenu} className='block px-[10px] py-[6px] hover:text-green-600 transition'>Home</a></li>
            <li><a href='#About' onClick={toggleMenu} className='block px-[10px] py-[6px] hover:text-green-600 transition'>Meet Us</a></li>
            <li><a href='#FavouriteMoment' onClick={toggleMenu} className='block px-[10px] py-[6px] hover:text-green-600 transition'>Our Beautiful Moments</a></li>
            <li><a href='#Schedule' onClick={toggleMenu} className='block px-[10px] py-[6px] hover:text-green-600 transition'>Schedule of Events</a></li>
            <li><a href='#Gallery' onClick={toggleMenu} className='block px-[10px] py-[6px] hover:text-green-600 transition'>Photo Gallery</a></li>
            <li><a href='#Gifting' onClick={toggleMenu} className='block px-[10px] py-[6px] hover:text-green-600 transition'>Gifting</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
