import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';

interface LayoutProps {
  children: React.ReactNode;
  showLoading?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showLoading = false }) => {
  const [isLoading, setIsLoading] = useState(showLoading);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      <div className={`min-h-screen bg-black text-white ${isLoading ? 'hidden' : 'block'}`}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
