import React, { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  // background Color
  const backgroundColor = '#000';

  //apreneue images
  const backgroundImageUrl = '/images/apre1.jpg'; // Replace with your image path
  const scrollableImageUrl = '/images/aprescroll.jpg'; // Replace with your second image path

  // FOOTER CODE <footer style={{ textAlign: 'center', padding: '-2px', backgroundColor: 'rgba(0, 0, 0, 0)', color: '#000', fontFamily: 'Helvetica Neue', marginTop: 'auto', margin: -5 }}>&copy; 2023 apreneue</footer>
  // WENT ABOVE HEADER <div style={{ position: 'relative', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1 }} />      


  return (
    <div style={{ backgroundColor, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '0vh', display: 'flex', flexDirection: 'column', margin: -8, padding: 0, overflowY: 'auto'}}>
      <Head>
        {/* Add the link tag for the favicon in the head section */}
        <link rel="icon" href="/images/apreneue-globe-logo.png" />
      </Head>
      <header style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0)', color: '#000', fontFamily: 'Helvetica Neue', fontWeight: 'bold', margin: 0, letterSpacing: '10px', zIndex: 1, marginTop: '-4vh' }}>
        <h1>apreneue</h1>
        {/* Add navigation links here */}
      </header>

      <div style={{ padding: '0px', backgroundColor: 'rgba(0, 0, 0, 0)', textAlign: 'center', marginTop: '4vh' }}>
        {/* Add your page content here */}
        <img
          src={backgroundImageUrl}
          alt="Background Image"
          style={{ maxWidth: '100%', height: 'auto', margin: '-102px 0' }}
        />
        <p style={{ margin: 15, padding: 0 }}></p>
      </div>

      <div style={{ padding: '0px', backgroundColor: 'rgba(0, 0, 0, 0)', textAlign: 'center', marginTop: '8.4vh'}}>
        {/* Add your page content here */}
        <img
          src={scrollableImageUrl}
          alt="Scrollable Image"
          style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}
        />
        <p style={{ margin: 0, padding: 0 }}></p>

        <div style={{ margin: '0px', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0)', color: '#fff', position: 'absolute', top: '65%', left: '0%', width: '30%' }}>
          <p>{/*"APRENEUE IS FORM FROM FUNCTION PRODUCT DESIGN, FORM FROM FUNCTION FASHION APRENEUE IS FORM FROM FUNCTION PRODUCT DESIGN, FORM FROM FUNCTION FASHION"*/}</p>
        </div>

      </div>
      
    </div>
  );
};

export default Layout;
