import React from "react";
import { Link } from "react-router-dom";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
	return (
		<div
			className={` ${
				sidebarMenu
					? "sidebar-menu"
					: `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
			} `}
		>
			<nav>
				<ul>
					<li>
						<Link to="/shop">shop</Link>
					</li>
					<li>
						<Link to="/my-account">
							My Account
							{sidebarMenu ? (
								<span>
									<i className="fa fa-angle-right"></i>
								</span>
							) : (
								<i className="fa fa-angle-down" />
							)}
						</Link>
						<ul className="submenu">
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
		</div>
	);
};

export default NavMenu;
