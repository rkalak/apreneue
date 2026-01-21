import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#1A1A1A] ${
        isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-sm' : 'bg-[#0A0A0A]/90 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-4 h-4">
            <Image
              src="/images/apreneue-globe-logo MAIN LOGO.png"
              alt="Apreneue"
              fill
              className="object-contain invert opacity-60"
              priority
            />
          </div>
          <span className="text-[9px] tracking-[0.15em] uppercase">Apreneue</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/shop" className="nav-link">
            Shop
          </Link>
          <Link href="/about" className="nav-link">
            Methodology
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0A0A0A] transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 border-t border-[#1A1A1A]' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Methodology
          </Link>
          <Link
            href="/contact"
            className="block nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
