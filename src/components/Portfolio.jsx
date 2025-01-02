import { PORTFOLIO_HEADINGS, PORTFOLIO_PROJECTS } from '../constants';

function Portfolio() {
  return (
    <section className='max-w-7xl mx-auto border-b-2' id='portfolio'>
      <div className='mb-20'>
        <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12'>
          {PORTFOLIO_HEADINGS.title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {PORTFOLIO_PROJECTS.map((portfolio, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-3xl mx-4 '
            >
              <img
                src={portfolio.image}
                alt={portfolio.name}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 flex flex-col justify-center opacity-0 backdrop-blur-lg group-hover:opacity-100 transition-opacity duration-500 p-4'>
                <h3 className='text-xl font-medium uppercase mb-2'>
                  {portfolio.name}
                </h3>
                <p className='mb-12'>{portfolio.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
