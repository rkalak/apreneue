import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Methodology: React.FC = () => {
  return (
    <>
      <Head>
        <title>Methodology — APRENEUE</title>
        <link rel="icon" href="/images/aprefavicon.png" />
        <meta name="description" content="Topology optimization and computational design methodology." />
      </Head>

      <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1A1A1A]">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-[9px] tracking-[0.15em] uppercase">Apreneue</span>
            </Link>
            <div className="flex items-center gap-5">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/methodology" className="nav-link text-[#E5E5E5]">Methodology</Link>
            </div>
          </div>
        </nav>

        {/* Hero spacer for nav */}
        <div className="pt-12"></div>

        {/* About Section */}
        <section className="p-4 py-16 border-t border-[#1A1A1A]">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#6A6A6A] mb-6">About</p>
          <div className="max-w-2xl">
            <p className="text-[14px] md:text-[16px] text-[#C0C0C0] leading-relaxed mb-6">
              Apreneue is synthesizing art and engineering into a novel landscape for fashion and functional product design. Our north star is to influence both wardrobes and living spaces with an industrial, biomimetic permanence.
            </p>
            <p className="text-[14px] md:text-[16px] text-[#C0C0C0] leading-relaxed">
              We're integrating topology optimization, end-use additive manufacturing, and design methodology taken directly from our work as roboticists to build never before seen workflows into the fashion and design arena. To warrant environmental ubiquity, we operate at an abstracted, ecosystem level.
            </p>
          </div>
        </section>

        {/* Design Lab & Divergent Additive Images */}
        <section className="px-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="aspect-[16/9]">
                <img
                  src="/images/all-design-lab.jpg"
                  alt="All Design Lab"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mt-3">All Design Lab</p>
            </div>
            <div>
              <div className="aspect-[16/9]">
                <img
                  src="/images/divergent-additive.png"
                  alt="Divergent Additive"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mt-3">Divergent Additive</p>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="p-4 py-16 border-t border-[#1A1A1A]">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#6A6A6A] mb-6">Methodology</p>
          <div className="max-w-2xl">
            <p className="text-[14px] md:text-[16px] text-[#C0C0C0] leading-relaxed mb-6">
              Topology optimization is a data driven design technique that we've been experimenting with since 2017. Governed by the implicit modeling architecture, we have an ability to parametrically alter our product optimizations in real time. The resulting geometries are unprecedented.
            </p>
            <p className="text-[14px] md:text-[16px] text-[#C0C0C0] leading-relaxed">
              This novel computational design tech in congruence with end-use additive manufacturing techniques and engineered mechanisms is our edge. No longer is there a limiting factor for innovation in the fashion industry.
            </p>
          </div>
        </section>

        {/* Topology Image */}
        <section className="px-4 pb-8">
          <div className="aspect-square max-w-xl bg-[#1A1A1A]">
            <img
              src="/images/topology-2.png"
              alt="Topology"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Back Link */}
        <section className="p-4 py-12 border-t border-[#1A1A1A]">
          <Link href="/" className="btn w-fit">
            Back to Home
          </Link>
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
            <p className="text-[8px] text-[#4A4A4A]">
              © 2024
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Methodology;
