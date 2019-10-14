import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const PressReleases = props => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<div className="container">
			{posts &&
				posts.map(({ node: post }) => (
					<a href={post.fields.slug}>
						<div className="columns is-multiline" key={post.id}>
							<div className="column">
								<div className="is-size-4 has-text-weight-semibold">{post.frontmatter.title}</div>
								<div className="has-text-black has-text-weight-semibold">{post.frontmatter.date}</div>
								<div className="has-text-black">{post.excerpt}</div>
							</div>
						</div>
					</a>
				))}
		</div>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query PressReleasesQuery {
				allMarkdownRemark(
					sort: { order: ASC, fields: [frontmatter___sortOrder] }
					filter: { frontmatter: { templateKey: { eq: "press-release" }, isActive: { eq: true } } }
				) {
					edges {
						node {
							excerpt(pruneLength: 400)
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								url
								sortOrder
								isActive
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 200, maxHeight: 200) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <PressReleases data={data} count={count} />}
	/>
);
