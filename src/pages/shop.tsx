import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Shop: React.FC = () => {
  const products = [
    { id: 1, name: 'Tech Jacket', price: '$299', image: '/images/Random Image asset 1.png' },
    { id: 2, name: 'Minimal Tee', price: '$89', image: '/images/Random Image asset 1.png' },
    { id: 3, name: 'Urban Pants', price: '$189', image: '/images/Random Image asset 1.png' },
    { id: 4, name: 'Function Hoodie', price: '$149', image: '/images/Random Image asset 1.png' },
    { id: 5, name: 'Tech Vest', price: '$219', image: '/images/Random Image asset 1.png' },
    { id: 6, name: 'Essential Shorts', price: '$99', image: '/images/Random Image asset 1.png' },
  ];

  return (
    <Layout>
      <Head>
        <title>Shop — APRENEUE</title>
        <meta name="description" content="Explore our collection of minimalistic tech-forward fashion." />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero */}
        <section className="py-24 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Collection
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Premium pieces engineered for the modern individual
          </p>
        </section>

        {/* Product Grid */}
        <section className="py-16 px-6 pb-32">
          <div className="mx-auto max-w-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] bg-hover-state overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute inset-0 ring-1 ring-border-color group-hover:ring-accent transition-all duration-300" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                    <p className="text-text-secondary">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Shop;
