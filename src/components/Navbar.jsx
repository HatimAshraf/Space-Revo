import { useState } from 'react';
import logo from '../assets/icon.png';
import { RiCloseLine, RiMenu3Line } from '@remixicon/react';
import { LINKS } from '../constants';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='border-b-2'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-8'>
        <div className='pl-2'>
          <a href='#'>
            <img src={logo} alt='logo' width={50} height={20} />
          </a>
        </div>
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-2xl pr-2 focus:outline-none'
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        <div className='hidden md:flex space-x-8 md:space-x-4 pr-2'>
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className='uppercase text-sm font-medium'
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute backdrop-blur-lg group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center w-full py-5 px-4 my-8 `}
      >
        {LINKS.map((link, index) => (
          <a
            href={link.link}
            key={index}
            className='uppercase text-xl font-bold block py-2 tracking-wide'
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
