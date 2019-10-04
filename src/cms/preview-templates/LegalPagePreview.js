import React from "react";
import PropTypes from "prop-types";
import { LegalPageTemplate } from "templates/legal-page";

const LegalPagePreview = ({ entry, widgetFor }) => {
	return (
		<LegalPageTemplate
			title={entry.getIn(["data", "title"])}
			content={widgetFor("body")}
		/>
	);
};

LegalPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default LegalPagePreview;
