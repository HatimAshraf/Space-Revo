import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import About from './components/About';

function App() {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
      <Navbar />
      <Hero />
      <Service />
      <Portfolio />
      <About />
    </main>
  );
}

export default App;
