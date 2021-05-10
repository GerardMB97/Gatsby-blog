import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const HomePage = () => (

  <Layout>
    <Head title="Home" />
    <h1>Hello!</h1>
    <h2>I´ m Gerard, a web developer from barcelona</h2>
    <p>
      Need a developer ?
      {' '}
      <Link to="/contact">Contact me!</Link>
    </p>
  </Layout>

);

export default HomePage;
