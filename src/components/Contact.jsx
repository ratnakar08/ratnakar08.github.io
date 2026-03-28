import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-black border-t border-black dark:border-white text-black dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">Get In Touch</h2>

        <div className="space-y-8 mb-12">
          <p className="text-lg opacity-70 leading-relaxed">
            I'm always interested in hearing about new projects. Feel free to reach out if you'd like to collaborate.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 flex-shrink-0 mt-1 opacity-70" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a href="mailto:kotaratna225@gmail.com" className="opacity-70 hover:opacity-100 transition-opacity">
                  kotaratna225@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
              <label htmlFor="name" className="block text-sm mb-2 font-semibold uppercase tracking-wide opacity-60">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-2 border-b border-black dark:border-white bg-transparent focus:outline-none focus:border-black dark:focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2 font-semibold uppercase tracking-wide opacity-60">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-2 border-b border-black dark:border-white bg-transparent focus:outline-none focus:border-black dark:focus:border-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 font-semibold uppercase tracking-wide opacity-60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-0 py-2 border-b border-black dark:border-white bg-transparent focus:outline-none focus:border-black dark:focus:border-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors text-sm font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    );
  }
