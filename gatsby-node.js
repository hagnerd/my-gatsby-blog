const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const kebabCase = str => str.includes(" ") ? str.split(" ").join("-") : str;
const unique = arr => [... new Set(arr)];

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: {
          fields: [frontmatter___date]
          order: DESC
        } 
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }

    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      let posts = result.data.allMarkdownRemark.edges;

      posts.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(`src/templates/blog-post.js`),
          context: {
            // data passed to context is available 
            // in queries as GraphQL variables
          }
        });
      });

      let tags = []; 

      posts.forEach(post => {
        if (post.node.frontmatter.tags) {
          tags = tags.concat(post.node.frontmatter.tags);
        }
      });

      // get unique tags
      tags = unique(tags.map(tag => kebabCase(tag).toLowerCase()));

      tags.forEach(tag => {
        createPage({
          path: `/tags/${tag}/`,
          component: path.resolve('src/templates/tag.js'),
          context: {
            tag,
          }
        });
      });

    });

}
