import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>APRENEUE</title>
        <link rel="icon" href="/images/apreneue-favicon.png" />
        <meta name="description" content="Synthesizing art and engineering into fashion and functional product design." />
      </Head>

      <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1A1A1A]">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="text-[9px] tracking-[0.15em] uppercase">Apreneue</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="#work" className="nav-link">Work</a>
              <Link href="/methodology" className="nav-link">Methodology</Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="h-[70vh] relative pt-12">
          <img
            src="/images/apre1.jpg"
            alt="Apreneue"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute bottom-0 left-0 p-4 pb-8">
            <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-1">Spring 2025</p>
            <h1 className="text-sm tracking-[0.05em] uppercase">Form From Function</h1>
          </div>
        </section>

        {/* Gallery Grid */}
        <section id="work" className="grid grid-cols-2 gap-px">
          <div className="aspect-square bg-[#1A1A1A] relative">
            <img
              src="/images/topology-2.png"
              alt="Topology"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-[#1A1A1A] relative">
            <img
              src="/images/aprescroll.jpg"
              alt="Collection"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </section>

        {/* Product Grid */}
        <div className="category-header flex items-center justify-between">
          <span>Products</span>
          <a href="#" className="nav-link">View All</a>
        </div>

        <section className="grid-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="product-tile">
                <div className="absolute inset-0 flex items-end p-2">
                  <span className="text-[7px] uppercase tracking-widest text-[#4A4A4A]">
                    Product {i}
                  </span>
                </div>
              </div>
              <div className="product-info px-2">
                <p className="product-title">Product Name</p>
                <p className="product-price">$XXX</p>
              </div>
            </div>
          ))}
        </section>

        {/* Full Width Image */}
        <section className="h-[40vh] relative">
          <img
            src="/images/apre2.jpg"
            alt="Featured"
            className="w-full h-full object-cover opacity-40"
          />
        </section>

        {/* Newsletter */}
        <section className="p-4 py-8 border-t border-[#1A1A1A]">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-2">Newsletter</p>
          <p className="text-[9px] text-[#6A6A6A] mb-3">
            Subscribe for updates.
          </p>
          <div className="flex gap-2 max-w-xs">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-3 py-2 text-[9px] border border-[#2A2A2A] bg-transparent text-[#E5E5E5] focus:outline-none focus:border-[#4A4A4A]"
            />
            <button className="btn">Subscribe</button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#1A1A1A] p-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/images/apreneue-globe-logo.png"
                alt="Apreneue"
                className="w-3 h-3 invert opacity-40"
              />
              <span className="text-[8px] tracking-[0.1em] uppercase text-[#4A4A4A]">
                Apreneue
              </span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="footer-link">Instagram</a>
              <a href="#" className="footer-link">Twitter</a>
            </div>
            <p className="text-[8px] text-[#4A4A4A]">
              © 2024
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
