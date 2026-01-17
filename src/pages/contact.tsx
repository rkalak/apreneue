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

      <div className="min-h-screen bg-black">
        {/* Hero */}
        <section className="py-24 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We'd love to hear from you
          </p>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-6 pb-32">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wide mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-transparent border border-border-color text-white focus:border-accent focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-wide mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-transparent border border-border-color text-white focus:border-accent focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-wide mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-transparent border border-border-color text-white focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-12 py-4 bg-accent text-white uppercase text-sm tracking-wide hover:scale-[1.02] transition-transform duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
