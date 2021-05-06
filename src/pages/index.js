import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';

const HomePage = () => (
  <div>
    <Header />
    <h1>Hello!</h1>
    <h2>I´ m Gerard, a web developer from barcelona</h2>
    <p>
      Need a developer ?
      {' '}
      <Link to="/contact">Contact me!</Link>
    </p>
    <Footer />
  </div>
);

export default HomePage;
