import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
	return (
		<nav className="offcanvas-navigation" id="offcanvas-navigation">
			<ul>
				<li>
					<Link to="/shop">shop</Link>
				</li>
				<li className="menu-item-has-children">
					<Link to="/my-account">My Account</Link>
					<ul className="sub-menu">
						<li>
							<Link to="/my-account">Manage Account</Link>
						</li>
						<li>
							<Link to="/orders">orders</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to="/blog">blog</Link>
				</li>
				<li>
					<Link to="/contact">about us</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MobileNavMenu;
