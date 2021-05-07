import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/global.scss';
import * as layoutStyles from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={layoutStyles.container}>
    <div>
      <Header />
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
