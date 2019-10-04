import React from "react";
import PropTypes from "prop-types";
import { TermsOfUsePageTemplate } from "templates/terms-of-use-page";

const TermsOfUsePagePreview = ({ entry, widgetFor }) => {
	return (
		<TermsOfUsePageTemplate
			title={entry.getIn(["data", "title"])}
			content={widgetFor("body")}
		/>
	);
};

TermsOfUsePagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default TermsOfUsePagePreview;
