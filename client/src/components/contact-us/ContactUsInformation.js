import React from "react";

const ContactUsInformation = () => {
	return (
		<div className="contact-us-info pt-120 pb-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="contact-us-text mb-50">
							<div className="section-title mb-12">
								<span>Information</span>
								<h2>Contact Details</h2>
							</div>
							<p>
								As you might expect of a company that began as a
								high-end interiors contractor, we pay strict
								attention.
							</p>
						</div>
					</div>
				</div>
				<div className="row contact-us-details-row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="contact-us-widget-item">
							<div className="contact-us-widget-item-icon">
								<i className="pe-7s-phone pe-3x pe-va" />
							</div>
							<div className="contact-us-widget-item-text">
								<h5>Phone Number</h5>
								<span>+91 900494066</span>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="contact-us-widget-item">
							<div className="contact-us-widget-item-icon">
								<i className="pe-7s-mail-open-file pe-3x pe-va" />
							</div>
							<div className="contact-us-widget-item-text">
								<h5>Email Address</h5>
								<span>kartik@gmail.com</span>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="contact-us-widget-item last-item">
							<div className="contact-us-widget-item-icon">
								<i className="pe-7s-pin pe-3x pe-va" />
							</div>
							<div className="contact-us-widget-item-text">
								<h5>Office Location</h5>
								<span>Pune, Maharashtra</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUsInformation;
