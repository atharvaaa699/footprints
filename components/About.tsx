import { Calendar, MapPin, Trophy, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Trophy, label: '8+ Sports', value: 'Multiple Events' },
    { icon: Users, label: '500+ Athletes', value: 'Expected' },
    { icon: Calendar, label: 'March 15-17', value: '2025' },
    { icon: MapPin, label: 'Campus Arena', value: 'Main Grounds' },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">About Footprints</h2>
          <p className="section-subtitle">
            Igniting the spirit of competition and camaraderie
          </p>
        </div>

        <div className="glass-panel max-w-4xl mx-auto p-8 md:p-12 mb-12 animate-fade-in-up">
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Footprints is our flagship annual sports festival that brings together athletes, enthusiasts, and spectators for three days of intense competition and celebration. Since its inception, Footprints has become a cornerstone event that showcases talent, builds character, and creates lasting memories.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            With a diverse lineup of sports ranging from traditional team games like football and volleyball to strategic contests like chess, Footprints offers something for everyone. Our mission is to foster sportsmanship, teamwork, and excellence while creating an electrifying atmosphere of healthy competition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-panel p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="mx-auto mb-4 text-cyan-400" size={40} />
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {stat.label}
                </div>
                <div className="text-gray-400">{stat.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
