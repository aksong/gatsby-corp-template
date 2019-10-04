import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Parallax } from "react-parallax";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const SolutionsPageTemplate = ({ image, title, content, contentComponent }) => {
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

SolutionsPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const SolutionsPage = ({ data }) => {
	const { markdownRemark: post } = data;
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<SolutionsPageTemplate
				contentComponent={HTMLContent}
				image={frontmatter.image}
				title={post.frontmatter.title}
				content={post.html}
			/>
		</Layout>
	);
};

SolutionsPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default SolutionsPage;

export const SolutionsPageQuery = graphql`
	query SolutionsPage($id: String!) {
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
