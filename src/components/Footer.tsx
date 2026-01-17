import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-border-color">
      <div className="mx-auto max-w-container px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">APRENEUE</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Minimalistic. Tech-forward. Premium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-text-secondary text-sm hover:text-white transition-colors duration-200"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-text-secondary text-sm hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-secondary text-sm hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-text-secondary text-sm hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary text-sm hover:text-white transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary text-sm hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border-color text-center">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Apreneue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
