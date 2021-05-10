import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const NotFound = () => (
  <Layout>
    <Head title="404" />
    <h2>Page not found</h2>
    <Link to="/">Head Home</Link>
  </Layout>
);

export default NotFound;
