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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative w-12 h-12">
            <Image
              src="/images/apreneue-globe-logo MAIN LOGO.png"
              alt="Apreneue"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="/shop"
              className="text-sm tracking-wide text-white uppercase hover:text-accent transition-colors duration-200"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wide text-white uppercase hover:text-accent transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-wide text-white uppercase hover:text-accent transition-colors duration-200"
            >
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 border-t border-border-color' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          <Link
            href="/shop"
            className="block text-sm tracking-wide text-white uppercase hover:text-accent transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block text-sm tracking-wide text-white uppercase hover:text-accent transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-sm tracking-wide text-white uppercase hover:text-accent transition-colors duration-200"
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
