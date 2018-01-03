import React from "react"
import FontAwesome from 'react-fontawesome'
import Helmet from 'react-helmet'

const PageProduct = ({ data }) => {
	const post = data.markdownRemark;
	return (
		<div className="container section-content">
			<Helmet title={post.frontmatter.title} />

			<div className="article">
				<h1 className="mb15">{post.frontmatter.title}</h1>
				<strong>{post.frontmatter.label}</strong>
				<div className="mb20">
					<a className="mr10" href={post.frontmatter.urlShop}><FontAwesome name="shopping-cart" /></a>
					<a className="mr10" href={post.frontmatter.urlLike}><FontAwesome name="heart" /></a>
				</div>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</div>
	);
};

export const query = graphql`
  query PageProductQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
				title
				urlLike
				urlShop
				label
      }
    }
  }
`

export default PageProduct