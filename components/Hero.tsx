import { ChevronDown, Flame } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
        <div className="floating-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Flame className="text-orange-500" size={48} />
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent">
              IGNITIA
            </h1>
            <Flame className="text-orange-500" size={48} />
          </div>

          <p className="text-2xl md:text-4xl font-light mb-4 text-cyan-300">
            Annual Sports Festival
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Where passion meets performance. Join us for the ultimate celebration of sportsmanship and competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Register Now
            </button>
            <button
              onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Events
            </button>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-cyan-400" size={40} />
        </button>
      </div>
    </section>
  );
}
