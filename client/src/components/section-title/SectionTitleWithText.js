import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
	return (
		<div
			className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
				spaceBottomClass ? spaceBottomClass : ""
			}`}
		>
			<div className="container">
				<div className="welcome-content text-center">
					<h5>Who Are We</h5>
					<h1>WE PROPOSE AND DISCUSS DESIGN RULES</h1>
					<p>
					Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic grids. We propose and discuss design rules for functional metasurfaces with randomly placed.
					Anisotropic elements that randomly sample. Quisque sit amet nisl ante. Fusce lacinia non tellus id gravida. Cras neque dolor, volutpat et hendrerit et.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SectionTitleWithText;
