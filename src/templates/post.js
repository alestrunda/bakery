import React from 'react'
import Helmet from 'react-helmet'

import ArticleNavigation from '../components/ArticleNavigation'
import Breadcrumbs from '../components/Breadcrumbs'
import ImageLightbox from '../components/ImageLightbox'

const PagePost = props => {
  const { currentPost, allPosts } = props.data
  const { title } = currentPost.frontmatter
  const articleNav = <ArticleNavigation currentPost={currentPost} posts={allPosts.edges} />
  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { text: 'Home', to: '/' },
          { text: 'Blog', to: '/blog/' },
          { text: title },
        ]}
      />

      <div className="section-content section-content--top-small">
        <Helmet title={title} />
        <div className="mb30">
          {articleNav}
        </div>

        <div className="article">
          {currentPost.frontmatter.imageSrc && (
            <ImageLightbox
              classNameImg="el-center mb60"
              previewImages={[
                currentPost.frontmatter.imageSrc.childImageSharp.responsiveSizes
                  .src,
              ]}
              fullImages={[
                currentPost.frontmatter.imageSrc.childImageSharp.responsiveSizes
                  .originalImg,
              ]}
              alt={title}
            />
          )}
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: currentPost.html }} />
        </div>
        {articleNav}
      </div>
    </div>
  )
}

export const query = graphql`
  query PagePostQuery($slug: String!) {
    currentPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        imageSrc {
          childImageSharp {
            responsiveSizes(maxWidth: 950) {
              src
              originalImg
            }
          }
        }
      }
    }
    allPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default PagePost
