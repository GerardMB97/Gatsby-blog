/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
query ($slug: String)  {
  contentfulBlogPost (
    slug: {eq: $slug}
  ) {
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      raw 
      references {
         ... on ContentfulAsset {
          fixed(width: 1600) {
                width
                height
                src
                srcSet
              }
          contentful_id
          title
            file {
              url
            } 
        }
      }
    }
  }
}
`;

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        // const img = data.contentfulBlogPost.body.references.find
        const { file } = data.contentfulBlogPost.body.references.find(
          (reference) => reference.contentful_id === node.data.target.sys.id
        );
        return <img src={file.url} alt="Hello" />;
      }
    }
  };

  const richTextBody = JSON.parse(data.contentfulBlogPost.body.raw);
  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      <div>
        {' '}
        {documentToReactComponents(richTextBody, options)}
      </div>

    </Layout>
  );
};

export default Blog;
