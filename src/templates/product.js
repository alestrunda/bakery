import React from 'react'
import FontAwesome from 'react-fontawesome'
import Helmet from 'react-helmet'

import ArticleNavigation from '../components/ArticleNavigation'
import Breadcrumbs from '../components/Breadcrumbs'
import IconLink from '../components/IconLink'
import ImageLightbox from '../components/ImageLightbox'
import LabelBox from '../components/LabelBox'

const PageProduct = (props) => {
  const { currentPost, allPosts } = props.data
  const { title, label, urlShop, urlLike } = currentPost.frontmatter
  const articleNav = (
    <ArticleNavigation currentPost={currentPost} posts={allPosts.edges} />
  )

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { text: 'Home', to: '/' },
          { text: 'Products', to: '/products/' },
          { text: title },
        ]}
      />

      <div className="section-content">
        <Helmet title={title} />
        <div className="mb30">{articleNav}</div>

        <div className="article">
          {currentPost.frontmatter.imageSrc && (
            <div className="wrapper-centering mb60">
              <LabelBox label={label}>
                <ImageLightbox
                  previewImages={[
                    currentPost.frontmatter.imageSrc.childImageSharp.fluid.src,
                  ]}
                  fullImages={[
                    currentPost.frontmatter.imageSrc.childImageSharp.fluid
                      .originalImg,
                  ]}
                  alt={title}
                />
              </LabelBox>
            </div>
          )}
          <h1 className="mb15">{title}</h1>
          <div className="mb20">
            <IconLink icon="shopping-cart" target={urlShop} color="brown" />
            <IconLink icon="heart" target={urlLike} color="brown" />
          </div>
          <div dangerouslySetInnerHTML={{ __html: currentPost.html }} />
        </div>
        {articleNav}
      </div>
    </div>
  )
}

export const query = graphql`
  query PageProductQuery($slug: String!) {
    currentPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        urlLike
        urlShop
        label
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
      filter: { fileAbsolutePath: { regex: "/products/" } }
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

export default PageProduct
