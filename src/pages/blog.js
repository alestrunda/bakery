import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const PageBlog = ({ data }) => (
  <div className="section-content container">
    <Helmet title="Blog" />

    <h1>Blog</h1>
    {data.posts.edges.map(({ node }, index) => {
      return (
        <div className="article">
          <h1>{node.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      )
    })}
  </div>
)

export const query = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`

export default PageBlog
