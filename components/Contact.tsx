'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    system: 'Manual Excel / Paper',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission logic
    console.log('Form Submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-sans font-bold mb-6">Ready to automate your business?</h2>
            <p className="text-slate mb-8 text-lg">
              We are currently onboarding select partners for our Beta Program.
              Fill out the form, and we will schedule a free "Data Audit" to see if we can automate your reporting.
            </p>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-ocean rounded-full flex items-center justify-center text-teal mr-4 group-hover:bg-teal group-hover:text-ocean transition">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-sm text-slate uppercase font-bold">Call Us</p>
                  <p className="text-white font-semibold">+230 5976 8093</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-ocean rounded-full flex items-center justify-center text-teal mr-4 group-hover:bg-teal group-hover:text-ocean transition">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-sm text-slate uppercase font-bold">Email Us</p>
                  <p className="text-white font-semibold">hello@morismetrics.mu</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-ocean rounded-full flex items-center justify-center text-teal mr-4 group-hover:bg-teal group-hover:text-ocean transition">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-sm text-slate uppercase font-bold">Location</p>
                  <p className="text-white font-semibold">Mauritius</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-ocean p-8 rounded-2xl border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate mb-2" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition placeholder-slate/40"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate mb-2" htmlFor="businessName">Business Name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition placeholder-slate/40"
                    placeholder="Le Morne Bistro"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate mb-2" htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition placeholder-slate/40"
                      placeholder="+230"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition placeholder-slate/40"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate mb-2" htmlFor="system">Current System (Optional)</label>
                  <select
                    id="system"
                    name="system"
                    value={formData.system}
                    onChange={handleChange}
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition"
                  >
                    <option>Manual Excel / Paper</option>
                    <option>POS System (WinPOS, Odoo, etc)</option>
                    <option>Xero / QuickBooks</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate mb-2" htmlFor="message">Message</label>
                  <textarea
                    rows={3}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition placeholder-slate/40"
                    placeholder="Tell us about your reporting challenges..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal text-ocean font-bold py-4 rounded-lg hover:bg-tealLight transition active:scale-95"
                >
                  Request Free Audit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;