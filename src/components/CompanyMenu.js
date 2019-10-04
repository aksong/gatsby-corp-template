import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

const CompanyMenu = () => {
	return (
		<div className="navbar-dropdown">
			<a className="navbar-item" href="/about">
				About
			</a>
			<a className="navbar-item" href="/jobs">
				Jobs
			</a>
			<a className="navbar-item" href="/partners">
				Partners
			</a>
			<a className="navbar-item" href="/contact">
				Contact
			</a>
		</div>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query CompanyMenuQuery {
				allMarkdownRemark(
					sort: { order: ASC, fields: [frontmatter___sortOrder] }
					filter: { frontmatter: { templateKey: { eq: "Company" }, isActive: { eq: true } } }
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
		render={(data, count) => <CompanyMenu data={data} count={count} />}
	/>
);
