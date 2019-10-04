import React from "react";
import PropTypes from "prop-types";
import { ProductsPageTemplate } from "../../templates/products-page";

const ProductsPreview = ({ entry, getAsset }) => {
	const data = entry.getIn(["data"]).toJS();

	if (data) {
		return (
			<ProductsPageTemplate
				image={data.image}
				title={data.title}
				heading={data.heading}
				subheading={data.subheading}
				description={data.description}
				winners={data.winners}
				mainpitch={data.mainpitch || {}}
			/>
		);
	} else {
		return <div>Loading...</div>;
	}
};

ProductsPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default ProductsPreview;
