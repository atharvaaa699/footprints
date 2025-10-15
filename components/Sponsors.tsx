import { Award } from 'lucide-react';

const sponsors = {
  title: [
    { name: 'SportsCo', tier: 'Title Sponsor' },
  ],
  platinum: [
    { name: 'TechGiant', tier: 'Platinum' },
    { name: 'EnergyDrink Pro', tier: 'Platinum' },
  ],
  gold: [
    { name: 'Athletic Wear', tier: 'Gold' },
    { name: 'Nutrition Plus', tier: 'Gold' },
    { name: 'Fitness First', tier: 'Gold' },
  ],
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 bg-slate-950/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Our Sponsors</h2>
          <p className="section-subtitle">
            Powered by our amazing partners
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-orange-400">Title Sponsor</h3>
            {sponsors.title.map((sponsor, index) => (
              <div key={index} className="glass-panel p-12 hover-lift inline-block">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-4xl font-bold">{sponsor.name}</h4>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">Platinum Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsors.platinum.map((sponsor, index) => (
                <div key={index} className="glass-panel p-8 hover-lift">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold">{sponsor.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-yellow-400">Gold Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sponsors.gold.map((sponsor, index) => (
                <div key={index} className="glass-panel p-6 hover-lift">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-bold">{sponsor.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
