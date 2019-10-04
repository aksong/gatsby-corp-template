import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import Content, { HTMLContent } from "../components/Content";

export const PrivacyPageTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;
	return (
		<div className="container">
			<div className="section">
				<PageContent className="content" content={content} />
			</div>
		</div>
	);
};

PrivacyPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const PrivacyPage = ({ data }) => {
	const { markdownRemark: post } = data;
	return (
		<Layout>
			<PrivacyPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
			/>
		</Layout>
	);
};

PrivacyPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default PrivacyPage;

export const PrivacyPageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
