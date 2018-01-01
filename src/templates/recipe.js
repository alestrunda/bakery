import React from "react";

const PageRecipe = ({ data }) => {
	const post = data.markdownRemark;
	return (
		<div className="container section-content">
			<div className="article">
				<h1>{post.frontmatter.title}</h1>
				{post.frontmatter.date}<br />
				PREP: {post.frontmatter.timePrep}min<br />
				COOK: {post.frontmatter.timeCook}min
				<div className="mb15"></div>
				<strong>Ingredients:</strong>
				<div className="mb25 text-italic" dangerouslySetInnerHTML={{ __html: post.frontmatter.ingredients }} />
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</div>
	);
};

export const query = graphql`
  query PageRecipeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
				title
				date(formatString: "DD. MM. YYYY")
				ingredients
				timePrep
				timeCook
      }
    }
  }
`

export default PageRecipe