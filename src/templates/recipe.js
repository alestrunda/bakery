import React from 'react'
import Helmet from 'react-helmet'
import FontAwesome from 'react-fontawesome'

import ArticleNavigation from '../components/ArticleNavigation'
import Breadcrumbs from '../components/Breadcrumbs'
import ImageLightbox from '../components/ImageLightbox'

const PageRecipe = (props) => {
  const { currentPost, allPosts } = props.data
  const {
    title,
    date,
    description,
    ingredients,
    timePrep,
    timeCook,
  } = currentPost.frontmatter

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { text: 'Home', to: '/' },
          { text: 'Recipes', to: '/recipes/' },
          { text: title },
        ]}
      />

      <div className="section-content section-content--top-small">
        <Helmet title={title} />

        <div className="article">
          <h1 className="mb0">{title}</h1>
          <p className="text-small text-silver">{date}</p>
          <p className="mb40">{`"${description}"`}</p>
          <div className="grid mb40">
            <div className="grid__item grid__item--md-span-6">
              <h4 className="mb10">
                <FontAwesome className="text-red text-bigger mr5" name="star" />
                Ingredients:
              </h4>
              <div
                className="mb30 text-italic"
                dangerouslySetInnerHTML={{ __html: ingredients.join('<br>') }}
              />
              <div className="text-big">
                <span className="text-red-dark">PREP:</span>{' '}
                <strong>{timePrep}min</strong>
                <br />
                <span className="text-red-dark">COOK:</span>{' '}
                <strong>{timeCook}min</strong>
                <br />
                <span className="text-red-dark">READY IN:</span>{' '}
                <strong>{timePrep + timeCook}min</strong>
              </div>
            </div>
            <div className="grid__item grid__item--md-span-6 grid__item--break-sm-30">
              <ImageLightbox
                previewImages={[
                  currentPost.frontmatter.imageSrc.childImageSharp.fluid.src,
                ]}
                fullImages={[
                  currentPost.frontmatter.imageSrc.childImageSharp.fluid
                    .originalImg,
                ]}
              />
            </div>
          </div>
          <h4 className="mb10">
            <FontAwesome className="text-red text-bigger mr5" name="star" />
            Steps:
          </h4>
          <div dangerouslySetInnerHTML={{ __html: currentPost.html }} />
        </div>
        <ArticleNavigation currentPost={currentPost} posts={allPosts.edges} />
      </div>
    </div>
  )
}

export const query = graphql`
  query PageRecipeQuery($slug: String!) {
    currentPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        date(formatString: "DD. MM. YYYY")
        description
        ingredients
        timePrep
        timeCook
        imageSrc {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
              originalImg
            }
          }
        }
      }
    }
    allPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/recipes/" } }
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

export default PageRecipe
