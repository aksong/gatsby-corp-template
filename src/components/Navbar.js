import React, { useState } from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

import useSiteMetadata from "./SiteMetadata";

import ProductMenu from "./ProductMenu";
import SolutionsMenu from "./SolutionsMenu";
import CompanyMenu from "./CompanyMenu";

const Navbar = props => {
	const [active, setActive] = useState(false);
	const [navBarActiveClass, setNavBarActiveClass] = useState("");
	const { companyName } = useSiteMetadata();

	const toggleHamburger = () => {
		// toggle the active boolean in the state
		setActive(!active);
		setNavBarActiveClass(!active ? "is-active" : "");
	};

	return (
		<nav className="navbar is-fixed-top" role="navigation" aria-label="main-navigation">
			<div className="container">
				<div className="navbar-brand left-burger">
					<div
						className={`navbar-burger burger left-burger is-small ${navBarActiveClass}`}
						data-target="navMenu"
						onClick={() => toggleHamburger()}
					>
						<span />
						<span />
						<span />
					</div>
					<Link to="/" className="navbar-item" title="Logo">
						<img src={logo} alt={companyName} className="logo" style={{ width: "10em", height: "10em" }} />
					</Link>
					{/* Hamburger menu */}
				</div>
				<div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
					<div className="navbar-start has-text-centered">
						<div className="navbar-item has-dropdown is-hoverable">
							<Link className="navbar-item" activeClassName="is-active" to="/products">
								Products
							</Link>
							<ProductMenu />
						</div>
						<div className="navbar-item has-dropdown is-hoverable">
							<Link className="navbar-item" activeClassName="is-active" to="/solutions">
								Solutions
							</Link>
							<SolutionsMenu />
						</div>

						<div className="navbar-item has-dropdown is-hoverable">
							<Link className="navbar-item" activeClassName="is-active" to="/company">
								Company
							</Link>
							<CompanyMenu />
						</div>

						<Link className="navbar-item" activeClassName="is-active" to="/press">
							Press
						</Link>
					</div>
					<div className="navbar-end has-text-centered"></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
