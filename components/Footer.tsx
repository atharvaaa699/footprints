import { Facebook, Twitter, Instagram, Youtube, Mail, Flame } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="text-orange-500" size={32} />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              FOOTPRINTS
              </h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The ultimate annual sports festival bringing together athletes, passion, and competition. Join us in celebrating the spirit of sportsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Footprints
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-400 hover:text-white transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#registration" className="text-gray-400 hover:text-white transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>energyclubpsit@gmail.com</span>
              </li>
              <li>Campus Main Grounds</li>
              <li>University Arena Complex</li>
              <li>March 15-17, 2025</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {currentYear} Footprints Sports Festival. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
