import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>About — APRENEUE</title>
        <meta name="description" content="Learn about our mission and vision." />
      </Head>

      <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">
        {/* Hero */}
        <section className="h-[40vh] relative">
          <div className="absolute bottom-0 left-0 p-4 pb-8">
            <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-1">About</p>
            <h1 className="text-sm tracking-[0.05em] uppercase">Where Technology Meets Fashion</h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="p-4 py-8 border-t border-[#1A1A1A]">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-2">Our Story</p>
          <div className="space-y-3 text-[9px] text-[#6A6A6A] max-w-md leading-relaxed">
            <p>
              Apreneue represents the synthesis of art and engineering, where cutting-edge
              technology meets refined aesthetics. We believe in creating pieces that are
              both functional and beautiful.
            </p>
            <p>
              Every garment is meticulously designed with attention to detail, using premium
              materials and innovative construction techniques.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="p-4 py-8 border-t border-[#1A1A1A]">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-2">Our Mission</p>
          <div className="space-y-3 text-[9px] text-[#6A6A6A] max-w-md leading-relaxed">
            <p>
              To redefine modern fashion through the lens of technology and innovation.
              Form follows function. Every design decision serves a purpose.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="p-4 py-8 border-t border-[#1A1A1A]">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-2">Our Values</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.05em] text-[#E5E5E5] mb-1">Innovation</p>
              <p className="text-[8px] text-[#6A6A6A]">
                Pushing boundaries through experimental materials.
              </p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.05em] text-[#E5E5E5] mb-1">Quality</p>
              <p className="text-[8px] text-[#6A6A6A]">
                Uncompromising standards in craftsmanship.
              </p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.05em] text-[#E5E5E5] mb-1">Sustainability</p>
              <p className="text-[8px] text-[#6A6A6A]">
                Responsible production practices.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-4 py-8 border-t border-[#1A1A1A]">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-3">Explore</p>
          <Link
            href="/shop"
            className="btn"
          >
            View Collection
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default About;
