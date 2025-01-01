import { HERO_CONTENT } from '../constants';

function Hero() {
  return (
    <section className='max-w-7xl mx-auto p-2 md:p-4 border-b-2'>
      <div className='flex flex-col items-center my-20'>
        <h1 className='text-6xl md:text-[7rem] lg:text-[10rem] p2 uppercase font-bold'>
          {HERO_CONTENT.title}
        </h1>
        <p className='lg:mt-6 text-sm mb-4 font-medium tracking-tighter'>
          {HERO_CONTENT.subtitle}
        </p>
        <img
          src={HERO_CONTENT.image}
          alt='Hero Image'
          className='w-full
         h-[45vh] lg:h-[85vh] md:h-[75vh] object-conver rounded-2xl p-2'
        />
      </div>
    </section>
  );
}

export default Hero;
