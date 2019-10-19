import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";

import useSiteMetadata from "../components/SiteMetadata";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import PressReleaseList from "../components/PressReleaseList";

import request from "superagent";

export const IndexPageTemplate = ({
	contentComponent,
	image,
	title,
	heading,
	subheading,
	mainpitch,
	secondarypitch,
	description,
	intro
}) => {
	const PageContent = contentComponent || Content;
	return (
		<>
			<div className="hero">
				<Parallax
					bgImage={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
					strength={1000}
					bgImageStyle={{ objectFit: "cover" }}
				>
					<div style={{ height: "50vh" }}>
						<Fade bottom>
							<div className="hero-body">
								<div style={{ height: "45vh" }}>
									<div
										style={{
											height: "45vh",
											display: "flex",
											lineHeight: "1",
											justifyContent: "center",
											alignItems: "left",
											flexDirection: "column"
										}}
									>
										<h1
											className="has-text-white has-text-centered has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
											style={{
												lineHeight: "1",
												padding: "0.25em"
											}}
										>
											{title}
										</h1>
										<h3
											className="has-text-white has-text-centered has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
											style={{
												lineHeight: "1",
												padding: "0.25em"
											}}
										>
											{subheading}
										</h3>
									</div>
								</div>
							</div>
						</Fade>
					</div>
				</Parallax>
			</div>

			<div className="container">
				<section className="section section--gradient">
					<div className="columns">
						<div className="column">
							<div className="content">
								<Fade bottom>
									<h2 className="is-size-3">{mainpitch.title}</h2>
								</Fade>
								<Fade bottom>
									<div className="">{mainpitch.description}</div>
								</Fade>
							</div>
							<Fade bottom>
								<section className="section section--gradient">
									<div className="container">
										<div className="section">
											<div className="columns">
												<div className="column is-10 is-offset-1">
													<div className="content">
														<div className="columns">
															<div className="column is-12">
																<h3 className="has-text-weight-semibold is-size-2 has-text-centered">{heading}</h3>
																<HTMLContent markDownString={description} />
															</div>
														</div>
														<div className="columns">
															<div className="column is-12 has-text-centered">
																<Link to="/products">See all products</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</Fade>

							<Fade bottom>
								<div className="content">
									<div>
										<h2 className="is-size-3 has-text-centered">{secondarypitch.title}</h2>
									</div>
									<div className="tile">
										<div className="has-text-centered">
											<HTMLContent markDownString={secondarypitch.description} />
										</div>
									</div>
								</div>
							</Fade>
							<Fade bottom>
								<div className="columns">
									<div className="column is-12">
										<div className="has-text-centered"></div>
									</div>
								</div>
							</Fade>
						</div>
						<div className="column is-2">
							<div className="">
								<PressReleaseList />
							</div>
						</div>
					</div>
				</section>
			</div>
			<Fade bottom>
				<div className="column is-12">
					<div className="has-text-centered"></div>
				</div>
			</Fade>
		</>
	);
};

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	secondarypitch: PropTypes.object,
	description: PropTypes.string
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<IndexPageTemplate
				contentComponent={HTMLContent}
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				secondarypitch={frontmatter.secondarypitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
				html={post.html}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			html
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
				description
				mainpitch {
					title
					description
				}
				secondarypitch {
					title
					description
				}
			}
		}
	}
`;
