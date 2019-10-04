import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const JobPostTemplate = ({
	content,
	contentComponent,
	description,
	title,
	helmet
}) => {
	const PostContent = contentComponent || Content;

	return (
		<section className="section">
			<div className="container">
				<section className="section">
					{helmet || ""}
					<div className="container content">
						<div className="columns">
							<div className="column is-10 is-offset-1">
								<h1 className="title is-size-2 has-text-weight-bold is-bold-light">
									{title}
								</h1>
								<p>{description}</p>
								<PostContent content={content} />
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

JobPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	title: PropTypes.string,
	helmet: PropTypes.object
};

const JobPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<JobPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate="%s | Job">
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name="description"
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

JobPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default JobPost;

export const pageQuery = graphql`
  query JobPostByID($id: String!) {
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
