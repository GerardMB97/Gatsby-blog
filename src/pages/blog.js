import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import * as blogStyles from './blog.module.scss';

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
          fields{
            slug
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
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((post) => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${post.node.fields.slug}`}>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default Blog;
