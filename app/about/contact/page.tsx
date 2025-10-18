'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello StationeryHub! I'm ${formData.name}. ${formData.message}. Contact me at ${formData.email} or ${formData.phone}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/26775560140?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SH</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">StationeryHub</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions? Need a quote? We're here to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="john@company.co.bw"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="+267 XXX-XXXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Tell us about your office supply needs..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp Business</h3>
                  <p className="text-gray-600">Quick answers, fast quotes</p>
                  <a href="https://wa.me/26775560140" className="text-green-600 font-semibold">
                    Chat Now →
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">Mon-Fri, 8AM-5PM</p>
                  <p className="text-gray-900 font-semibold">+267 75560140</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">For detailed inquiries</p>
                  <p className="text-gray-900 font-semibold">sales@stationeryhub.co.bw</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
