import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
	const bgImageUrl = "assets/images/welcome-content/welcome-content.jpg";
	return (
		<div
			className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
				spaceBottomClass ? spaceBottomClass : ""
			}`}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="welcome-content text-center">
							<h5>Who Are We</h5>
							<h1>WE PROPOSE AND DISCUSS DESIGN RULES</h1>
							<p>
								Metasurfaces are generally designed by placing
								scatterers in periodic or pseudo-periodic grids.
								We propose and discuss design rules for
								functional metasurfaces with randomly placed.
								Anisotropic elements that randomly sample.
								Quisque sit amet nisl ante. Fusce lacinia non
								tellus id gravida. Cras neque dolor, volutpat et
								hendrerit et.{" "}
							</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div
							className={`welcome-content-image`}
							style={{
								backgroundImage: `url(${bgImageUrl})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center center",
								width: "100%",
								height: "100%",
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionTitleWithText;
