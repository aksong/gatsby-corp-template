import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const SolutionPostTemplate = ({ content, contentComponent, description, title, helmet }) => {
	const PostContent = contentComponent || Content;

	return (
		<div className="container">
			<section className="section">
				{helmet || ""}
				<div className="content">
					<h1>{title}</h1>
					<div>{description}</div>
					<PostContent content={content} />
				</div>
			</section>
		</div>
	);
};

SolutionPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object
};

const SolutionPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<SolutionPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Solution">
						<title>{`${post.frontmatter.title}`}</title>
						<meta name="description" content={`${post.frontmatter.description}`} />
					</Helmet>
				}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

SolutionPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default SolutionPost;

export const pageQuery = graphql`
	query SolutionPostByID($id: String!) {
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
