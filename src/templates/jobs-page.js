import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Parallax } from "react-parallax";

import Layout from "../components/Layout";

export const JobsPageTemplate = ({ image, title, heading, description }) => (
	<div className="content">
		<Parallax
			bgImage={
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
			}
			strength={300}
			bgImageStyle={{ objectFit: "cover" }}
		>
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
		<section className="section section--gradient">
			<h3 className="has-text-weight-semibold is-size-2 has-text-centered">
				{heading}
			</h3>
			<div className="section">
				<div className="columns is-multiline is-centered"></div>
			</div>
		</section>
	</div>
);

JobsPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	description: PropTypes.string,
	intro: PropTypes.array
};

const JobsPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<JobsPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				description={frontmatter.description}
			/>
		</Layout>
	);
};

JobsPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default JobsPage;

export const JobsPageQuery = graphql`
  query JobsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
      }
    }
  }
`;
