import React from 'react';
import AppToolbar from '../AppToolbar/AppToolbar';

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <AppToolbar/>
      </header>
      <main className="container-fluid">
        {children}
      </main>
    </>
  );
};

export default Layout;