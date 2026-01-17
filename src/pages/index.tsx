import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const productVideos = [
    { id: 4, src: '/videos/Product video 4.mp4', title: 'Product 4' },
    { id: 3, src: '/videos/Product video 3.mp4', title: 'Product 3' },
    { id: 2, src: '/videos/Product Video 2.mp4', title: 'Product 2' },
    { id: 1, src: '/videos/Product video 1.mp4', title: 'Product 1' },
  ];

  return (
    <Layout showLoading={true}>
      <Head>
        <title>APRENEUE — Minimalistic Tech-Forward Fashion</title>
        <meta name="description" content="Minimalistic. Tech-forward. Premium. Industrial edge with refined execution." />
        <link rel="icon" href="/images/apreneue-globe-logo MAIN LOGO.png" />
      </Head>

      {/* Hero Video Section */}
      <section className="relative h-screen w-full overflow-hidden -mt-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Apreneue home page landing page baclground main page.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-24 left-0 right-0 flex flex-col items-center">
          <img
            src="/images/apreneue png logo white.png"
            alt="Apreneue"
            className="w-64 md:w-96 mb-6"
          />
          <p className="text-lg md:text-xl text-text-secondary tracking-wide">
            Form From Function
          </p>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
            Minimalistic. Tech-forward. Premium.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Where cutting-edge technology meets refined aesthetics.
            Every piece synthesizes art and engineering into wearable innovation.
          </p>
        </div>
      </section>

      {/* Product Videos Grid */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tighter">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {productVideos.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-hover-state rounded-sm">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  >
                    <source src={product.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 ring-1 ring-border-color group-hover:ring-accent transition-all duration-300" />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm uppercase tracking-wide text-text-secondary group-hover:text-accent transition-colors duration-200">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-hover-state">
        <div className="mx-auto max-w-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
            Explore the Collection
          </h2>
          <a
            href="/shop"
            className="inline-block px-12 py-4 bg-accent text-white uppercase text-sm tracking-wide hover:scale-105 transition-transform duration-200"
          >
            Shop Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
