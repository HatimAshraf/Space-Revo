import aboutImage from '../assets/about.webp';
import { ABOUT } from '../constants';

function About() {
  return (
    <section className='max-w-7xl mx-auto p-2 md:p-4 border-b-2' id='about'>
      <div className='my-20'>
        <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4'>
          About
        </h2>
        <div className='flex flex-col items-center mx-8 lg:space-x-8 mb-20'>
          <div className='mb-8 lg:mb-0'>
            <img
              src={aboutImage}
              alt='About Space-revo'
              className='w-full h-auto'
            />
          </div>
          <p className='max-w-5xl mx-auto text-lg lg:text-3xl font-light text-center lg:text-left mt-8 '>
            {ABOUT.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
