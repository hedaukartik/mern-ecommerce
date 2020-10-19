import React from "react";

const ContactUsForm = () => {
	return (
		<div className="about-us-one mb-90">
			<div className="container">
				<div className="row mb-20">
					<div className="col-lg-5">
						<div className="contact-us-form">
							<div className="section-title">
								<h2>Get in touch</h2>
							</div>
							<p>
								As you might expect of a company that began as a
								high-end interiors contractor, we pay strict
								attention.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<div className="contact-us-form-start">
							<form>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6 mb-20">
										<input type="text" placeholder="Name" />
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 mb-20">
										<input
											type="email"
											placeholder="Email"
										/>
									</div>
									<div className="col-lg-12">
										<textarea
											name="message"
											placeholder="Message"
											cols="30"
											rows="10"
										></textarea>
										<div className="mb-20"></div>
										<button
											type="submit"
										>
											Send Message
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUsForm;
