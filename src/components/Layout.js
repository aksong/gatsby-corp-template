import React from "react";
import { Helmet } from "react-helmet";

import Footer from "./Footer";
import Navbar from "./Navbar";

import "./local-styles.scss";

import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
	const { title, description } = useSiteMetadata();
	return (
		<>
			<Helmet>
				<html lang="en" className="has-navbar-fixed-top" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<link rel="shortcut icon" href={`${withPrefix("/")}img/icons/icon-48x48.png`} />
				<link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix("/")}img/apple-touch-icon.png`} />

				<link rel="mask-icon" href={`${withPrefix("/")}img/favicon.ico`} color="#0d1b3f" />
				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta property="og:image" content={`${withPrefix("/")}img/homepage_image_sfw.jpg`} />
			</Helmet>
			<div className="site">
				<Navbar />
				<div className="site-content">{children}</div>

				<Footer />
			</div>
		</>
	);
};

export default TemplateWrapper;
