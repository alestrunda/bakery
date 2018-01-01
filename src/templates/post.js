import React from "react";

const PagePost = ({ data }) => {
	const post = data.markdownRemark;
	return (
		<div className="container section-content">
			<div className="article">
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</div>
	);
};

export const query = graphql`
  query PagePostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default PagePost