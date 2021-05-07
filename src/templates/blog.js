/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
query ($slug:String) {
  contentfulBlogPost (
    slug: {eq: $slug}
  ) {
    title
    publishedDate(formatString: "MMMM Do, YYYY")
  
  }
}
`;
const Blog = ({ data }) => (
  <Layout>
    <h1>{data.contentfulBlogPost.title}</h1>
    <p>{data.contentfulBlogPost.publishedDate}</p>
  </Layout>
);

export default Blog;
