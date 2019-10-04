import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import Content, { HTMLContent } from "../components/Content";

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;
	return (
		<div className="container">
			<div className="section">
				<PageContent className="content" content={content} />
			</div>
		</div>
	);
};

ContactPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const ContactPage = ({ data }) => {
	const { markdownRemark: post } = data;
	return (
		<Layout>
			<ContactPageTemplate
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
			/>
		</Layout>
	);
};

ContactPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
