import React, { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const backgroundImageUrl = '/images/apre1.jpg'; // Replace with your image path

  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: -8, padding: 0 }}>
      <Head>
        {/* Add the link tag for the favicon in the head section */}
        <link rel="icon" href="/images/aprefavicon.png" />
      </Head>      
      <header style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0)', color: '#fff', fontFamily: 'Helvetica Neue', fontWeight: 'bold', margin: 0 }}>
        <h1>APRENEUE</h1>
        {/* Add navigation links here */}
      </header>
      <main style={{ flex: '1' }}>{children}</main>
      <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0)', color: '#fff', fontFamily: 'Helvetica Neue', marginTop: 'auto', margin: 0 }}>&copy; 2023 Apreneue</footer>
    </div>
  );
};

export default Layout;
