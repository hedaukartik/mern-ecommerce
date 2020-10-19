import React from "react";

const AboutUsCounter = () => {
	return (
		<div className="about-us-counter pt-70 mt-40">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="counter-item">
							<div className="counter-item-number">
								<h2 className="count">85</h2>
							</div>
                            <div className="counter-item-text">
                                <h5>Projects<br />Completed</h5>
                            </div>
						</div>
					</div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
						<div className="counter-item">
							<div className="counter-item-number">
								<h2 className="count">127</h2>
							</div>
                            <div className="counter-item-text">
                                <h5>Happy<br />Clients</h5>
                            </div>
						</div>
					</div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
						<div className="counter-item">
							<div className="counter-item-number">
								<h2 className="count">36</h2>
							</div>
                            <div className="counter-item-text">
                                <h5>Awards<br />Received</h5>
                            </div>
						</div>
					</div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
						<div className="counter-item">
							<div className="counter-item-number">
								<h2 className="count">74</h2>
							</div>
                            <div className="counter-item-text">
                                <h5>Cups of<br />Coffee</h5>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsCounter;
