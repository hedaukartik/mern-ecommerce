import React from "react";
import AboutUsCounter from "./AboutUsCounter";

const AboutUsServices = () => {
	return (
		<div className="about-us-one pt-120 pb-90">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<span>Our specialization</span>
							<h2>What we do</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="services__item">
							<i className="pe-7s-paint pe-4x pe-va" />
							<h4>Interior Design</h4>
							<p>
								As you might expect of a company that began as a
								high-end interiors contractor, we pay strict
								attention.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="services__item">
							<i className="pe-7s-portfolio pe-4x pe-va" />
							<h4>Office Design</h4>
							<p>
								Our commitment to exceptional quality has never
								wavered. To day ranks as one of the most
								highly-regarded construction.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="services__item">
							<i className="pe-7s-home pe-4x pe-va" />
							<h4>Home Design</h4>
							<p>
								Interdisciplinary architectural studio with
								cultural, residential and commercial projects
								built worldwide.
							</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="services__item">
							<i className="pe-7s-pen pe-4x pe-va" />
							<h4>Design Drawing</h4>
							<p>
								Creating architectural and creative solutions to
								help people realize their vision and make them a
								reality.
							</p>
						</div>
					</div>
				</div>
			<AboutUsCounter />
			</div>
		</div>
	);
};

export default AboutUsServices;
