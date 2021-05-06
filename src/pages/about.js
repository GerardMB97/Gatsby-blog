import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const About = () => (
  <div>
    <Header />
    <h2>About</h2>
    <p>I´m a web developer, passionate about programming, basketball and music</p>
    <p>
      Need a developer?
      {' '}
      <Link to="/">Contact me!</Link>
    </p>
    <Footer />
  </div>
);

export default About;
