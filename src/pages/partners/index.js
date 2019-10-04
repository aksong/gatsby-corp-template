import React from "react";

import Layout from "../../components/Layout";
import Partners from "../../components/Partners";

const PartnerIndexPage = () => {
	return (
		<Layout>
			<div
				className="full-width-image-container margin-top-0"
				style={{
					backgroundImage: "url('/img/jobs-banner.jpg')"
				}}
			></div>
			<div className="container">
				<section className="section">
					<div className="content">
						<h1>Our Partners</h1>
						<Partners />
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default PartnerIndexPage;
