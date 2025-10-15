import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Rules from './components/Rules';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <ParallaxBackground scrollY={scrollY} />
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Schedule />
      <Rules />
      <Registration />
      <Gallery />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
