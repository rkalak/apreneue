import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>APRENEUE</h1>
        {/* Add navigation links here */}
      </header>
      <main>{children}</main>
      <footer>&copy; 2023 apreneue</footer>
    </div>
  );
};

export default Layout;
