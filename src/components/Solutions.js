import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { HTMLContent } from "./Content";

const Solutions = props => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<div className="columns is-multiline">
			{posts &&
				posts.map(({ node: post }) => (
					<div className="is-parent column is-12" key={post.id}>
						<header>
							{post.frontmatter.featuredimage ? (
								<div className="featured-thumbnail">
									<PreviewCompatibleImage
										imageInfo={{
											image: post.frontmatter.featuredimage,
											alt: `featured image thumbnail for post ${post.title}`
										}}
									/>
								</div>
							) : null}
							<p className="post-meta">
								<div>
									<Link className="title has-text-primary is-size-4" to={post.fields.slug}>
										{post.frontmatter.title}
									</Link>
								</div>
							</p>
						</header>
						<HTMLContent content={post.html} />
					</div>
				))}
		</div>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query SolutionsQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "solution-post" } } }
				) {
					edges {
						node {
							id
							fields {
								slug
							}
							html
							frontmatter {
								templateKey
								title
								subtitle
								date(formatString: "MMMM YYYY")
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <Solutions data={data} count={count} />}
	/>
);
