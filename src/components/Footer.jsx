import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from '@remixicon/react';

function Footer() {
  return (
    <footer className='max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row justify-between items-center border-t-2 py-4'>
        <div className='flex space-x-6 mb-2'>
          <a
            href='facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit our Facebook page'
          >
            <RiFacebookFill />
          </a>
          <a
            href='Twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit our Twitter page'
          >
            <RiTwitterFill />
          </a>
          <a
            href='Instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit our Instagram page'
          >
            <RiInstagramFill />
          </a>
        </div>
        <p className='text-sm'>&copy;2025 Space-Revo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
