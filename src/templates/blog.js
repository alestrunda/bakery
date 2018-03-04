import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import ArticlePreview from '../components/ArticlePreview'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingMain from '../components/HeadingMain'

const PageBlog = ({ data, pathContext }) => {
  const nextUrl = (pathContext.index + 1).toString()
  let previousUrl = (pathContext.index - 1).toString()
  if (previousUrl == 1) previousUrl = '/blog/'
  else if (previousUrl == 0) previousUrl = ''

  return (
    <div>
      <Helmet title="Blog" />
      <HeadingMain title={`Blog (${data.allMarkdownRemark.totalCount})`} />

      <div className="container">
        <Breadcrumbs items={[{ text: 'Home', to: '/' }, { text: 'Blog' }]} />
      </div>

      <div className="section-content section-content--bottom-smaller section-content--top-smaller container">
        <div className="grid grid--center">
          {pathContext.group.map(({ node }, index) => {
            return (
              <div className="grid__item grid__item--md-span-4" key={node.id}>
                <ArticlePreview
                  title={node.frontmatter.title}
                  imageSrc={
                    node.frontmatter.imageSrc &&
                    node.frontmatter.imageSrc.childImageSharp.responsiveSizes
                      .src
                  }
                  link={node.fields.slug}
                >
                  {node.excerpt}
                </ArticlePreview>
              </div>
            )
          })}
        </div>
        <div className="grid text-xs-center">
          <div className="grid__item grid__item--sm-span-4">
            {previousUrl && (
              <Link to={previousUrl} className="link-read-more text-uppercase">
                previous page
              </Link>
            )}
          </div>
          <div className="grid__item grid__item--sm-span-4 text-center">
            Page: {pathContext.index}
          </div>
          <div className="grid__item grid__item--sm-span-4 text-right text-xs-center">
            {nextUrl <= pathContext.pageCount && (
              <Link to={nextUrl} className="link-read-more text-uppercase">
                next page
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
    }
  }
`

export default PageBlog
