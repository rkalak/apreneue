import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1A1A1A] p-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/images/apreneue-globe-logo MAIN LOGO.png"
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
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
