import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
	return (
		<nav className="offcanvas-navigation" id="offcanvas-navigation">
			<ul>
				<li>
					<Link to="/shop">SHOP</Link>
				</li>
				<li>
					<Link to="/contact">CONTACT US</Link>
				</li>
				<li>
					<Link to="/blog">BLOG</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MobileNavMenu;
