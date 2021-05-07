import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
          }
          html
          excerpt
        }
      }
    }
  }
  `);
  return (
    <Layout>
      <ol>
        {data.allMarkdownRemark.edges.map((post) => (
          <li>
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default Blog;
