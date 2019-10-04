import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

const SolutionsMenu = props => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<div className="navbar-dropdown">
			{posts &&
				posts.map(({ node: post }) => (
					<a className="navbar-item" href={post.fields.slug} key={post.id}>
						{post.frontmatter.title}
					</a>
				))}
		</div>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query SolutionsMenuQuery {
				allMarkdownRemark(
					sort: { order: ASC, fields: [frontmatter___sortOrder] }
					filter: { frontmatter: { templateKey: { eq: "solution" }, isActive: { eq: true } } }
				) {
					edges {
						node {
							id
							fields {
								slug
							}
							frontmatter {
								title
								url
								sortOrder
								isActive
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <SolutionsMenu data={data} count={count} />}
	/>
);
