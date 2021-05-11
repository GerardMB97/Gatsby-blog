const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog-post.js');
  const res = await graphql(`
   query {
      allWpPost{
        edges{
          node{
            slug
          }
        }
      }
    }
  `);

  res.data.allWpPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  });

  const posts = res.data.allWpPost.edges;
  const postsPerPage = 1;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });
};
