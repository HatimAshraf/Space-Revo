import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';

function App() {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
      <Navbar />
      <Hero />
      <Service />
    </main>
  );
}

export default App;
