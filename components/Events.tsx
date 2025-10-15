import { Dribbble, Trophy, Users, Swords, Brain, Zap, Circle, Square } from 'lucide-react';

const events = [
  {
    id: 'volleyball',
    name: 'Volleyball',
    icon: Circle,
    description: 'High-energy team sport with powerful spikes and strategic plays',
    teamSize: '6v6',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'badminton',
    name: 'Badminton',
    icon: Zap,
    description: 'Fast-paced racket sport testing agility and precision',
    teamSize: 'Singles/Doubles',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'football',
    name: 'Football',
    icon: Dribbble,
    description: 'The beautiful game of skill, strategy, and teamwork',
    teamSize: '11v11',
    color: 'from-emerald-500 to-green-500',
  },
  {
    id: 'kabaddi',
    name: 'Kabaddi',
    icon: Swords,
    description: 'Traditional contact sport combining offense and defense',
    teamSize: '7v7',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'chess',
    name: 'Chess',
    icon: Brain,
    description: 'Battle of minds on the 64-square battlefield',
    teamSize: '1v1',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'khokho',
    name: 'Kho-Kho',
    icon: Users,
    description: 'Traditional Indian tag sport requiring speed and coordination',
    teamSize: '9v9',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'tabletennis',
    name: 'Table Tennis',
    icon: Square,
    description: 'Lightning-fast reflexes meet precision on the table',
    teamSize: 'Singles/Doubles',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 'athletics',
    name: 'Athletics',
    icon: Trophy,
    description: 'Track and field events celebrating speed and endurance',
    teamSize: 'Individual',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function Events() {
  return (
    <section id="events" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Featured Events</h2>
          <p className="section-subtitle">
            Choose your battlefield and showcase your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={event.id}
                className="glass-panel p-6 hover-lift group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {event.name}
                </h3>

                <p className="text-gray-400 mb-4 text-sm">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Team Size</span>
                  <span className="text-sm font-semibold text-cyan-400">{event.teamSize}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
