import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Parallax } from "react-parallax";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ProductsPageTemplate = ({ image, title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;
	return (
		<section className="content">
			{image ? (
				<Parallax
					bgImage={image && !!image.childImageSharp ? image.childImageSharp.fluid.src : image}
					strength={300}
					bgImageStyle={{ objectFit: "cover" }}
				>
					<div style={{ height: 500 }}>
						<h1>{title}</h1>
					</div>
				</Parallax>
			) : null}
			<div className="container">
				<div className="section">
					<h1>{title}</h1>
					<PageContent className="content" content={content} />
				</div>
			</div>
		</section>
	);
};

ProductsPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const ProductsPage = ({ data }) => {
	const { markdownRemark: post } = data;
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<ProductsPageTemplate
				contentComponent={HTMLContent}
				image={frontmatter.image}
				title={post.frontmatter.title}
				content={post.html}
			/>
		</Layout>
	);
};

ProductsPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default ProductsPage;

export const productsPageQuery = graphql`
	query ProductsPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
