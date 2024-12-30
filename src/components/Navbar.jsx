import { useState } from 'react';
import logo from '../assets/logo.png';
import { RiCloseLine, RiMenu3Line } from '@remixicon/react';

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
            <img src={logo} alt='logo' width={175} height={35} />
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
      </div>
    </nav>
  );
}

export default Navbar;
