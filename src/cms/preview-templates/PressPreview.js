import React from "react";
import PropTypes from "prop-types";
import { PressReleaseTemplate } from "../../templates/press-release";

const PressPreview = ({ entry, widgetFor }) => (
	<PressReleaseTemplate
		content={widgetFor("body")}
		description={entry.getIn(["data", "description"])}
		title={entry.getIn(["data", "title"])}
	/>
);

PressPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default PressPreview;
