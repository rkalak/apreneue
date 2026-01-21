import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
        <link rel="icon" href="/images/apreneue-favicon.png" />
      </Head>

      {/* Hero Video Section */}
      <section className="relative h-[70vh] w-full overflow-hidden -mt-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/videos/Apreneue home page landing page baclground main page.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 p-4 pb-8">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-1">Spring 2025</p>
          <h1 className="text-sm tracking-[0.05em] uppercase">Form From Function</h1>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="p-4 py-8 border-t border-[#1A1A1A]">
        <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-2">About</p>
        <p className="text-[9px] text-[#6A6A6A] max-w-md leading-relaxed">
          Minimalistic. Tech-forward. Premium. Where cutting-edge technology meets refined aesthetics.
          Every piece synthesizes art and engineering into wearable innovation.
        </p>
      </section>

      {/* Product Videos Grid */}
      <div className="category-header flex items-center justify-between">
        <span>Featured Collection</span>
        <Link href="/shop" className="nav-link">View All</Link>
      </div>

      <section className="grid-4">
        {productVideos.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="product-tile">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={product.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-end p-2">
                <span className="text-[7px] uppercase tracking-widest text-[#4A4A4A]">
                  {product.title}
                </span>
              </div>
            </div>
            <div className="product-info px-2">
              <p className="product-title">{product.title}</p>
            </div>
          </div>
        ))}
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
    </Layout>
  );
};

export default Home;
