import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <h2>About</h2>
    <p>I´m a web developer, passionate about programming, basketball and music</p>
    <p>
      Need a developer?
      {' '}
      <Link to="/">Contact me!</Link>
    </p>
  </Layout>
);

export default About;
