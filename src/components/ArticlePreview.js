import React from 'react'
import className from 'classnames'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'

const ArticlePreview = (props) => {
    return (
        <div className={className("article article-preview", props.className)}>
            <a className="article-preview__img-wrapper" href="#">
                <img className="article-preview__img img-responsive el-center" src={props.imageSrc} alt={props.title} />
            </a>
            <h4 className="heading-underline text-red text-uppercase">{props.title}</h4>
            <p>{props.excerpt}</p>
            <Link to={props.link} className="link-read-more">READ MORE <FontAwesome className="link-read-more__icon" name="chevron-right" /></Link>
        </div>
    )
}

export default ArticlePreview