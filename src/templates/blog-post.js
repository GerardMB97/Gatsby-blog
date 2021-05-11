/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
  query ($slug: String) {
    wpPost (
      slug: {eq: $slug}
    ) {
      title
      date(formatString: "MMMM Do, YYYY")
      content
    }
  }
`;

const Blog = ({ data }) => (
  <Layout>
    <Head title={data.wpPost.title} />
    <h1>{data.wpPost.title}</h1>
    <p>{data.wpPost.date}</p>
    <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />

  </Layout>
);

export default Blog;
