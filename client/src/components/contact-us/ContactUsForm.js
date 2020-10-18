import React from "react";

const ContactUsForm = () => {
	return (
		<div className="container">
			<div className="row">
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
						<div className="row">
							<div className="col-lg-8">
								<div className="contact-us-form-start">
									<form>
										<div className="row">
											<div className="col-lg-6 col-md-6 col-sm-6">
												<input
													type="text"
													placeholder="Name"
												/>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6">
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
												<button
													type="submit"
													className="site-btn"
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
			</div>
		</div>
	);
};

export default ContactUsForm;
