import React from "react";
import { Link } from "react-router-dom";

const ImageSliderOneSingle = ({ data, sliderClass }) => {
	return (
		<div className={`single-image ${sliderClass ? sliderClass : ""}`}>
			<Link to={`${data.link}`}>
				<img src={data.image} alt="" />
			</Link>
		</div>
	);
};

export default ImageSliderOneSingle;
