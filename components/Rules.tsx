import { Shield, Users, Clock, Trophy } from 'lucide-react';

const rules = [
  {
    icon: Users,
    title: 'Team Composition',
    description: 'All team members must be registered participants. Substitutions allowed as per official rules of each sport.',
  },
  {
    icon: Clock,
    title: 'Punctuality',
    description: 'Teams must report 15 minutes before scheduled time. Late arrivals may result in disqualification.',
  },
  {
    icon: Shield,
    title: 'Fair Play',
    description: 'All participants must adhere to the spirit of fair play. Unsportsmanlike conduct will not be tolerated.',
  },
  {
    icon: Trophy,
    title: 'Scoring System',
    description: 'Points awarded based on performance. Top teams advance to knockout stages. Ties resolved per sport-specific rules.',
  },
];

const sportRules = [
  {
    sport: 'Football',
    rules: ['11 players per team', '2 halves of 20 minutes each', 'Standard FIFA rules apply', 'Penalty shootout for ties'],
  },
  {
    sport: 'Volleyball',
    rules: ['6 players per team', 'Best of 3 sets', 'First to 25 points wins set', 'Rally scoring system'],
  },
  {
    sport: 'Badminton',
    rules: ['Singles and doubles format', 'Best of 3 games to 21 points', 'Standard BWF rules', 'Knockout format'],
  },
  {
    sport: 'Kabaddi',
    rules: ['7 players per team', '2 halves of 15 minutes', 'Standard raid and tackle rules', 'Bonus points applicable'],
  },
];

export default function Rules() {
  return (
    <section id="rules" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Rules & Format</h2>
          <p className="section-subtitle">
            Guidelines to ensure fair and competitive play
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={index}
                className="glass-panel p-6 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="text-cyan-400 mb-4" size={36} />
                <h3 className="text-xl font-bold mb-3">{rule.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{rule.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Sport-Specific Rules
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sportRules.map((sport, index) => (
              <div
                key={index}
                className="glass-panel p-6 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-2xl font-bold mb-4 text-cyan-400">{sport.sport}</h4>
                <ul className="space-y-2">
                  {sport.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span className="text-gray-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
