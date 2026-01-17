import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>About — APRENEUE</title>
        <meta name="description" content="Learn about our mission and vision." />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero */}
        <section className="py-24 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            About Apreneue
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Where technology meets fashion
          </p>
        </section>

        {/* Story Section */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl space-y-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">
                Our Story
              </h2>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  Apreneue represents the synthesis of art and engineering, where cutting-edge
                  technology meets refined aesthetics. We believe in creating pieces that are
                  both functional and beautiful.
                </p>
                <p>
                  Every garment is meticulously designed with attention to detail, using premium
                  materials and innovative construction techniques. Our minimalistic approach
                  emphasizes clean lines, thoughtful proportions, and timeless design.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">
                Our Mission
              </h2>
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  To redefine modern fashion through the lens of technology and innovation.
                  We create garments that adapt to the needs of contemporary life while
                  maintaining a commitment to sustainability and ethical production.
                </p>
                <p>
                  Form follows function. Every design decision serves a purpose, creating
                  clothing that enhances your daily experience without compromise.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-text-secondary">
                    Pushing boundaries through experimental materials and construction methods.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Quality</h3>
                  <p className="text-text-secondary">
                    Uncompromising standards in craftsmanship and material selection.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                  <p className="text-text-secondary">
                    Responsible production with minimal environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 bg-hover-state">
          <div className="mx-auto max-w-container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
              Explore Our Work
            </h2>
            <a
              href="/shop"
              className="inline-block px-12 py-4 bg-accent text-white uppercase text-sm tracking-wide hover:scale-105 transition-transform duration-200"
            >
              View Collection
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
