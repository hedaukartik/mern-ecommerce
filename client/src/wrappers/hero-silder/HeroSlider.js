import React from "react";
import Swiper from "react-id-swiper";
import heroSliderData from "../../data/hero-slider.json";
import HeroSliderSingle from "../../components/hero-slider/HeroSliderSingle";

const HeroSlider = () => {
	const params = {
		effect: "fade",
		loop: true,
		speed: 500,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		watchSlidesVisibility: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		pagination: {
			el: ".swiper-pagination", // little dots under the slides for navigation
			clickable: true, // allows you to click on the little dots
		},
		renderPrevButton: () => (
			<button className="swiper-button-prev ht-swiper-button-nav">
				<i className="pe-7s-angle-left" />
			</button>
		),
		renderNextButton: () => (
			<button className="swiper-button-next ht-swiper-button-nav">
				<i className="pe-7s-angle-right" />
			</button>
		),
	};

	return (
		<div className="slider-area">
			<div className="slider-active-2 nav-style-3">
				<Swiper {...params}>
					{heroSliderData &&
						heroSliderData.map((single, key) => {
							return (
								<HeroSliderSingle
									sliderClassName="swiper-slide"
									data={single}
									key={key}
								/>
							);
						})}
				</Swiper>
			</div>
		</div>
	);
};

export default HeroSlider;
