import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Registration() {
  const [formData, setFormData] = useState({
    teamName: '',
    sport: '',
    captainName: '',
    email: '',
    phone: '',
    participants: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const sports = [
    'Volleyball',
    'Badminton',
    'Football',
    'Kabaddi',
    'Chess',
    'Kho-Kho',
    'Table Tennis',
    'Athletics',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        teamName: '',
        sport: '',
        captainName: '',
        email: '',
        phone: '',
        participants: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="registration" className="relative py-24 bg-slate-950/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Register Your Team</h2>
          <p className="section-subtitle">
            Secure your spot in Footpeints 2025
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="glass-panel p-12 text-center animate-fade-in-up">
              <CheckCircle className="mx-auto mb-6 text-emerald-400" size={64} />
              <h3 className="text-3xl font-bold mb-4">Registration Successful!</h3>
              <p className="text-gray-400">
                We have received your registration. Our team will contact you shortly with further details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 animate-fade-in-up">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-400">
                    Team Name
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-400">
                    Select Sport
                  </label>
                  <select
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Choose a sport</option>
                    {sports.map((sport) => (
                      <option key={sport} value={sport}>
                        {sport}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-400">
                    Captain Name
                  </label>
                  <input
                    type="text"
                    name="captainName"
                    value={formData.captainName}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-cyan-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-cyan-400">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-400">
                    Team Members (One per line)
                  </label>
                  <textarea
                    name="participants"
                    value={formData.participants}
                    onChange={handleChange}
                    rows={5}
                    className="form-input"
                    placeholder="John Doe&#10;Jane Smith&#10;Mike Johnson"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  <Send size={20} className="mr-2" />
                  Submit Registration
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
