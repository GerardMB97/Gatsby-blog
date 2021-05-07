import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import * as blogStyles from './blog.module.scss';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: {
          fields: publishedDate
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((post) => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default Blog;
