import React from 'react'

import ArticleNavigation from '../components/ArticleNavigation'
import Breadcrumbs from '../components/Breadcrumbs'
import ImageLightbox from '../components/ImageLightbox'

import Layout from '../layouts/Post'

const PagePost = ({ data }) => {
  const { currentPost, allPosts } = data
  const { title } = currentPost.frontmatter
  const articleNav = (
    <ArticleNavigation currentPost={currentPost} posts={allPosts.edges} />
  )

  return (
    <Layout title={title}>
      <div className="container">
        <Breadcrumbs
          items={[
            { text: 'Home', to: '/' },
            { text: 'Blog', to: '/blog/' },
            { text: title },
          ]}
        />
        <div className="section-content section-content--top-small">
          <div className="mb30">{articleNav}</div>
          <div className="article">
            {currentPost.frontmatter.imageSrc && (
              <ImageLightbox
                classNameImg="el-center mb60"
                previewImages={[
                  currentPost.frontmatter.imageSrc.childImageSharp.fluid.src,
                ]}
                fullImages={[
                  currentPost.frontmatter.imageSrc.childImageSharp.fluid
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
    </Layout>
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
            fluid(maxWidth: 950) {
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
