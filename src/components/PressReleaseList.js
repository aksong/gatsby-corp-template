import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

const PressReleaseList = props => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<div className="">
			<h3 className="has-text-weight-semibold">Press Releases</h3>
			{posts &&
				posts.map(({ node: post }) => (
					<div className="" key={post.id}>
						<a href={post.fields.slug} className="press-release-list-item">
							{post.frontmatter.title}
						</a>
					</div>
				))}
		</div>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query PressReleaseListQuery {
				allMarkdownRemark(
					sort: { order: ASC, fields: [frontmatter___sortOrder] }
					filter: { frontmatter: { templateKey: { eq: "press-release" }, isActive: { eq: true } } }
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
		render={(data, count) => <PressReleaseList data={data} count={count} />}
	/>
);
