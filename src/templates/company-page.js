import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Content, { HTMLContent } from "../components/Content";

export const CompanyPageTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;
	return (
		<div className="container">
			<div className="section">
				<PageContent className="content" content={content} />
			</div>
		</div>
	);
};

CompanyPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const CompanyPage = ({ data }) => {
	const { markdownRemark: post } = data;
	return (
		<Layout>
			<CompanyPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
			/>
		</Layout>
	);
};

CompanyPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default CompanyPage;

export const CompanyPageQuery = graphql`
  query CompanyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
