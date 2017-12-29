import React from 'react'
import Link from 'gatsby-link'

const MarkdownExample = ({data}) => {
  const content = data.allMarkdownRemark ? data.allMarkdownRemark.edges[0].node.html : "<p>not found</p>"
  return (
    <div className="section-content container article">
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export const query = graphql`
  query MarkdownExampleQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown-example.md$/"}}) {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default MarkdownExample
