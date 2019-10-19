import React from "react";
import PropTypes from "prop-types";
import { Remarkable } from "remarkable";

export const HTMLContent = ({ content, markDownString, className }) => {
	const md = new Remarkable();
	let renderContent = content ? content : md.render(markDownString);
	return <div className={className} dangerouslySetInnerHTML={{ __html: renderContent }} />;
};

const Content = ({ content, className }) => <div className={className}>{content}</div>;

Content.propTypes = {
	content: PropTypes.node,
	className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
