import React from "react";
import PropTypes from "prop-types";
import { SolutionsPageTemplate } from "../../templates/solutions-page";

const SolutionsPagePreview = ({ entry, widgetFor }) => {
	const entrySolutions = entry.getIn(["data", "SolutionList"]);
	const solutions = entrySolutions ? entrySolutions.toJS() : [];

	return (
		<SolutionsPageTemplate
			title={entry.getIn(["data", "title"])}
			solutions={solutions}
			content={widgetFor("body")}
		/>
	);
};

SolutionsPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default SolutionsPagePreview;
