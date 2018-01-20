import React from 'react'
import className from 'classnames'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

const ArticlePreview = props => {
  const { imageSrc, align, title, excerpt, link, linkText } = props
  const alignClass = align ? `article-preview--${align}` : ""
  return (
    <div className={className('article article-preview', props.className, align ? `article-preview--${align}` : "")}>
      {imageSrc && (
        <Link to={link} className="article-preview__img-wrapper">
          <img
            className="article-preview__img img-responsive el-center"
            src={imageSrc}
            alt={title}
          />
        </Link>
      )}
      <h4 className={className('heading-underline text-red text-uppercase', align ? `heading-underline--${align}` : "")}>{title}</h4>
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
  align: PropTypes.string,
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
