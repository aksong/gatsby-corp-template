import React from "react";
import Slider from "react-slick";

const InstagramCarousel = props => {
	const { instagramData } = props;
	return (
		<Slider {...settings}>
			{instagramData &&
				instagramData.map((slide, index) => {
					return (
						<div key={index}>
							<a href={slide.link} target="_blank" rel="noopener noreferrer">
								<img src={slide.images.thumbnail.url} />
							</a>
						</div>
					);
				})}
		</Slider>
	);
};

export default InstagramCarousel;
