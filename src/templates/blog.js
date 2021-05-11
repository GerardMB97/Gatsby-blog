import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import * as blogStyles from './blog.module.scss';

export const query = graphql`
    query ($skip: Int $limit: Int) {
      allWpPost  (
        sort: {
          fields: date
          order: DESC
        }
        limit: $limit
        skip: $skip
      ){
        edges{
          node{
            slug
            title
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `;

const Blog = ({ data }) => (

  <Layout>
    <Head title="Blog" />
    <ol className={blogStyles.posts}>
      {data.allWpPost.edges.map((post) => (
        <li key={post.node.slug} className={blogStyles.post}>
          <Link to={`/blog/${post.node.slug}`}>
            <h2>{post.node.title}</h2>
            <p>{post.node.date}</p>
          </Link>
        </li>
      ))}
    </ol>
  </Layout>
);

export default Blog;
