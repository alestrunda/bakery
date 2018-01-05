/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.onCreatePage = function({page}) {
	page.layout = page.path === "/" ? 'index' : 'page'
}

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `
        ).then(result => {
            result.data.allMarkdownRemark.edges.map(({ node }) => {
                const template = getTemplateBySlug(node.fields.slug)
                template && createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/${template}`),
                    layout: 'page',
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
        case 'services':
            return 'post.js'
    }
}