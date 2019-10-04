import React from "react";

import Layout from "../../components/Layout";
import PressReleases from "../../components/PressReleases";

const PressIndexPage = () => {
	return (
		<Layout>
			<div
				className="full-width-image-container margin-top-0"
				style={{
					backgroundImage: "url('/img/sprinkle-banner.jpg')"
				}}
			></div>
			<div className="container">
				<section className="section">
					<div className="content">
						<h1>Press Releases</h1>
					</div>
					<div className="content">
						<PressReleases />
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default PressIndexPage;
