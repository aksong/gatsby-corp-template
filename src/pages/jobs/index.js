import React from "react";

import Layout from "../../components/Layout";
import JobOpenings from "../../components/JobOpenings";

const JobIndexPage = () => {
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
						<h1>We're Hiring!</h1>
						<JobOpenings />
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default JobIndexPage;
