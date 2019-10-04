import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Content, { HTMLContent } from "../components/Content";

export const LegalPageTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;
	return (
		<div className="container">
			<div className="section">
				<PageContent className="content" content={content} />
			</div>
		</div>
	);
};

LegalPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const LegalPage = ({ data }) => {
	const { markdownRemark: post } = data;
	return (
		<Layout>
			<LegalPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
			/>
		</Layout>
	);
};

LegalPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default LegalPage;

export const LegalPageQuery = graphql`
  query LegalPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
