import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFound = () => (
  <Layout>
    <h2>Page not found</h2>
    <Link to="/">Head Home</Link>
  </Layout>
);

export default NotFound;
