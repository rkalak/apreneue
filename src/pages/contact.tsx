import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <Head>
        <title>Contact — APRENEUE</title>
        <meta name="description" content="Get in touch with us." />
      </Head>

      <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">
        {/* Page Title */}
        <section className="p-4 pt-8">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-1">Contact</p>
          <h1 className="text-sm tracking-[0.05em] uppercase">Get In Touch</h1>
        </section>

        {/* Contact Form */}
        <section className="p-4 py-8 border-t border-[#1A1A1A]">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-4">Send us a message</p>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
            <div>
              <label htmlFor="name" className="block text-[8px] uppercase tracking-[0.1em] text-[#6A6A6A] mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-[9px] bg-transparent border border-[#2A2A2A] text-[#E5E5E5] focus:border-[#4A4A4A] focus:outline-none transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[8px] uppercase tracking-[0.1em] text-[#6A6A6A] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-[9px] bg-transparent border border-[#2A2A2A] text-[#E5E5E5] focus:border-[#4A4A4A] focus:outline-none transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[8px] uppercase tracking-[0.1em] text-[#6A6A6A] mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 text-[9px] bg-transparent border border-[#2A2A2A] text-[#E5E5E5] focus:border-[#4A4A4A] focus:outline-none transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
