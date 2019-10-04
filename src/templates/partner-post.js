import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const PartnerPostTemplate = ({
	content,
	contentComponent,
	description,
	title,
	helmet
}) => {
	const PostContent = contentComponent || Content;

	return (
		<section className="section">
			<div className="container">
				<section className="section">
					{helmet || ""}
					<div className="container content">
						<div className="columns">
							<div className="column is-10 is-offset-1">
								<h1 className="title is-size-2 has-text-weight-bold is-bold-light">
									{title}
								</h1>
								<p>{description}</p>
								<PostContent content={content} />
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

PartnerPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object
};

const PartnerPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<PartnerPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Partner">
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name="description"
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

PartnerPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default PartnerPost;

export const pageQuery = graphql`
  query PartnerPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
