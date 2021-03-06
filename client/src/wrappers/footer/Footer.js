import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";
import "../../assets/scss/_footer.scss";

const Footer = ({
	backgroundColorClass,
	spaceTopClass,
	spaceBottomClass,
	containerClass,
	extraFooterClass,
	sideMenu,
}) => {
	const [scroll, setScroll] = useState(0);
	const [top, setTop] = useState(0);

	useEffect(() => {
		setTop(100);
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		animateScroll.scrollToTop();
	};

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	const bgImageUrl = "assets/images/footer/footerBg.jpg";
	return (
		<footer
			className={`footer-area ${
				backgroundColorClass ? backgroundColorClass : ""
			} ${spaceTopClass ? spaceTopClass : ""} ${
				spaceBottomClass ? spaceBottomClass : ""
			} ${extraFooterClass ? extraFooterClass : ""}`}
			style={{
				backgroundImage: `url(${bgImageUrl})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className={`${containerClass ? containerClass : "container"}`}>
				<div className="row">
					<div
						className={`${
							sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
						}`}
					>
						{/* footer copyright */}
						<FooterCopyright
							footerLogo="/assets/img/logo/logo.png"
							spaceBottomClass="mb-30"
						/>
					</div>
					<div
						className={`${
							sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
						}`}
					>
						<div className="footer-widget mb-30 ml-30">
							<div className="footer-title">
								<h3>ABOUT US</h3>
							</div>
							<div className="footer-list">
								<ul>
									<li>
										<Link to="/about">About us</Link>
									</li>
									<li>
										<Link to="/about">Services</Link>
									</li>
									<li>
										<Link to="/about">Our Works</Link>
									</li>
									<li>
										<Link to="/about">FAQs</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div
						className={`${
							sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
						}`}
					>
						<div
							className={`${
								sideMenu
									? "footer-widget mb-30 ml-95"
									: "footer-widget mb-30 ml-50"
							}`}
						>
							<div className="footer-title">
								<h3>USEFUL LINKS</h3>
							</div>
							<div className="footer-list">
								<ul>
									<li>
										<Link
											to={process.env.PUBLIC_URL + "#/"}
										>
											Returns
										</Link>
									</li>
									<li>
										<Link
											to={process.env.PUBLIC_URL + "#/"}
										>
											Support Policy
										</Link>
									</li>
									<li>
										<Link
											to={process.env.PUBLIC_URL + "#/"}
										>
											Size guide
										</Link>
									</li>
									<li>
										<Link
											to={process.env.PUBLIC_URL + "#/"}
										>
											FAQs
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div
						className={`${
							sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-6"
						}`}
					>
						<div
							className={`${
								sideMenu
									? "footer-widget mb-30 ml-145"
									: "footer-widget mb-30 ml-75"
							}`}
						>
							<div className="footer-title">
								<h3>FOLLOW US</h3>
							</div>
							<div className="footer-list">
								<ul>
									<li>
										<a
											href="//www.facebook.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											Facebook
										</a>
									</li>
									<li>
										<a
											href="//www.twitter.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											Twitter
										</a>
									</li>
									<li>
										<a
											href="//www.instagram.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											Instagram
										</a>
									</li>
									<li>
										<a
											href="//www.youtube.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											Youtube
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div
						className={`${
							sideMenu ? "col-xl-3 col-sm-8" : "col-lg-3 col-sm-6"
						}`}
					>
						{/* footer newsletter */}
						<FooterNewsletter
							spaceBottomClass="mb-30"
							sideMenu={sideMenu}
						/>
					</div>
				</div>
			</div>
			<button
				className={`scroll-top ${scroll > top ? "show" : ""}`}
				onClick={() => scrollToTop()}
			>
				<i className="fa fa-angle-double-up"></i>
			</button>
		</footer>
	);
};

export default Footer;
