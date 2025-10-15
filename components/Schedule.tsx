import { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const schedule = {
  day1: [
    { time: '08:00 AM', event: 'Opening Ceremony', venue: 'Main Arena' },
    { time: '09:00 AM', event: 'Football - Group Stage', venue: 'Field A' },
    { time: '09:30 AM', event: 'Volleyball - Preliminaries', venue: 'Court 1' },
    { time: '10:00 AM', event: 'Badminton - Round 1', venue: 'Indoor Stadium' },
    { time: '11:00 AM', event: 'Chess - Opening Rounds', venue: 'Conference Hall' },
    { time: '02:00 PM', event: 'Kabaddi - Pool Matches', venue: 'Field B' },
    { time: '03:00 PM', event: 'Kho-Kho - Qualifiers', venue: 'Court 2' },
    { time: '04:00 PM', event: 'Table Tennis - Preliminaries', venue: 'Indoor Stadium' },
  ],
  day2: [
    { time: '08:00 AM', event: 'Athletics - Track Events', venue: 'Main Track' },
    { time: '09:00 AM', event: 'Football - Quarter Finals', venue: 'Field A' },
    { time: '10:00 AM', event: 'Volleyball - Semi Finals', venue: 'Court 1' },
    { time: '11:00 AM', event: 'Badminton - Quarter Finals', venue: 'Indoor Stadium' },
    { time: '01:00 PM', event: 'Chess - Semi Finals', venue: 'Conference Hall' },
    { time: '02:00 PM', event: 'Kabaddi - Semi Finals', venue: 'Field B' },
    { time: '03:30 PM', event: 'Kho-Kho - Semi Finals', venue: 'Court 2' },
    { time: '04:30 PM', event: 'Table Tennis - Semi Finals', venue: 'Indoor Stadium' },
  ],
  day3: [
    { time: '08:00 AM', event: 'Athletics - Field Events', venue: 'Main Track' },
    { time: '10:00 AM', event: 'Football - Finals', venue: 'Field A' },
    { time: '11:30 AM', event: 'Volleyball - Finals', venue: 'Court 1' },
    { time: '01:00 PM', event: 'Badminton - Finals', venue: 'Indoor Stadium' },
    { time: '02:00 PM', event: 'Chess - Finals', venue: 'Conference Hall' },
    { time: '03:00 PM', event: 'Kabaddi - Finals', venue: 'Field B' },
    { time: '04:00 PM', event: 'Kho-Kho - Finals', venue: 'Court 2' },
    { time: '05:00 PM', event: 'Table Tennis - Finals', venue: 'Indoor Stadium' },
    { time: '06:00 PM', event: 'Closing Ceremony & Awards', venue: 'Main Arena' },
  ],
};

const days = [
  { key: 'day1', label: 'Day 1', date: 'March 15' },
  { key: 'day2', label: 'Day 2', date: 'March 16' },
  { key: 'day3', label: 'Day 3', date: 'March 17' },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2' | 'day3'>('day1');

  return (
    <section id="schedule" className="relative py-24 bg-slate-950/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Event Schedule</h2>
          <p className="section-subtitle">
            Three days of non-stop action and competition
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {days.map((day) => (
            <button
              key={day.key}
              onClick={() => setActiveDay(day.key as 'day1' | 'day2' | 'day3')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeDay === day.key
                  ? 'btn-primary'
                  : 'glass-panel hover:bg-white/10'
              }`}
            >
              <div className="text-sm">{day.label}</div>
              <div className="text-xs opacity-80">{day.date}</div>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {schedule[activeDay].map((item, index) => (
              <div
                key={index}
                className="glass-panel p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-2 text-cyan-400 min-w-[120px]">
                    <Clock size={18} />
                    <span className="font-semibold">{item.time}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{item.event}</h3>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={18} />
                    <span className="text-sm">{item.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
