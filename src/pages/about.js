import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const About = () => (
  <Layout>
    <Head title="About" />
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
