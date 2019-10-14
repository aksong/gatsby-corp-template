import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const PressReleaseTemplate = ({ content, contentComponent, description, title, date, helmet }) => {
	const PostContent = contentComponent || Content;

	return (
		<div className="container">
			<section className="section">
				{helmet || ""}
				<div className="container content">
					<h1>Press Release</h1>
					<h2>{title}</h2>
					<div className="has-text-weight-semibold">{date}</div>
					<p>{description}</p>
					<PostContent content={content} />
				</div>
			</section>
		</div>
	);
};

PressReleaseTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	date: PropTypes.string,
	helmet: PropTypes.object
};

const PressRelease = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<PressReleaseTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Press Release">
						<title>{`${post.frontmatter.title}`}</title>
						<meta name="description" content={`${post.frontmatter.description}`} />
					</Helmet>
				}
				title={post.frontmatter.title}
				date={post.frontmatter.date}
			/>
		</Layout>
	);
};

PressRelease.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default PressRelease;

export const pageQuery = graphql`
	query PressReleaseByID($id: String!) {
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
