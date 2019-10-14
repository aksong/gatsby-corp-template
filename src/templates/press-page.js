import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Parallax } from "react-parallax";

import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const PressPageTemplate = ({ content, image, title, date, heading }) => (
	<div className="container">
		<div className="section">
			<Parallax bgImage={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} strength={500} height={500}>
				<div style={{ height: 500 }}>
					<h2
						className="has-text-weight-bold is-size-1"
						style={{
							boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
							color: "white",
							padding: "1rem"
						}}
					>
						{title}
					</h2>
				</div>
			</Parallax>
			<section className="section section--gradient">xxxxxxxxxxxx
				<h3 className="has-text-weight-semibold is-size-2 has-text-centered">{heading}</h3>
				<div className="section">
					<div className="columns is-multiline is-centered"></div>
				</div>
			</section>
		</div>
	</div>
);

PressPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	date: PropTypes.string,
	heading: PropTypes.string,
	content: PropTypes.string,
	intro: PropTypes.array
};

const PressPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<PressPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				date={frrontmatter.date}
				heading={frontmatter.heading}
				description={frontmatter.description}
			/>
		</Layout>
	);
};

PressPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default PressPage;

export const PressPageQuery = graphql`
	query PressPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				image {
					childImageSharp {
						fluid(quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
			}
		}
	}
`;
