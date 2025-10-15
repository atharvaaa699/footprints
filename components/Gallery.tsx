import { Play } from 'lucide-react';

const galleryItems = [
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Football Action',
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Volleyball Spike',
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Badminton Match',
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Team Celebration',
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Track Events',
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Chess Tournament',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Highlights from previous editions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-video hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-cyan-500/50 transition-colors">
                    <Play className="text-white" size={28} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
