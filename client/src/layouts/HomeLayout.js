import React, { Fragment } from "react";
import HeroSlider from "../wrappers/hero-silder/HeroSlider";
import SectionTitleWithText from "../components/section-title/SectionTitleWithText";
import Newsletter from "../wrappers/news-letter/NewsLetter";
import ImageSlider from "../wrappers/image-slider/ImageSlider";
const HomeLayout = () => {
	return (
		<Fragment>
			{/* hero slider */}
			<HeroSlider />
			{/* section title */}
			<SectionTitleWithText
				spaceTopClass="pt-95"
				spaceBottomClass="pb-90"
			/>
			{/* newsletter */}
			<Newsletter spaceBottomClass="pb-100" />
			{/* image slider */}
			<ImageSlider />
		</Fragment>
	);
};

export default HomeLayout;
