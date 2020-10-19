import React from "react";
import { Link } from "react-router-dom";

const AboutUsContact = () => {
	const bgImageUrl = "assets/images/about/about-contact.jpg";
	return (
		
		<div
			className={`about-us-contact pt-130 pb-130`}
			style={{
				backgroundImage: `url(${bgImageUrl})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "top center",
			}}
		>
			<div className="container">
				<div className="row about-us-contact-row">
					<div className="col-lg-10 text-center">
						<div className="about-us-contact-text">
							<span>Why choose us?</span>
							<h2>
								Our ability to bring outstanding results to our
								customers.
							</h2>
							<Link to="/contact">Contact Us</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsContact;
