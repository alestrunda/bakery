/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require('gatsby-paginate')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              fileAbsolutePath
              frontmatter {
                title
                date
                imageSrc {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      src
                    }
                  }
                }
              }
              fields {
                slug
              }
              excerpt(pruneLength: 350)
            }
          }
        }
      }
    `).then((result) => {
      const postsEdges = result.data.allMarkdownRemark.edges.filter(
        ({ node }) => node.fileAbsolutePath.match('/posts/')
      )
      createPaginatedPages({
        edges: postsEdges,
        createPage: createPage,
        pageTemplate: 'src/templates/blog.js',
        pageLength: 3, //items per page
        pathPrefix: 'blog',
        layout: 'page',
      })
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        const template = getTemplateBySlug(node.fields.slug)
        template &&
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/${template}`),
            layout: 'post',
            context: {
              slug: node.fields.slug,
            },
          })
      })
      resolve()
    })
  })
}

function getTemplateBySlug(slug) {
  const folder = slug.split('/')[1]
  switch (folder) {
    case 'products':
      return 'product.js'
    case 'recipes':
      return 'recipe.js'
    case 'posts':
    case 'services':
      return 'post.js'
  }
}
