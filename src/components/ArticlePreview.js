import React from 'react'
import className from 'classnames'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

const ArticlePreview = props => {
  const { imageSrc, title, excerpt, link, linkText } = props
  return (
    <div className={className('article article-preview', props.className)}>
      {imageSrc && (
        <a className="article-preview__img-wrapper" href="#">
          <img
            className="article-preview__img img-responsive el-center"
            src={imageSrc}
            alt={title}
          />
        </a>
      )}
      <h4 className="heading-underline text-red text-uppercase">{title}</h4>
      <p>{excerpt}</p>
      {link && (
        <Link to={link} className="link-read-more text-uppercase">
          {linkText}{' '}
          <FontAwesome className="link-read-more__icon" name="chevron-right" />
        </Link>
      )}
    </div>
  )
}

ArticlePreview.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
}

ArticlePreview.defaultProps = {
  linkText: 'Read more',
}

export default ArticlePreview
