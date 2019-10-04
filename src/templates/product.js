import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ProductTemplate = ({ content, contentComponent, description, title, helmet }) => {
	const PostContent = contentComponent || Content;

	return (
		<section className="section">
			{helmet || ""}
			<div className="container content">
				<h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
				<p>{description}</p>
				<PostContent content={content} />
			</div>
		</section>
	);
};

ProductTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object
};

const Product = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<div className="container">
				<ProductTemplate
					content={post.html}
					contentComponent={HTMLContent}
					description={post.frontmatter.description}
					helmet={
						<Helmet titleTemplate="%s | Product">
							<title>{`${post.frontmatter.title}`}</title>
							<meta name="description" content={`${post.frontmatter.description}`} />
						</Helmet>
					}
					title={post.frontmatter.title}
				/>
			</div>
		</Layout>
	);
};

Product.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default Product;

export const productQuery = graphql`
	query ProductByID($id: String!) {
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
