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

      <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">
        {/* Hero */}
        <section className="h-[30vh] relative">
          <div className="absolute bottom-0 left-0 p-4 pb-8">
            <p className="text-[8px] uppercase tracking-[0.15em] text-[#6A6A6A] mb-1">Shop</p>
            <h1 className="text-sm tracking-[0.05em] uppercase">Collection</h1>
          </div>
        </section>

        {/* Product Grid */}
        <div className="category-header flex items-center justify-between">
          <span>Products</span>
        </div>

        <section className="grid-3">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="product-tile">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-end p-2">
                  <span className="text-[7px] uppercase tracking-widest text-[#4A4A4A]">
                    {product.name}
                  </span>
                </div>
              </div>
              <div className="product-info px-2">
                <p className="product-title">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Shop;
